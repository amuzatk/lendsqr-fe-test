// SimpleDropdown.js
import React from 'react';

const SelectTemplate = ({ onChange }) => {
  return (
    <div>
      {/* <label htmlFor="simple-dropdown">Select an option:</label> */}
      <select id="simple-dropdown" onChange={onChange}>
      <option >Select Organization</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
    </div>
  );
};

export default SelectTemplate;



// import React, { useState } from 'react';
// import { Select, Space } from 'antd';
// // import { Select, Space } from 'antd/es';
// // import 'antd/dist/antd.css';

// const provinceData = ['Zhejiang', 'Jiangsu'];

// const cityData = {
//   Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
//   Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
// };

// type CityName = keyof typeof cityData;

// const SelectTemplate = () => {
//   const [cities, setCities] = useState(cityData[provinceData[0] as CityName]);

//   const handleProvinceChange = (value: CityName) => {
//     setCities(cityData[value]);
//   };

//   return (
//     <Space wrap>
//       <Select
//        defaultValue="Switch Organization"
//         // defaultValue={provinceData[0]}
//         style={{ width: "180px", fontSize:"80px", border:"none" }}
//         onChange={handleProvinceChange}
//         options={provinceData.map((province) => ({ label: province, value: province }))}
//       />
//     </Space>
//   );
// };

// export default SelectTemplate;

