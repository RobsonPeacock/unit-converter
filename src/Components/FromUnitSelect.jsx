import Form from 'react-bootstrap/Form';

const FromUnitSelect = ({ setFromUnitValue }) => {

  const handleChange = (event) => {
    setFromUnitValue(event.target.value)
  }

  return (
    <>
      <Form.Select onChange={handleChange}>
        <option>From Unit</option>
        <option value="1">CM</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </>
  )
}

export default FromUnitSelect;