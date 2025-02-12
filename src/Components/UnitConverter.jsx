import React, { useState } from 'react';
import FromUnitSelect from './FromUnitSelect';
import ToUnitSelect from './ToUnitSelect';
import InputField from './InputField';
import Button from './Button';

const UnitConverter = () => {
  const [fromUnitValue, setFromUnitValue] = useState('');
  const [toUnitValue, setToUnitValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const convertUnits = () => {
    if (fromUnitValue === toUnitValue) {
      setOutputValue(fromUnitValue);
    } else if (fromUnitValue === "MM" && toUnitValue === "CM") {
      setOutputValue(inputValue / 10)
    } else if (fromUnitValue === "CM" && toUnitValue === "MM") {
      setOutputValue(inputValue * 10)
    } else if (fromUnitValue === "Metre" && toUnitValue === "Foot") {
      setOutputValue(inputValue * 3.281)
    } else if (fromUnitValue === "Foot" && toUnitValue === "Metre") {
      setOutputValue(inputValue / 3.281)
    } else {
      setOutputValue("Error")
    }
  }

  return (
    <>
      <FromUnitSelect setFromUnitValue={setFromUnitValue} />
      <ToUnitSelect setToUnitValue={setToUnitValue} />
      <InputField setInputValue={setInputValue} />
      <output name="output">{outputValue}</output>
      <Button onClick={convertUnits} />
    </>
  )
}

export default UnitConverter;