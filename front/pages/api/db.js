const AWS = require('aws-sdk');

AWS.config.update({
    "region": "REGION",
    "accessKeyId": "", //PASTE YOUR KEY HERE
    "secretAccessKey": "" //PASTE YOUR SECRET KEY HERE
});

let docClient = new AWS.DynamoDB.DocumentClient();

export function getVolunteerByKey(key){
    let params = {
        TableName: "Volunteer",
        Key: {
            Username: key
        }
    };
    return getDBdata(params);
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


function handleError(err, res) {
    res.json({ 'message': 'server side error', statusCode: 500, error: err });
}

function handleSuccess(data, res) {
    res.json({ message: 'success', statusCode: 200, data: data});
}
