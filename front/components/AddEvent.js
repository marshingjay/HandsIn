import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import React, { useContext, useState, useCallback } from 'react';
import useSWR from 'swr'

const fetcher = url => fetch(url).then(res => res.json())

const updateDB = (date, event_id, event_name, description, start_time, end_time, location, max_vols, organization_id) => {
  console.log('updating');
  const {data, error} = useSWR('../pages/api/create/event=' + event_id);
  if(!error){
    const {data_2, error_2} = useSWR('../pages/api/set/event='+event_id+',Date='+date+',StartTime='+start_time+',EndTime='+end_time+',Location='+location+',MaxVolunteers='+max_vols+'OrganizationID'+organization_id);
  }
};


function AddEvent() {
  const [date, event_id, event_name, description, start_time, end_time, location, max_vols, organization_id] = useState("");
  return (
    <Form>
      <br />
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEventDate">
      <Form.Label>Event Date(MM/DD/YYYY)</Form.Label>
      <Form.Control value = {date} placeholder="Enter the date as shown" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEventId">
      <Form.Label>Event ID</Form.Label>
      <Form.Control value = {event_id} placeholder="Enter the 6 digit Event ID" />
    </Form.Group>

    <Form.Group as={Col} controlId="formEventName">
      <Form.Label>Event Name</Form.Label>
      <Form.Control value = {event_name} />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="FormGridEventDescription">
    <Form.Label>Event Description</Form.Label>
    <Form.Control value = {description} placeholder="Please provide us with a description of your volunteer event" />
  </Form.Group>

<Form.Row>
   <Form.Group as={Col} controlId="formStartTime">
    <Form.Label>Event Start Time (XX:XX AM/PM)</Form.Label>
    <Form.Control value = {start_time} placeholder="Example start time: 04:35 PM" />
  </Form.Group>
  <Form.Group as={Col} controlId="formEndTime">
    <Form.Label>Event End Time (XX:XX AM/PM)</Form.Label>
    <Form.Control value = {end_time} placeholder="" />
  </Form.Group>
  </Form.Row>
  

  <Form.Row>
    <Form.Group as={Col} controlId="formLocation">
      <Form.Label>Location</Form.Label>
      <Form.Control value = {location}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formMaxVol">
      <Form.Label>Maximum Volunteers</Form.Label>
      <Form.Control value = {max_vols}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formOrganizationId">
      <Form.Label>Organization ID</Form.Label>
      <Form.Control value = {organization_id}/>
    </Form.Group>
  </Form.Row>

  {/* <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
<button onClick = {() => updateDB(date, event_id, event_name, description, start_time, end_time, location, max_vols, organization_id)} variant="secondary" type="submit">
    Submit
  </button>
  
</Form>

  )
}

export default AddEvent;
