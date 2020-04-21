import * as db from '../db.js'

export default async (req, res) => {
    const {
        query: { db_create },
    } = req;
    let my_query = `${db_create}`;
    let my_type = my_query.split('=')[0];
    let my_item = my_query.split('=')[1];
    var my_return;
    let my_db_query = {};
    my_db_query['Item'] = {};
    if(my_type == 'event'){
        my_db_query['TableName'] = 'Event';
        my_db_query['Item']['EventID'] = my_item;
    }
    else if (my_type == 'volunteer'){
        my_db_query['TableName'] = 'Volunteer';
        my_db_query['Item']['Username'] = my_item;
    }
    else{
        my_db_query['TableName'] = 'Organization';
        my_db_query['Item']['Username'] = my_item;
    }
    console.log(my_db_query);
    let my_returned_json = await db.createNewEntry(my_db_query);
    console.log('item created');
    return res.status(200).json(my_returned_json);
}