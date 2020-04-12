import * as db from '../db.js'



export default async (req, res) => {
    const {
      query: { db_get },
    } = req;
    let my_query = `${db_get}`;
    let my_type = my_query.split("=")[0];
    let my_item = my_query.split("=")[1];
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

    
    if(my_returned_json == null){
        res.status(400).end('Could not find the given db item!');
    }
    else{
        return res.status(200).json(my_returned_json) 
    }
  }