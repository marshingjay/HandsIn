import * as db from '../db.js'



export default async (req, res) => {
    const {
      query: { db_set },
    } = req
    let my_query = `${db_set}`;
    let my_type = my_query.split("=")[0];
    let my_item = my_query.split("=")[1].split(",")[0];
    var my_returned_json;
    if(my_type == 'volunteer'){
        my_returned_json = await db.getVolunteerByKey(my_item);
    }
    else if(my_type == 'organization'){
        my_returned_json = await db.getOrganizationByKey(my_item);
    }
    else if(my_type == 'event'){
        my_returned_json = await db.getEventByKey(my_item);
    }
    let add_params = my_query.split(',');
    if(my_returned_json == null){
        res.status(400).end('Could not find the given db item!');
    }
    else{
        var iter;
        let my_query = {};
        let num_params = add_params.length;
        for(iter = 1; iter < num_params; iter++){
            let my_eq = add_params[iter];
            let my_attr = my_eq.split('=')[0];
            let new_value = my_eq.split('=')[1];
            if(my_type == 'event'){
                my_query['TableName'] = "Event";
                my_query['Key'] = {};
                my_query['Key']['EventID'] = my_returned_json['Item']['EventID'];
                my_query['UpdateExpression'] = "set " + my_attr + " = :val";
                my_query['ExpressionAttributeValues'] = {};
                my_query['ExpressionAttributeValues'][':val'] = new_value;
                my_query['ReturnedValues'] = "Attribute updated!";
                await db.setDBdata(my_query);
                my_returned_json = await db.getOrganizationByKey(my_item);
                
            }
            else if(my_type == 'organization'){
                my_query['TableName'] = "Organization";
                my_query['Key'] = {};
                my_query['Key']['Username'] = my_returned_json['Item']['Username'];
                my_query['UpdateExpression'] = "set " + my_attr + " = :val";
                my_query['ExpressionAttributeValues'] = {};
                my_query['ExpressionAttributeValues'][':val'] = new_value;
                my_query['ReturnedValues'] = "Attribute updated!";
                await db.setDBdata(my_query);
                my_returned_json = await db.getOrganizationByKey(my_item);
    
            }
            else{ //volunteer
                my_query['TableName'] = "Volunteer";
                my_query['Key'] = {};
                my_query['Key']['Username'] = my_returned_json['Item']['Username'];
                my_query['UpdateExpression'] = "set " + my_attr + " = :val";
                my_query['ExpressionAttributeValues'] = {};
                my_query['ExpressionAttributeValues'][':val'] = new_value;
                my_query['ReturnedValues'] = "Attribute updated!";
                await db.setDBdata(my_query);
                my_returned_json = await db.getVolunteerByKey(my_item);
            }
        } 
        return res.status(200).json(my_returned_json);
    }
  }