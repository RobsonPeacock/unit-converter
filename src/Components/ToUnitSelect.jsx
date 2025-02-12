import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const ToUnitSelect = ({ setToUnitValue }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setToUnitValue(event.target.value)
  }

  return (
    <Form.Select onChange={handleChange}>
      <option>To Unit</option>
      <option value="1">MM</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
  )
}

export default ToUnitSelect;