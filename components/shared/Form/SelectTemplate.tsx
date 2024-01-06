import React from 'react';

const SelectTemplate = ({ onChange }) => {
  return (
    <div style={{
      // border:"1px solid red",
      
    }}>
      {/* <label htmlFor="simple-dropdown">Select an option:</label> */}
      <select 
      style={{
        border:"none",
        height:"35px",
        // width:"160px",
        color:"#213F7D",
        fontWeight:"400",
        lineHeight:"18.77px",
        fontSize:"16px"
        }} id="simple-dropdown" onChange={onChange}>
      <option >Switch Organization</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
    </div>
  );
};

export default SelectTemplate;