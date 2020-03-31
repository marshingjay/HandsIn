
var AWS = require('aws-sdk');

AWS.config.update({
    "region": "us-east-2",
    "accessKeyId": "", //PASTE YOUR KEY HERE
    "secretAccessKey": "" //PASTE YOUR SECRET KEY HERE
});

var docClient = new AWS.DynamoDB.DocumentClient();



export function getVolunteerByKey(key){
    let params = {
        TableName: "Volunteer",
        Key: {
            Username: key
        }
    };
    return getDBdata(params);
}

function newEvent(organization_id, date, location, end_time, description, event_name, max_volunteers, start_time){
    var cur_table_params = {
        TableName: "Event"
    }
    var event_data = queryDB({cur_table_params});
    var last_id_str = event_data[event_data.length - 1].EventID;
    var new_id_str = last_id_str.slice(0, -1) + toString(parseInt(last_id_str.slice(-1, 0) + 1));
    let params = {
        TableName: "Event",
        Item:{
            "VolunteerIDs": [],
            "Date": date,
            "Location": location,
            "EndTime": end_time,
            "EventID": new_id_str,
            "Description": description,
            "EventName": event_name,
            "MaxVolunteers": max_volunteers,
            "StartTime": start_time,
            "OrganizationID": organization_id
        }
    };
    createNewEntry(params);
    return getEventByKey(new_id_str);
}

export function getOrganizationByKey(key){
    
    let params = {
        TableName: "Organization",
        Key: {
            Username: key
        }
    };
    let my_data = getDBdata(params);
    return my_data;
}

export function getEventByKey(key){
    let params = {
        TableName: "Event",
        Key: {
            EventID: key
        }
    };
    return getDBdata(params);
}


async function getDBdata(params){
    let my_data = await docClient.get(params, function (err, data) {
        if (err) {
            console.log('error fetching db data');
        }
        else{
            console.log('feching db data was succesful');
        }
    });
    return await my_data.promise();
};
