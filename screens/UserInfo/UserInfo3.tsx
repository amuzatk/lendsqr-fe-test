// import React, { useEffect, useState } from "react";
// import { Table, Popover, Button, Form, Input, Select, Spin, Alert } from "antd";
// import type { ColumnsType, TableProps } from "antd/es/table";
// import Filter from "../../public/assets/icons/Filter.png";
// import ViewDetail from "../../public/assets/icons/ViewDetail.png";
// import Blacklist from "../../public/assets/icons/Blacklist.png";
// import Activate from "../../public/assets/icons/Activate.png";
// import ActionButton from "../../public/assets/icons/ActionButton.png";
// import styles from '../../styles/dashboard/UserInfo3.module.scss';
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from 'next/router';
// import { useQuery } from 'react-query';
// import { useDispatch, useSelector } from 'react-redux';
// import { User } from "../../interfaces";
// import { fetchUsers } from '../../features/user/userActions3';
// import { format } from 'date-fns';
// import moment from "moment";
// import { DatePicker } from "antd";
// import CustomIcon from "../../components/svgIcons/CallendarIcon";


//  const tableData = (items: User[]) => {
//     return items.map((item) => ({
//       id: item?.id,
//       orgName: item?.orgName,
//       userName: `${item?.profile?.firstName} ${item?.profile?.lastName}`,
//       email: item?.email,
//       phoneNumber: item?.phoneNumber,
//       dateJoined: `${moment(item?.createdAt).format('MMM DD, YYYY')} ${moment(item?.createdTime, 'hh:mm:ss A').format('hh:mm A')}`,
//       status: item.status.array[0],
//     }));
//   };

//   interface UserInfo3Props {
//     users: User[];
//   }
//   // const UserInfo3: React.FunctionComponent = () => {
//   const UserInfo3: React.FunctionComponent<UserInfo3Props> = ({ users }) => {
//     console.log(users,'userrrrr')
//   const [form] = Form.useForm();
//   const [isFilterVisible, setFilterVisible] = useState(false);
//   // const [originalData, setOriginalData] = useState<Array<User>>([]);
//   // const [filteredData, setFilteredData] = useState<Array<User>>([]);
//   const [originalData, setOriginalData] = useState([]);
// const [filteredData, setFilteredData] = useState([]);


//   const handleFilterVisibility = () => {
//     setFilterVisible(!isFilterVisible);
//   }
  
//   const { data, isLoading, isError } = useQuery<User[], Error>('users', fetchUsers);
//   // const { data, isLoading, isError } = useQuery<User[], Error>('users', () => fetchUsers(form.getFieldsValue()));

//   // console.log(data, 'data3 ==========')

//   useEffect(() => {
//     if (data) {
//       setOriginalData(data);
//       setFilteredData(data);
//       // initializePopoverVisibility(data);
//     }
//   }, [data]);

//   const realData = filteredData
//   console.log(realData,'realData == Main Dashboard')
  
//   if (isLoading) return <span style={{
//     // border:"2px solid green",
//     display:"flex",
//     justifyContent:"center",
//     alignItems:"center"

//   }}> <Spin size="large" /></span>;
//   if (isError) return <Alert message="Error fetching data" type="error" />;

//       const columns: ColumnsType<{ 
//         id: string;       
//         orgName: string; 
//         userName: string; 
//         email: string; 
//         phoneNumber: string; 
//         dateJoined: string; 
//         status: string }> = [      
//     {
//       title: (
//         <div style={{
//           display:"flex",
//           flexDirection:"row",
//           justifyContent:"left",
//           alignItems:"center",
//           gap:"5px",
//           // border:"1px solid red"
//           // position:"relative"
//         }}><span className={`${styles.columnTitle} ${styles.orgTitle}`}>ORGANIZATION</span><Image
//           src={Filter}
//           alt="Custom Filter Icon"
//           onClick={handleFilterVisibility}
//           style={{
//             // width: 16,
//             // height: 16,
//             width: 13,
//             height: 10,
//             cursor:"pointer"
//           }} 
//           />
// { isFilterVisible &&
// <div className={styles.formContainer}>
//           <Form
//             form={form}
//             layout="vertical"
//             initialValues={{ orgName: [] }}

//             onFinish={(values) => {
//               let newFilteredData = originalData;         
//               // Filter by organization name
//               if (values.orgName && values.orgName.length > 0) {
//                 newFilteredData = newFilteredData.filter((item) =>
//                   values.orgName.includes(item.orgName)
//                 );
//               }    
              
//               // Filter by username
//   if (values.userName) {
//     newFilteredData = newFilteredData.filter((item) =>
//       item.userName.toLowerCase().includes(values.userName.toLowerCase())
//     );
//   }

//   // Filter by email
//   if (values.email) {
//     newFilteredData = newFilteredData.filter((item) =>
//       item.email.toLowerCase().includes(values.email.toLowerCase())
//     );
//   }

//     // Filter by Phone number
//     if (values.phoneNumber) {
//       newFilteredData = newFilteredData.filter((item) =>
//         item.phoneNumber.toLowerCase().includes(values.phoneNumber.toLowerCase())
//       );
//     }

//   // Filter by date
// if (values.createdAt) {
//   const selectedDate = moment(values.createdAt).format('MMM DD, YYYY');
//   newFilteredData = newFilteredData.filter((item) =>
//     item.createdAt.toLowerCase().includes(selectedDate.toLowerCase())
//   );
// }

//   // Filter by status
//   if (values.status && values.status.length > 0) {
//     newFilteredData = newFilteredData.filter((item) =>
//       values.status.includes(item.status.array[0])
//     );
//   }

//               setFilteredData(newFilteredData);
//             }}
//           >
//             <Form.Item 
//             label="Organization" 
//             className={styles.label}
//             name="orgName">
//               <Select 
//               mode="multiple" 
//               placeholder="Select" 
//               showSearch
//               className={styles.selet}
//               >
//                 {originalData.map((item) => (
//                   <Select.Option
//                     key={item.orgName}
//                     value={item.orgName}
//                   >
//                     {item.orgName}
//                   </Select.Option>
//                 ))}
//               </Select>

//             </Form.Item>
//             <Form.Item label="Username" name="userName">
//               <Input placeholder="User" />
//             </Form.Item>
//             <Form.Item label="Email" name="email">
//               <Input placeholder="Email" />
//             </Form.Item>
//             <Form.Item label="Date" name="createdAt">

// <DatePicker
//     style={{ width: "100%", height:"40px" }}
//     placeholder="Date"
//     format="MMM DD, YYYY"
//     suffixIcon={<CustomIcon />}
//     onChange={(date, dateString) => {
//       // Handle the date change if needed
//       // console.log(date,'Date selected')
//     }}
//   />
//             </Form.Item>
//             <Form.Item label="Phone Number" name="phoneNumber" className={styles.label}>
//               <Input placeholder="Phone Number" />
//             </Form.Item>
//             <Form.Item  label="Status" name="status">
//                <Select 
//                 // style={{height:"40px" }}
//                 className={styles.selet}
//                 mode="multiple" 
//                 placeholder="Select"
//                 >
//     {/* Extracting unique status values from data */}
//     {Array.from(new Set(data.map(item => item?.status?.array[0]))).map(status => (
//       <Select.Option key={status} value={status}>
//         {status}
//       </Select.Option>
//     ))}
//   </Select>
//             </Form.Item>

//             <Form.Item>
//               <Button
//                 htmlType="button"
//                 onClick={() => {
//                   form.resetFields();
//                   setFilteredData(originalData);
//                   // setVisible(false);
//                 }}
//               >
//                 Reset
//               </Button>
//               <Button type="primary" htmlType="submit">
//                 Filter
//               </Button>
//             </Form.Item>
//           </Form>
//         </div>
//           }
//           </div>
//       ),
//       dataIndex: "orgName",
//       key: "orgName",
//       className: styles.org,
//     },
//     {
//       title: (
//         <div style={{
//           display:"flex",
//           flexDirection:"row",
//           justifyContent:"left",
//           alignItems:"center",
//           gap:"5px"
//         }}><span className={`${styles.columnTitle} ${styles.nameTitle}`}>USERNAME</span><Image
//           src={Filter}
//           alt="Custom Filter Icon"
//           style={{
//             // width: 16,
//             // height: 16,
//             width: 13,
//             height: 10,
//           }} /></div>
//       ),
//       dataIndex: "userName",
//       key: "userName",
//       className: styles.name,
//     },
//     {
//       title: (
//         <div style={{
//           display:"flex",
//           flexDirection:"row",
//           justifyContent:"left",
//           alignItems:"center",
//           gap:"5px"
//         }}><span className={`${styles.columnTitle} ${styles.emailTitle}`}>EMAIL</span><Image
//           src={Filter}
//           alt="Custom Filter Icon"
//           style={{
//             // width: 16,
//             // height: 16,
//             width: 13,
//             height: 10,
//           }} /></div>
//       ),
//       dataIndex: "email",
//       key: "email",
//       className: styles.email2,
//       render: (email: string) => (
//         <span style={{ textTransform:"lowercase" }}>{email}</span>
//       ),
//     },
//     {
//       title: (
//         <div style={{
//           display:"flex",
//           flexDirection:"row",
//           justifyContent:"left",
//           alignItems:"center",
//           gap:"5px",
//           // border:"1px solid red",
//           // width:"150px"
//         }}><span className={`${styles.columnTitle} ${styles.phoneTitle}`}>PHONE NUMBER</span><Image
//           src={Filter}
//           alt="Custom Filter Icon"
//           style={{
//             // width: 16,
//             // height: 16,
//             width: 13,
//             height: 10,
//           }} /></div>
//       ),
//       dataIndex: "phoneNumber",
//       key: "phoneNumber",
//       className: styles.phone,
//     },
//     {
//       title: (
//         <div style={{
//           display:"flex",
//           flexDirection:"row",
//           justifyContent:"left",
//           alignItems:"center",
//           gap:"5px",
//           // width:"100px"
//         }}><span className={`${styles.columnTitle} ${styles.dateTitle}`}>DATE JOINED</span><Image
//           src={Filter}
//           alt="Custom Filter Icon"
//           style={{
//             // width: 16,
//             // height: 16,
//             width: 13,
//             height: 10,
//           }} /></div>
//       ),
//       dataIndex: "dateJoined",
//       key: "dateJoined",
//       className: styles.date,
//     },
//     {
//       title: (
//         <div style={{
//           display:"flex",
//           flexDirection:"row",
//           justifyContent:"left",
//           alignItems:"center",
//           gap:"5px"
//         }}><span className={`${styles.columnTitle} ${styles.statusTitle}`}>STATUS</span><Image
//           src={Filter}
//           alt="Custom Filter Icon"
//           style={{
//             // width: 16,
//             // height: 16,
//             width: 13,
//             height: 10,
//           }} /></div>
//       ),
//       dataIndex: "status",
//       key: "status",
//       className: styles.status,
//       render: (status: {}) => {
//         // Define styles based on the status value
//         let statusStyle = {};
//         if (status === "Inactive") {
//           statusStyle = { color: "#545F7D", borderRadius:"25px", padding:"6px 12px", background:"#f5f5f7"  };
//         } else if (status === "Blacklisted") {
//           statusStyle = { color: "#E4033B", borderRadius:"25px", padding:"6px 12px", background:"#fce6eb" }; 

//         } else if (status === "Active") {
//           statusStyle = { color: "#39CD62" , borderRadius:"25px", padding:"6px 12px", background:"#f3fcf6"};
//         } else if (status === "Pending") {
//           statusStyle = { color: "#E9B200" , borderRadius:"25px", padding:"6px 12px", background:"#fdf7e6" }; 
//         }
  
//         return <span style={statusStyle}>{status}</span>;
//       },
//     },
//     {
//       dataIndex: "action",
//       key: "action",
//       render:(_: any, record: any) => (
//         <Popover
// content={
// <div
//   style={{
//     width: "180px",
//     height: "130px",
//     borderRadius: "4px",
//     display: "flex",
//     flexDirection: "column",
//     border:"1px solid red"
//   }}
//   // className="" for media and positioning min-width 1000px
// >
//     <div
//     style={{
//       display: "flex",
//       flexDirection: "row",
//       gap: "15px",
//       alignItems: "center",
//       cursor: "pointer",
//     border:"1px solid yellow"
//     }}
//   >
//      <Link href={`/users/${record.id}`}>
//      {console.log(record.id)}
//         <Image
//           src={ViewDetail}
//           alt="Custom Filter Icon"
//           style={{
//             width: 16,
//             height: 16,
//           }}
//         />
//         <p
//           style={{
//             fontSize: "14px",
//             fontWeight: "500",
//             lineHeight: "16px",
//             letterSpacing: "0em",
//             textAlign: "left",
//           }}
//         >
//           View Details
//         </p>
//     </Link>
//   </div>

//   <div
//     style={{
//       display: "flex",
//       flexDirection: "row",
//       gap: "15px",
//       alignItems: "center",
//     }}
//   >
//     <Image
//       src={Blacklist}
//       alt="Custom Filter Icon"
//       style={{
//         width: 16,
//         height: 16,
//       }}
//     />
//     <p
//       style={{
//         fontSize: "14px",
//         fontWeight: "500",
//         lineHeight: "16px",
//         letterSpacing: "0em",
//         textAlign: "left",
//         cursor: "pointer",
//       }}
//     >
//       Blacklist User
//     </p>
//   </div>
//   <div
//     style={{
//       display: "flex",
//       flexDirection: "row",
//       gap: "15px",
//       alignItems: "center",
//     }}
//   >
//     <Image
//       src={Activate}
//       alt="Custom Filter Icon"
//       style={{
//         width: 16,
//         height: 16,
//       }}
//     />
//     <p
//       style={{
//         fontSize: "14px",
//         fontWeight: "500",
//         lineHeight: "16px",
//         letterSpacing: "0em",
//         textAlign: "left",
//         cursor: "pointer",
//       }}
//     >
//       Activate User
//     </p>
//   </div>
// </div>
// }
// // open={popoverVisibility[index]}
// trigger="click"
// // onOpenChange={() => handleIconClick(index)}
// >
// <Button type="link">
// <Image
//   src={ActionButton}
//   alt="Custom Icon"
//   style={{ width: 16, height: 16 }}
// />
// </Button>
// </Popover>
//       )
//     },
//     {
//       title: "ID", // You can customize the title as needed
//       dataIndex: "id",
//       key: "id",
//       render: (id: string) => <span>{id}</span>,
//       // Add any additional styling or configurations if needed
//     },  
//   ];

//   return (
//     <div className={styles.container}>
//   <Table dataSource={tableData(realData)} className={styles.tab} columns={columns} />
//     </div>
//   );
// };

// export default UserInfo3;


import React, { useEffect, useState } from "react";
import { Table, Popover, Button, Form, Input, Select, Spin, Alert } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import Filter from "../../public/assets/icons/Filter.png";
import ViewDetail from "../../public/assets/icons/ViewDetail.png";
import Blacklist from "../../public/assets/icons/Blacklist.png";
import Activate from "../../public/assets/icons/Activate.png";
import ActionButton from "../../public/assets/icons/ActionButton.png";
import styles from '../../styles/dashboard/UserInfo3.module.scss';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { User } from "../../interfaces";
import { fetchUsers } from '../../features/user/userActions3';
import { format } from 'date-fns';
import moment from "moment";
import { DatePicker } from "antd";
import CustomIcon from "../../components/svgIcons/CallendarIcon";


 const tableData = (items: User[]) => {
    return items.map((item) => ({
      id: item?.id,
      orgName: item?.orgName,
      userName: `${item?.profile?.firstName} ${item?.profile?.lastName}`,
      email: item?.email,
      phoneNumber: item?.phoneNumber,
      dateJoined: `${moment(item?.createdAt).format('MMM DD, YYYY')} ${moment(item?.createdTime, 'hh:mm:ss A').format('hh:mm A')}`,
      status: item.status.array[0],
    }));
  };

  const UserInfo3: React.FunctionComponent = () => {
  const [form] = Form.useForm();
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [originalData, setOriginalData] = useState<Array<User>>([]);
  const [filteredData, setFilteredData] = useState<Array<User>>([]);

  const handleFilterVisibility = () => {
    setFilterVisible(!isFilterVisible);
  }
  
  const { data, isLoading, isError } = useQuery<User[], Error>('users', fetchUsers);
  // const { data, isLoading, isError } = useQuery<User[], Error>('users', () => fetchUsers(form.getFieldsValue()));

  // console.log(data, 'data3 ==========')

  useEffect(() => {
    if (data) {
      setOriginalData(data);
      setFilteredData(data);
      // initializePopoverVisibility(data);
    }
  }, [data]);

  const realData = filteredData
  console.log(realData,'realData == Main Dashboard')
  
  if (isLoading) return <span style={{
    // border:"2px solid green",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"

  }}> <Spin size="large" /></span>;
  if (isError) return <Alert message="Error fetching data" type="error" />;

      const columns: ColumnsType<{ 
        id: string;       
        orgName: string; 
        userName: string; 
        email: string; 
        phoneNumber: string; 
        dateJoined: string; 
        status: string }> = [      
    {
      title: (
        <div style={{
          display:"flex",
          flexDirection:"row",
          justifyContent:"left",
          alignItems:"center",
          gap:"5px",
          // border:"1px solid red"
          // position:"relative"
        }}><span className={`${styles.columnTitle} ${styles.orgTitle}`}>ORGANIZATION</span><Image
          src={Filter}
          alt="Custom Filter Icon"
          onClick={handleFilterVisibility}
          style={{
            // width: 16,
            // height: 16,
            width: 13,
            height: 10,
            cursor:"pointer"
          }} 
          />
{ isFilterVisible &&
<div className={styles.formContainer}>
          <Form
            form={form}
            layout="vertical"
            initialValues={{ orgName: [] }}

            onFinish={(values) => {
              let newFilteredData = originalData;         
              // Filter by organization name
              if (values.orgName && values.orgName.length > 0) {
                newFilteredData = newFilteredData.filter((item) =>
                  values.orgName.includes(item.orgName)
                );
              }    
              
              // Filter by username
  if (values.userName) {
    newFilteredData = newFilteredData.filter((item) =>
      item.userName.toLowerCase().includes(values.userName.toLowerCase())
    );
  }

  // Filter by email
  if (values.email) {
    newFilteredData = newFilteredData.filter((item) =>
      item.email.toLowerCase().includes(values.email.toLowerCase())
    );
  }

    // Filter by Phone number
    if (values.phoneNumber) {
      newFilteredData = newFilteredData.filter((item) =>
        item.phoneNumber.toLowerCase().includes(values.phoneNumber.toLowerCase())
      );
    }

  // Filter by date
if (values.createdAt) {
  const selectedDate = moment(values.createdAt).format('MMM DD, YYYY');
  newFilteredData = newFilteredData.filter((item) =>
    item.createdAt.toLowerCase().includes(selectedDate.toLowerCase())
  );
}

  // Filter by status
  if (values.status && values.status.length > 0) {
    newFilteredData = newFilteredData.filter((item) =>
      values.status.includes(item.status.array[0])
    );
  }

              setFilteredData(newFilteredData);
            }}
          >
            <Form.Item 
            label="Organization" 
            className={styles.label}
            name="orgName">
              <Select 
              mode="multiple" 
              placeholder="Select" 
              showSearch
              className={styles.selet}
              >
                {originalData.map((item) => (
                  <Select.Option
                    key={item.orgName}
                    value={item.orgName}
                  >
                    {item.orgName}
                  </Select.Option>
                ))}
              </Select>

            </Form.Item>
            <Form.Item label="Username" name="userName">
              <Input placeholder="User" />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item label="Date" name="createdAt">

<DatePicker
    style={{ width: "100%", height:"40px" }}
    placeholder="Date"
    format="MMM DD, YYYY"
    suffixIcon={<CustomIcon />}
    onChange={(date, dateString) => {
      // Handle the date change if needed
      // console.log(date,'Date selected')
    }}
  />
            </Form.Item>
            <Form.Item label="Phone Number" name="phoneNumber" className={styles.label}>
              <Input placeholder="Phone Number" />
            </Form.Item>
            <Form.Item  label="Status" name="status">
               <Select 
                // style={{height:"40px" }}
                className={styles.selet}
                mode="multiple" 
                placeholder="Select"
                >
    {/* Extracting unique status values from data */}
    {Array.from(new Set(data.map(item => item?.status?.array[0]))).map(status => (
      <Select.Option key={status} value={status}>
        {status}
      </Select.Option>
    ))}
  </Select>
            </Form.Item>

            <Form.Item>
              <Button
                htmlType="button"
                onClick={() => {
                  form.resetFields();
                  setFilteredData(originalData);
                  // setVisible(false);
                }}
              >
                Reset
              </Button>
              <Button type="primary" htmlType="submit">
                Filter
              </Button>
            </Form.Item>
          </Form>
        </div>
          }
          </div>
      ),
      dataIndex: "orgName",
      key: "orgName",
      className: styles.org,
    },
    {
      title: (
        <div style={{
          display:"flex",
          flexDirection:"row",
          justifyContent:"left",
          alignItems:"center",
          gap:"5px"
        }}><span className={`${styles.columnTitle} ${styles.nameTitle}`}>USERNAME</span><Image
          src={Filter}
          alt="Custom Filter Icon"
          style={{
            // width: 16,
            // height: 16,
            width: 13,
            height: 10,
          }} /></div>
      ),
      dataIndex: "userName",
      key: "userName",
      className: styles.name,
    },
    {
      title: (
        <div style={{
          display:"flex",
          flexDirection:"row",
          justifyContent:"left",
          alignItems:"center",
          gap:"5px"
        }}><span className={`${styles.columnTitle} ${styles.emailTitle}`}>EMAIL</span><Image
          src={Filter}
          alt="Custom Filter Icon"
          style={{
            // width: 16,
            // height: 16,
            width: 13,
            height: 10,
          }} /></div>
      ),
      dataIndex: "email",
      key: "email",
      className: styles.email2,
      render: (email: string) => (
        <span style={{ textTransform:"lowercase" }}>{email}</span>
      ),
    },
    {
      title: (
        <div style={{
          display:"flex",
          flexDirection:"row",
          justifyContent:"left",
          alignItems:"center",
          gap:"5px",
          // border:"1px solid red",
          // width:"150px"
        }}><span className={`${styles.columnTitle} ${styles.phoneTitle}`}>PHONE NUMBER</span><Image
          src={Filter}
          alt="Custom Filter Icon"
          style={{
            // width: 16,
            // height: 16,
            width: 13,
            height: 10,
          }} /></div>
      ),
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      className: styles.phone,
    },
    {
      title: (
        <div style={{
          display:"flex",
          flexDirection:"row",
          justifyContent:"left",
          alignItems:"center",
          gap:"5px",
          // width:"100px"
        }}><span className={`${styles.columnTitle} ${styles.dateTitle}`}>DATE JOINED</span><Image
          src={Filter}
          alt="Custom Filter Icon"
          style={{
            // width: 16,
            // height: 16,
            width: 13,
            height: 10,
          }} /></div>
      ),
      dataIndex: "dateJoined",
      key: "dateJoined",
      className: styles.date,
    },
    {
      title: (
        <div style={{
          display:"flex",
          flexDirection:"row",
          justifyContent:"left",
          alignItems:"center",
          gap:"5px"
        }}><span className={`${styles.columnTitle} ${styles.statusTitle}`}>STATUS</span><Image
          src={Filter}
          alt="Custom Filter Icon"
          style={{
            // width: 16,
            // height: 16,
            width: 13,
            height: 10,
          }} /></div>
      ),
      dataIndex: "status",
      key: "status",
      className: styles.status,
      render: (status: {}) => {
        // Define styles based on the status value
        let statusStyle = {};
        if (status === "Inactive") {
          statusStyle = { color: "#545F7D", borderRadius:"25px", padding:"6px 12px", background:"#f5f5f7"  };
        } else if (status === "Blacklisted") {
          statusStyle = { color: "#E4033B", borderRadius:"25px", padding:"6px 12px", background:"#fce6eb" }; 

        } else if (status === "Active") {
          statusStyle = { color: "#39CD62" , borderRadius:"25px", padding:"6px 12px", background:"#f3fcf6"};
        } else if (status === "Pending") {
          statusStyle = { color: "#E9B200" , borderRadius:"25px", padding:"6px 12px", background:"#fdf7e6" }; 
        }
  
        return <span style={statusStyle}>{status}</span>;
      },
    },
    {
      dataIndex: "action",
      key: "action",
      render:(_: any, record: any) => (
        <Popover
content={
<div
  style={{
    width: "180px",
    height: "130px",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "column",
    border:"1px solid red"
  }}
  // className="" for media and positioning min-width 1000px
>
    <div
    style={{
      display: "flex",
      flexDirection: "row",
      gap: "15px",
      alignItems: "center",
      cursor: "pointer",
    border:"1px solid yellow"
    }}
  >
     <Link href={`/users/${record.id}`}>
     {console.log(record.id)}
        <Image
          src={ViewDetail}
          alt="Custom Filter Icon"
          style={{
            width: 16,
            height: 16,
          }}
        />
        <p
          style={{
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "16px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          View Details
        </p>
    </Link>
{/* {record.id && (
  <div>
    <p>record.id: {record.id}</p>
    {console.log(record.id) }
    <Link href={`/users/${record.id}`}>
      <Image
        src={ViewDetail}
        alt="Custom Filter Icon"
        style={{
          width: 16,
          height: 16,
        }}
      />
      <p
        style={{
          fontSize: "14px",
          fontWeight: "500",
          lineHeight: "16px",
          letterSpacing: "0em",
          textAlign: "left",
        }}
      >
        View Details
      </p>
    </Link>
  </div>
)} */}


  </div>

  <div
    style={{
      display: "flex",
      flexDirection: "row",
      gap: "15px",
      alignItems: "center",
    }}
  >
    <Image
      src={Blacklist}
      alt="Custom Filter Icon"
      style={{
        width: 16,
        height: 16,
      }}
    />
    <p
      style={{
        fontSize: "14px",
        fontWeight: "500",
        lineHeight: "16px",
        letterSpacing: "0em",
        textAlign: "left",
        cursor: "pointer",
      }}
    >
      Blacklist User
    </p>
  </div>
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      gap: "15px",
      alignItems: "center",
    }}
  >
    <Image
      src={Activate}
      alt="Custom Filter Icon"
      style={{
        width: 16,
        height: 16,
      }}
    />
    <p
      style={{
        fontSize: "14px",
        fontWeight: "500",
        lineHeight: "16px",
        letterSpacing: "0em",
        textAlign: "left",
        cursor: "pointer",
      }}
    >
      Activate User
    </p>
  </div>
</div>
}
// open={popoverVisibility[index]}
trigger="click"
// onOpenChange={() => handleIconClick(index)}
>
<Button type="link">
<Image
  src={ActionButton}
  alt="Custom Icon"
  style={{ width: 16, height: 16 }}
/>
</Button>
</Popover>
      )
    },
    // {
    //   title: "ID", // You can customize the title as needed
    //   dataIndex: "id",
    //   key: "id",
    //   render: (id: string) => <span>{id}</span>,
    //   // Add any additional styling or configurations if needed
    // },
    
  ];

  return (
    <div className={styles.container}>
  <Table dataSource={tableData(realData)} className={styles.tab} columns={columns} />
    </div>
  );
};

export default UserInfo3;