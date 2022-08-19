import Form from 'react-bootstrap/Form';

function RadioEmployer() {
  return (
    <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="Are You An Employer?"
        style={{paddingBottom: '10px'}}
      />
    </Form>
  );
}

export default RadioEmployer;