import React, { useState } from 'react';
import units from '../units.json';
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
    const fromUnit = units.find(unit => unit.name === fromUnitValue);
    const toUnit = units.find(unit => unit.name === toUnitValue);

    if (fromUnitValue === toUnitValue) {
      setOutputValue(fromUnitValue);
      return;
    }

    if (fromUnit && toUnit && fromUnit.conversions[toUnit.name]) {
      setOutputValue(inputValue * fromUnit.conversions[toUnit.name]);
    } else if (fromUnit && toUnit && toUnit.conversions[toUnit.name]) {
      setOutputValue(inputValue / toUnit.conversions[toUnit.name]);
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