import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

function AddEvent() {
  return (
    <Form>
      <br />
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEventDate">
      <Form.Label>Event Date(MM/DD/YYYY)</Form.Label>
      <Form.Control placeholder="Enter the date as shown" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEventId">
      <Form.Label>Event ID</Form.Label>
      <Form.Control placeholder="Enter the 6 digit Event ID" />
    </Form.Group>

    <Form.Group as={Col} controlId="formEventName">
      <Form.Label>Event Name</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="FormGridEventDescription">
    <Form.Label>Event Description</Form.Label>
    <Form.Control placeholder="Please provide us with a description of your volunteer event" />
  </Form.Group>

<Form.Row>
   <Form.Group as={Col} controlId="formStartTime">
    <Form.Label>Event Start Time (XX:XX AM/PM)</Form.Label>
    <Form.Control placeholder="Example start time: 04:35 PM" />
  </Form.Group>
  <Form.Group as={Col} controlId="formEndTime">
    <Form.Label>Event End Time (XX:XX AM/PM)</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>
  </Form.Row>
  

  <Form.Row>
    <Form.Group as={Col} controlId="formLocation">
      <Form.Label>Location</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formMaxVol">
      <Form.Label>Maximum Volunteers</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formOrganizationId">
      <Form.Label>Organization ID</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  {/* <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}

  <Button variant="secondary" type="submit">
    Submit
  </Button>
</Form>
  )
}

export default AddEvent;
