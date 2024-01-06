// // import React, { useState } from 'react';
// // import { Select, Space } from 'antd/es';

// // const provinceData = ['Zhejiang', 'Jiangsu'];

// // const cityData = {
// //   Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
// //   Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
// // };

// // type CityName = keyof typeof cityData;

// // const SelectTemplate = () => {
// //   const [cities, setCities] = useState(cityData[provinceData[0] as CityName]);

// //   const handleProvinceChange = (value: CityName) => {
// //     setCities(cityData[value]);
// //   };

// //   return (
// //     <Space wrap>
// //       <Select
// //         defaultValue={provinceData[0]}
// //         style={{ width: 120 }}
// //         onChange={handleProvinceChange}
// //         options={provinceData.map((province) => ({ label: province, value: province }))}
// //       />
// //     </Space>
// //   );
// // };

// // export default SelectTemplate;


import React, { useState } from 'react';
import { Select, Space } from 'antd';
// import { Select, Space } from 'antd/es';
// import 'antd/dist/antd.css';

const provinceData = ['Zhejiang', 'Jiangsu'];

const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

type CityName = keyof typeof cityData;

const SelectTemplate = () => {
  const [cities, setCities] = useState(cityData[provinceData[0] as CityName]);

  const handleProvinceChange = (value: CityName) => {
    setCities(cityData[value]);
  };

  return (
    <Space wrap>
      <Select
       defaultValue="Switch Organization"
        // defaultValue={provinceData[0]}
        style={{ width: "180px", fontSize:"80px", border:"none" }}
        onChange={handleProvinceChange}
        options={provinceData.map((province) => ({ label: province, value: province }))}
      />
    </Space>
  );
};

export default SelectTemplate;

