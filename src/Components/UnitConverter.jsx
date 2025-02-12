import React, { useState } from 'react';
import FromUnitSelect from './FromUnitSelect';
import ToUnitSelect from './ToUnitSelect';
import InputField from './InputField';
import Button from './Button';

const UnitConverter = () => {
  const [fromUnitValue, setFromUnitValue] = useState('');
  const [toUnitValue, setToUnitValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <FromUnitSelect setFromUnitValue={setFromUnitValue} />
      <ToUnitSelect setToUnitValue={setToUnitValue} />
      <InputField setInputValue={setInputValue} />
      <Button />
    </>
  )
}

export default UnitConverter;