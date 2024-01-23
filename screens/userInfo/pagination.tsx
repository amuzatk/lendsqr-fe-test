import React from 'react';
import { Pagination, Select } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import styles from '../../styles/dashboard/Paginate.module.scss';
const { Option } = Select;

interface PaginateProps {
  current: number;
  pageSize: number;
  total: number;
  onChange: (page: number, pageSize?: number) => void;
}

const Paginate: React.FC<PaginateProps> = ({
  current,
  pageSize,
  total,
  onChange,
}) => {
  const pageSizeOptions = [10, 20, 50, 100];

  return (
    <div 
      className={styles.main}
      >
      <div
      className={styles.left}
      >
        <p> Showing </p>
      <Select
  value={pageSize}
  onChange={(value) => onChange(1, Number(value))}
  className={styles.dropdown}
>
  {pageSizeOptions.map(option => (
    <Option key={option} value={option}>
      {option}
    </Option>
  ))}
</Select>
      <p> out of {total} </p>
      </div>
      <div className={styles.right}>
      <Pagination
        current={current}
        total={total}
        pageSize={pageSize}
        onChange={onChange}
        showSizeChanger={false}
        prevIcon={
          <LeftOutlined 
            className={styles.arrow}
          /> 
        }
        nextIcon={
          <RightOutlined 
            className={styles.arrow}
          />
        }
        itemRender={(page, type, originalElement) => (
          type === 'page' ? (
            <span>{page}</span>
          ) : (
            originalElement
          )
        )}
      />
      </div>
    </div>
  );
};

export default Paginate;


// import React from 'react';
// import { Pagination } from 'antd';
// import { LeftOutlined, RightOutlined } from '@ant-design/icons'; // Import Ant Design icons

// interface PaginateProps {
//   current: number;
//   pageSize: number;
//   total: number;
//   onChange: (page: number, pageSize?: number) => void;
// }

// const Paginate: React.FC<PaginateProps> = ({
//   current,
//   pageSize,
//   total,
//   onChange,
// }) => (
//   <Pagination
//     current={current}
//     total={total}
//     pageSize={pageSize}
//     onChange={onChange}
//     showSizeChanger={false}
//     prevIcon={
//       <LeftOutlined 
//         style={{ 
//           // color: '#213F7D',
//           background: '#dcdfe9',
//           padding: '9px',
//           borderRadius: '4px',
//         }} 
//       /> 
//     }
//     nextIcon={
//       <RightOutlined 
//         style={{ 
//           // color: '#213F7D',
//           background: '#dcdfe9',
//           padding: '9px',
//           borderRadius: '4px',
//         }} 
//       />
//     }
//     itemRender={(page, type, originalElement) => (
//       type === 'page' ? (
//         <span 
//           style={{ 
//             borderRadius: '4px', 
//             // color: current === page ? '#fff' : '#545F7D',
//             color: '#545F7D',
//             // background: current === page ? '#213F7D' : '#fff',
//             fontSize: '16px',
//             lineHeight: '18.77px',
//             fontFamily: 'Work Sans',
//             paddingTop:"5px",
//             paddingBottom:"5.5px",
//             paddingLeft:"13px",
//             paddingRight:"13px",
//             border: current !== page ? 'none' : '2px solid white',
//           }}
//         >
//           {page}
//         </span>
//       ) : (
//         originalElement
//       )
//     )}
//   />
// );

// export default Paginate;
