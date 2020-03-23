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

export function newEvent(organization_id, date, location, end_time, description, event_name, max_volunteers, start_time){
    var cur_table_params = {
        TableName: "Event"
    }
    var event_data = queryDB({cur_table_params})
    var last_id_str = event_data[event_data.length - 1].EventID
    var new_id_str = last_id_str.slice(0, -1) + toString(parseInt(last_id_str.slice(-1, 0) + 1)) 
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
    }
    return createNewEntry(params)
}

export function getOrganizationByKey(key){
    let params = {
        TableName: "Organization",
        Key: {
            Username: key
        }
    };
    return getDBdata(params);
}

export function getReviewByKey(key){
    let params = {
        TableName: "Review",
        Key: {
            ReviewID: key
        }
    };
    return getDBdata(params);
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

function getDBdata(params){
    let my_data = docClient.get(params, function (err, data) {
        if (err) {
            console.log(err);
            handleError(err, res);
        }
        else {
            handleSuccess(data.Item, res);
        }
    });
    return my_data;
};


function queryDB(params){
    let my_data = docClient.query(params, function(err, data){
        if (err) {
            console.log(err);
            handleError(err, res);
        }
        else {
            handleSuccess(data.Item, res);
        }
    });
}

function createNewEntry(param){
    docClient.put(params, function(err, data) {
        if (err) {
            console.log(err);
            handleError(err, res);
        }
        else {
            handleSuccess(data.Item, res);
        }
    });
}

function handleError(err, res) {
    res.json({ 'message': 'server side error', statusCode: 500, error: err });
}

function handleSuccess(data, res) {
    res.json({ message: 'success', statusCode: 200, data: data});
}
