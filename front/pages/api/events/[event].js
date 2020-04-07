import { getEventByKey } from "../db.js";

export default (req, res) => {
    const {
        query: {event},
    } = req

    // do database query given event, which corresponds to the event key...
    //return an event object storing all the relevant information 
}