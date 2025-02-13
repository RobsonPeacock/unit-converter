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
      <div class="row">
        <div class="col-lg-6 mb-3">
          <FromUnitSelect setFromUnitValue={setFromUnitValue} />
        </div>
        <div class="col-lg-6 mb-3">
          <ToUnitSelect setToUnitValue={setToUnitValue} />
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <InputField setInputValue={setInputValue} />
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12 my-3">
          <output name="output">{outputValue}</output>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <Button onClick={convertUnits} />
        </div>
      </div>
    </>
  )
}

export default UnitConverter;