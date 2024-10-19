import React, { useEffect, useState } from 'react'
import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';
import { EventType } from '../../../lib/types';

const UtmWidgetFilter = ({ types, selectedTypes, setSelectedTypes}: Props) => {


  const handleCheckboxChange = (type: string) => {
    setSelectedTypes((prevSelectedTypes: string[])  => {
      if (prevSelectedTypes.includes(type)) {
        return prevSelectedTypes.filter((t:string) => t !== type);
      } else {
        return [...prevSelectedTypes, type];
      }
    });
  };
  
  return (
    <div style={{display: "flex", gap: "5px"}}>
    {types.map((type, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={`checkbox-${type}`}
              value={type}
              onChange={() => handleCheckboxChange(type)}
              checked={selectedTypes.includes(type)}
            />
            <label htmlFor={`checkbox-${type}`}>{type}</label>
          </div>
        ))}
  </div>
  )
}

interface Props {
  types: string[];
  selectedTypes: string[];
  setSelectedTypes: any;
}

export default UtmWidgetFilter