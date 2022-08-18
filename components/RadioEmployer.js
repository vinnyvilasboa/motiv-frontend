import Form from 'react-bootstrap/Form';

function RadioEmployer() {
  return (
    <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="Are you an employer?"
      />
    </Form>
  );
}

export default RadioEmployer;