import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import React, { useContext, useState, useCallback } from 'react';
import useSWR from 'swr'

const fetcher = url => fetch(url).then(res => res.json())

const updateDB = (date, event_id, event_name, description, start_time, end_time, location, max_vols, organization_id) => {
  console.log('updating');
  const {data, error} = useSWR('../api/create/event=' + event_id);
  if(!error){
    const {data_2, error_2} = useSWR('../api/set/event='+event_id+',Date='+date+',StartTime='+start_time+',EndTime='+end_time+',Location='+location+',MaxVolunteers='+max_vols+'OrganizationID'+organization_id);
  }
};


function AddEvent() {
  //const [bleh, bleh2, date, event_id, event_name, description, start_time, end_time, location, max_vols, organization_id] = useState("");
  const [date, set_date] = useState("");
  const [event_id, set_event_id] = useState("");
  const [event_name, set_event_name] = useState("");
  const [description, set_description] = useState("");
  const [start_time, set_start_time] = useState("");
  const [end_time, set_end_time] = useState("");
  const [location, set_location] = useState("");
  const [max_vols, set_max_vols] = useState("");
  const [organization_id, set_organization_id] = useState("");
  
  return (
    <Form>
      <br />
  <Form.Row>
    {/* <Form.Group as={Col} controlId="test_entry">
      <Form.Lebel></Form.Lebel>
      <Form.Control value = {bleh} placeholder="Enter the value"/>
    </Form.Group>  */}
    <Form.Group as={Col} controlId="formGridEventDate">
      <Form.Label></Form.Label>
      <Form.Control value = {date} 
      onChange={(e) => set_date(e.target.value)}
      placeholder="Enter the date as shown" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEventId">
      <Form.Label>Event ID</Form.Label>
      <Form.Control value = {event_id} 
      onChange={(e) => set_event_id(e.target.value)}
      placeholder="Enter the 6 digit Event ID" />
    </Form.Group>

    <Form.Group as={Col} controlId="formEventName">
      <Form.Label>Event Name</Form.Label>
      <Form.Control value = {event_name} 
       onChange={(e) => set_event_name(e.target.value)}
       placeholder="Placeholder"/>
    </Form.Group>

    
  </Form.Row>

  <Form.Group controlId="FormGridEventDescription">
    <Form.Label>Event Description</Form.Label>
    <Form.Control value = {description} 
     onChange={(e) => set_description(e.target.value)}
     placeholder="Please provide us with a description of your volunteer event" />
  </Form.Group>

<Form.Row>
   <Form.Group as={Col} controlId="formStartTime">
    <Form.Label>Event Start Time (XX:XX AM/PM)</Form.Label>
    <Form.Control value = {start_time} 
     onChange={(e) => set_start_time(e.target.value)}
     placeholder="Example start time: 04:35 PM" />
  </Form.Group>
  <Form.Group as={Col} controlId="formEndTime">
    <Form.Label>Event End Time (XX:XX AM/PM)</Form.Label>
    <Form.Control value = {end_time} 
     onChange={(e) => set_end_time(e.target.value)}
     placeholder="" />
  </Form.Group>
  </Form.Row>
  

  <Form.Row>
    <Form.Group as={Col} controlId="formLocation">
      <Form.Label>Location</Form.Label>
      <Form.Control value = {location}
       onChange={(e) => set_location(e.target.value)}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formMaxVol">
      <Form.Label>Maximum Volunteers</Form.Label>
      <Form.Control value = {max_vols}
       onChange={(e) => set_max_vols(e.target.value)}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formOrganizationId">
      <Form.Label>Organization ID</Form.Label>
      <Form.Control value = {organization_id}
       onChange={(e) => set_organization_id(e.target.value)}/>
    </Form.Group>
  </Form.Row>

  {/* <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  <Button onClick = {() => updateDB(date, event_id, event_name, description, start_time, end_time, location, max_vols, organization_id)} variant="secondary" type="submit">
    Submit
  </Button>
  
</Form>

  )
}

export default AddEvent;
