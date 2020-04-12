import * as db from '../db.js'

export default async (req, res) => {
    const {
        query: { db_delete },
    } = req;
    let my_query = `${db_delete}`;
    let my_type = my_query.split('=')[0];
    let my_item = my_query.split('=')[1];
    var my_return;
    let my_db_query = {};
    my_db_query['Key'] = {};
    if(my_type == 'event'){
        my_db_query['TableName'] = 'Event';
        my_db_query['Key']['EventID'] = my_item;
    }
    else if (my_type == 'volunteer'){
        my_db_query['TableName'] = 'Volunteer';
        my_db_query['Key']['Username'] = my_item;
    }
    else{
        my_db_query['TableName'] = 'Organization';
        my_db_query['Key']['Username'] = my_item;
    }
    console.log(my_db_query);
    await db.deleteEntry(my_db_query);
    return 'done';
}