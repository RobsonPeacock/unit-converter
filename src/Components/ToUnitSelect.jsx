import Form from 'react-bootstrap/Form';

const ToUnitSelect = ({ setToUnitValue }) => {
  const handleChange = (event) => {
    setToUnitValue(event.target.value)
  }

  return (
    <Form.Select onChange={handleChange}>
      <option>To Unit</option>
      <option value="CM">CM</option>
      <option value="MM">MM</option>
      <option value="Metre">Metre</option>
      <option value="Foot">Foot</option>
      <option value="KM">KM</option>
    </Form.Select>
  )
}

export default ToUnitSelect;