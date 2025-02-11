import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const FromUnitSelect = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value)
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