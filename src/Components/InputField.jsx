import Form from 'react-bootstrap/Form';

const InputField = ({ setInputValue }) => {

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <Form.Control placeholder="Enter number" onChange={handleChange} />
  )
}

export default InputField;