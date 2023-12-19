// import React from "react";
import React, { useEffect, useState } from "react";
import { Table, Popover, Button, Form, Input, Select, Spin, Alert } from "antd";
// import type { ColumnsType, TableProps } from "antd/es/table";
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
import { fetchUsers } from '../../features/user/userActions';
// import { fetchUserData } from "../../features/user/userActions2";
import { format } from 'date-fns';
import moment from "moment";


 const tableData = (items: User[]) => {
    return items.map((item) => ({
      key: item?.id,
      orgName: item?.orgName,
      userName: item?.userName,
      email: item?.email,
      phoneNumber: item?.phoneNumber,
      createdAt:  moment(item?.createdAt).format('DD-MM-YY'),
createdAt2: format(new Date(item?.createdAt), 'dd, MMM yy'),
    //   plan: item?.locations?.[0]?.replace('_', ' '),
    //   active: item.status === 'NOT_STARTED' ? false : true,
    }));
  };

const UserInfo3: React.FC = () => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [popoverVisibility, setPopoverVisibility] = useState<Array<boolean>>([]);
  const [originalData, setOriginalData] = useState<Array<User>>([]);
  const [filteredData, setFilteredData] = useState<Array<User>>([]);

  const dispatch = useDispatch();
  const router = useRouter();
  const { data, isLoading, isError } = useQuery<User[], Error>('users', fetchUsers);
  console.log(data, 'data3 ==========')

  // const { data, isLoading, isError, refetch } = useQuery<User[], Error>('users', fetchUserData, {
  //   enabled: false, // Disable automatic fetching
  // });
  // console.log(data, 'data DUMMY=====')

  useEffect(() => {
    if (data) {
      // setOriginalData(data);
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

  // const initializePopoverVisibility = (data: User[]) => {
  //   const initialState = data.map(() => false);
  //   setPopoverVisibility(initialState);
  // };

  // const handleIconClick = (index: number) => {
  //   const updatedVisibility = [...popoverVisibility];
  //   updatedVisibility[index] = !updatedVisibility[index];
  //   setPopoverVisibility(updatedVisibility);
  // };

  // const handleIconNavigate = (index: number) => {
  //   // Assuming you have the userId in your user data
  //   const userId = filteredData[index].id;

  //   // Use the router object to navigate to the user detail page
  //   router.push(`/users/${userId}`);
  // };

  // const rowClassName = (record: User, index: number) => {
  //   return index % 2 === 0 ? styles.evenRow : styles.oddRow;
  // };

  

  // const columns: ColumnsType<User> = [
  //   {
  //     title: <span className={styles.columnTitle}>ORGANIZATION</span>,
  //     dataIndex: "orgName",
  //     filterIcon: (filtered: boolean) => (
  //       <Image
  //         src={Filter}
  //         alt="Custom Filter Icon"
  //         style={{
  //           // width: 16,
  //           // height: 16,
  //           width: 13,
  //           height: 10,
  //           filter: filtered ? "invert(20%)" : undefined,
  //         }}
  //       />
  //     ),
  //     onFilterDropdownOpenChange: (newVisible) => {
  //       if (newVisible) {
  //         form.resetFields();
  //       }
  //       setVisible(newVisible);
  //     },
  //     filterDropdown: (
  //       <div style={{ padding: 8 }}>
  //         <Form
  //           form={form}
  //           layout="vertical"
  //           initialValues={{ orgName: [] }}
  //           onFinish={(values) => {
  //             const newFilteredData = originalData.filter((item) =>
  //               values.orgName.includes(item.orgName)
  //             );
  //             setFilteredData(newFilteredData);
  //             setVisible(false);
  //           }}
  //         >
  //           <Form.Item label="Organization" name="orgName">
  //             <Select mode="multiple" placeholder="Select organizations">
  //               {originalData.map((item) => (
  //                 <Select.Option
  //                   key={item.orgName}
  //                   value={item.orgName}
  //                 >
  //                   {item.orgName}
  //                 </Select.Option>
  //               ))}
  //             </Select>
  //           </Form.Item>
  //           <Form.Item label="Username" name="username">
  //             <Input placeholder="Enter username" />
  //           </Form.Item>
  //           <Form.Item label="Email" name="email">
  //             <Input placeholder="Enter email" />
  //           </Form.Item>
  //           <Form.Item label="Date" name="date">
  //             <Input placeholder="Enter date" />
  //           </Form.Item>
  //           <Form.Item label="Phone Number" name="phone">
  //             <Input placeholder="Enter phone number" />
  //           </Form.Item>
  //           <Form.Item label="Status" name="status">
  //             {/* <Select mode="multiple" placeholder="Select statuses">
  //               {data.map((item) => (
  //                 <Select.Option
  //                   key={item.accountNumber}
  //                   value={item.accountNumber}
  //                 >
  //                   {item.accountNumber}
  //                 </Select.Option>
  //               ))}
  //             </Select> */}
  //           </Form.Item>

  //           <Form.Item>
  //             {/* <Button
  //               htmlType="button"
  //               onClick={() => {
  //                 form.resetFields();
  //                 setFilteredData(originalData);
  //                 setVisible(false);
  //               }}
  //             >
  //               Reset
  //             </Button>
  //             <Button type="primary" htmlType="submit">
  //               Filter
  //             </Button> */}
  //           </Form.Item>
  //         </Form>
  //       </div>
  //     ),
  //     // width: "30%",
  //     width: "116px"
  //   },
  //   {
  //     // title: "USERNAME",
  //     title: <span className={styles.columnTitle}>USERNAME</span>,
  //     dataIndex: "userName",
  //     filterIcon: (filtered: boolean) => (
  //       <Image
  //         src={Filter}
  //         alt="Custom Filter Icon"
  //         style={{
  //           // width: 16,
  //           // height: 16,
  //           width: 13,
  //           height: 10,
  //           position:"absolute",
  //           left:"-40px",
  //           filter: filtered ? "invert(20%)" : undefined,
  //         }}
  //       />
  //     ),
  //     filters: [
  //       {
  //         text: "Lenqsqr4",
  //         value: "Lenqsqr4",
  //       },
  //       {
  //         text: "Lenqsqr",
  //         value: "Lenqsqr",
  //       },
  //       {
  //         text: "Lenqsqr2",
  //         value: "Lenqsqr2",
  //       },
  //     ],
  //     filterSearch: true,
  //     onFilter: (value: string, record) => record.userName.startsWith(value),
  //     // width: "30%",
  //     width:"94px",
  //     // height:"16px",
  //   },
  //   {
  //     // title: "EMAIL",
  //     title: <span className={styles.columnTitle}>EMAIL</span>,
  //     dataIndex: "email",
  //     filterIcon: (filtered: boolean) => (
  //       <Image
  //         src={Filter}
  //         alt="Custom Filter Icon"
  //         style={{
  //           // width: 16,
  //           // height: 16,
  //           width: 13,
  //           height: 10,
  //           position:"absolute",
  //           left:"-170px",
  //           filter: filtered ? "invert(20%)" : undefined,
  //         }}
  //       />
  //     ),
  //     filters: [
  //       {
  //         text: "Lenqsqr4",
  //         value: "Lenqsqr4",
  //       },
  //       {
  //         text: "Lenqsqr",
  //         value: "Lenqsqr",
  //       },
  //       {
  //         text: "Lenqsqr2",
  //         value: "Lenqsqr2",
  //       },
  //     ],
  //     filterSearch: true,
  //     onFilter: (value: string, record) => record.email.startsWith(value),
  //     // width: "30%",
  //     width:"64px"
  //   },
  //   {
  //     // title: "PHONE NUMBER",
  //     title: <span className={styles.email}>PHONE NUMBER</span>,
  //     dataIndex: "phoneNumber",
  //     filterIcon: (filtered: boolean) => (
  //       <Image
  //         src={Filter}
  //         alt="Custom Filter Icon"
  //         style={{
  //           // width: 16,
  //           // height: 16,
  //           width: 13,
  //           height: 10,
  //           filter: filtered ? "invert(20%)" : undefined,
  //         }}
  //       />
  //     ),
  //     filters: [
  //       {
  //         text: "Lenqsqr4",
  //         value: "Lenqsqr4",
  //       },
  //       {
  //         text: "Lenqsqr",
  //         value: "Lenqsqr",
  //       },
  //       {
  //         text: "Lenqsqr2",
  //         value: "Lenqsqr2",
  //       },
  //     ],
  //     filterSearch: true,
  //     onFilter: (value: string, record) => record.phoneNumber.startsWith(value),
  //     width: "124px",
  //   },
  //   {
  //     // title: "DATE JOINED",
  //     title: <span className={styles.columnTitle}>DATE JOINED</span>,
  //     dataIndex: "createdAt",
  //     filterIcon: (filtered: boolean) => (
  //       <Image
  //         src={Filter}
  //         alt="Custom Filter Icon"
  //         style={{
  //           // width: 16,
  //           // height: 16,
  //           width: 13,
  //           height: 10,
  //           filter: filtered ? "invert(20%)" : undefined,
  //         }}
  //       />
  //     ),
  //     filters: [
  //       {
  //         text: "Lenqsqr4",
  //         value: "Lenqsqr4",
  //       },
  //       {
  //         text: "Lenqsqr",
  //         value: "Lenqsqr",
  //       },
  //       {
  //         text: "Lenqsqr2",
  //         value: "Lenqsqr2",
  //       },
  //     ],
  //     filterSearch: true,
  //     onFilter: (value: string, record) => record.createdAt.startsWith(value),
  //     // width: "30%",
  //     width:"105px"
  //   },

  //   // {
  //   //   // title: "STATUS",
  //   //   title: <span className={styles.columnTitle}>STATUS</span>,
  //   //   dataIndex: "status",
  //   //   filterIcon: (filtered: boolean) => (
  //   //     <Image
  //   //       src={Filter}
  //   //       alt="Custom Filter Icon"
  //   //       style={{
  //   //         // width: 16,
  //   //         // height: 16,
  //   //         width: 13,
  //   //         height: 10,
  //   //         filter: filtered ? "invert(20%)" : undefined,
  //   //       }}
  //   //     />
  //   //   ),
  //   //   filters: [
  //   //     {
  //   //       text: "Inactive",
  //   //       value: "Inactive",
  //   //     },
  //   //     {
  //   //       text: "Pending",
  //   //       value: "Pending",
  //   //     },
  //   //     {
  //   //       text: "Active",
  //   //       value: "Active",
  //   //     },
  //   //     {
  //   //       text: "Blacklisted",
  //   //       value: "Blacklisted",
  //   //     },
  //   //   ],
  //   //   filterSearch: true,
  //   //   onFilter: (value: string, record) =>
  //   //     record.status.array.includes(value),
  //   //   // render: (status: { 0: string; array: string[] }) => status.array[0],
  //   //   render: (status: { 0: string; array: string[] }) => {
  //   //     const statusValue = status.array[0];
  
  //   //     // Define styles based on the status value
  //   //     let statusStyle = {};
  //   //     if (statusValue === "Inactive") {
  //   //       statusStyle = { color: "#545F7D", borderRadius:"25px", padding:"12px", background:"#f5f5f7"  }; // Change to your desired style
  //   //     } else if (statusValue === "Blacklisted") {
  //   //       statusStyle = { color: "#E4033B", borderRadius:"25px", padding:"12px", background:"#fce6eb" }; 

  //   //     } else if (statusValue === "Active") {
  //   //       statusStyle = { color: "#39CD62" , borderRadius:"25px", padding:"12px", background:"#f3fcf6"}; // Change to your desired style
  //   //     } else if (statusValue === "Pending") {
  //   //       statusStyle = { color: "#E9B200" , borderRadius:"25px", padding:"12px", background:"#fdf7e6" }; 
  //   //     }
  
  //   //     return <span style={statusStyle}>{statusValue}</span>;
  //   //   },

  //   //   width:"71px"
  //   // },
    

  //   {
  //     dataIndex: "actions",
  //     render: (text, record, index) => (
  //       <div></div>
  //       // <Popover
  //       //   content={
  //       //     <div
  //       //       style={{
  //       //         width: "180px",
  //       //         height: "130px",
  //       //         borderRadius: "4px",
  //       //         display: "flex",
  //       //         flexDirection: "column",
  //       //       }}
  //       //       // className="" for media and positioning min-width 1000px
  //       //     >
  //       //         <div
  //       //         style={{
  //       //           display: "flex",
  //       //           flexDirection: "row",
  //       //           gap: "15px",
  //       //           alignItems: "center",
  //       //           cursor: "pointer",
  //       //         }}
  //       //       >
  //       //          <Link href={`/users/${record.id}`}>
  //       //             <Image
  //       //               src={ViewDetail}
  //       //               alt="Custom Filter Icon"
  //       //               style={{
  //       //                 width: 16,
  //       //                 height: 16,
  //       //               }}
  //       //             />
  //       //             <p
  //       //               style={{
  //       //                 fontSize: "14px",
  //       //                 fontWeight: "500",
  //       //                 lineHeight: "16px",
  //       //                 letterSpacing: "0em",
  //       //                 textAlign: "left",
  //       //               }}
  //       //             >
  //       //               View Details
  //       //             </p>
  //       //         </Link>
  //       //       </div>

  //       //       <div
  //       //         style={{
  //       //           display: "flex",
  //       //           flexDirection: "row",
  //       //           gap: "15px",
  //       //           alignItems: "center",
  //       //         }}
  //       //       >
  //       //         <Image
  //       //           src={Blacklist}
  //       //           alt="Custom Filter Icon"
  //       //           style={{
  //       //             width: 16,
  //       //             height: 16,
  //       //           }}
  //       //         />
  //       //         <p
  //       //           style={{
  //       //             fontSize: "14px",
  //       //             fontWeight: "500",
  //       //             lineHeight: "16px",
  //       //             letterSpacing: "0em",
  //       //             textAlign: "left",
  //       //             cursor: "pointer",
  //       //           }}
  //       //         >
  //       //           Blacklist User
  //       //         </p>
  //       //       </div>
  //       //       <div
  //       //         style={{
  //       //           display: "flex",
  //       //           flexDirection: "row",
  //       //           gap: "15px",
  //       //           alignItems: "center",
  //       //         }}
  //       //       >
  //       //         <Image
  //       //           src={Activate}
  //       //           alt="Custom Filter Icon"
  //       //           style={{
  //       //             width: 16,
  //       //             height: 16,
  //       //           }}
  //       //         />
  //       //         <p
  //       //           style={{
  //       //             fontSize: "14px",
  //       //             fontWeight: "500",
  //       //             lineHeight: "16px",
  //       //             letterSpacing: "0em",
  //       //             textAlign: "left",
  //       //             cursor: "pointer",
  //       //           }}
  //       //         >
  //       //           Activate User
  //       //         </p>
  //       //       </div>
  //       //     </div>
  //       //   }
  //       //   open={popoverVisibility[index]}
  //       //   trigger="click"
  //       //   onOpenChange={() => handleIconClick(index)}
  //       // >
  //       //   <Button type="link">
  //       //     <Image
  //       //       src={ActionButton}
  //       //       alt="Custom Icon"
  //       //       style={{ width: 16, height: 16 }}
  //       //     />
  //       //   </Button>
  //       // </Popover>
  //     ),
  //   },

  // ];

  // const onChange: TableProps<User>["onChange"] = (
  //   pagination,
  //   filters,
  //   sorter,
  //   extra
  // ) => {
  //   console.log("params", pagination, filters, sorter, extra);
  // };


  // const renderActionsCell = (row: any) => {
  //   // Custom rendering for the actions cell
  //   // Similar to the original component's popover logic
  //   // ...

  //   return (

  //     <Popover
  //     content={
  //       <div
  //         style={{
  //           width: "180px",
  //           height: "130px",
  //           borderRadius: "4px",
  //           display: "flex",
  //           flexDirection: "column",
  //         }}
  //         // className="" for media and positioning min-width 1000px
  //       >
  //           <div
  //           style={{
  //             display: "flex",
  //             flexDirection: "row",
  //             gap: "15px",
  //             alignItems: "center",
  //             cursor: "pointer",
  //           }}
  //         >
  //            <Link href={`/users/${row.original.id}`}>
  //               <Image
  //                 src={ViewDetail}
  //                 alt="Custom Filter Icon"
  //                 style={{
  //                   width: 16,
  //                   height: 16,
  //                 }}
  //               />
  //               <p
  //                 style={{
  //                   fontSize: "14px",
  //                   fontWeight: "500",
  //                   lineHeight: "16px",
  //                   letterSpacing: "0em",
  //                   textAlign: "left",
  //                 }}
  //               >
  //                 View Details
  //               </p>
  //           </Link>
  //         </div>

  //         <div
  //           style={{
  //             display: "flex",
  //             flexDirection: "row",
  //             gap: "15px",
  //             alignItems: "center",
  //           }}
  //         >
  //           <Image
  //             src={Blacklist}
  //             alt="Custom Filter Icon"
  //             style={{
  //               width: 16,
  //               height: 16,
  //             }}
  //           />
  //           <p
  //             style={{
  //               fontSize: "14px",
  //               fontWeight: "500",
  //               lineHeight: "16px",
  //               letterSpacing: "0em",
  //               textAlign: "left",
  //               cursor: "pointer",
  //             }}
  //           >
  //             Blacklist User
  //           </p>
  //         </div>
  //         <div
  //           style={{
  //             display: "flex",
  //             flexDirection: "row",
  //             gap: "15px",
  //             alignItems: "center",
  //           }}
  //         >
  //           <Image
  //             src={Activate}
  //             alt="Custom Filter Icon"
  //             style={{
  //               width: 16,
  //               height: 16,
  //             }}
  //           />
  //           <p
  //             style={{
  //               fontSize: "14px",
  //               fontWeight: "500",
  //               lineHeight: "16px",
  //               letterSpacing: "0em",
  //               textAlign: "left",
  //               cursor: "pointer",
  //             }}
  //           >
  //             Activate User
  //           </p>
  //         </div>
  //       </div>
  //     }
  //     // open={popoverVisibility[index]}
  //     trigger="click"
  //     // onOpenChange={() => handleIconClick(index)}
  //   >
  //     <Button type="link">
  //       <Image
  //         src={ActionButton}
  //         alt="Custom Icon"
  //         style={{ width: 16, height: 16 }}
  //       />
  //     </Button>
  //   </Popover>
  //   );
  // };

  return (
    <div className={styles.container}>
      <Table dataSource={tableData(data)} className={styles.tab}>
        <Table.Column 
        title="ORGANIZATION" 
        dataIndex="orgName" 
        key="orgName"
        className={styles.org}
         />
          <Table.Column 
        title="USERNAME" 
        dataIndex="userName" 
        key="userName"
        className={styles.name}
         />
          <Table.Column 
        title="EMAIL" 
        dataIndex="email" 
        key="email"
        className={styles.email2}
         />
          <Table.Column 
        title="PHONE NUMBER" 
        dataIndex="phoneNumber" 
        key="phoneNumber"
        className={styles.phone}
         />
           <Table.Column 
        title="DATE JOINED" 
        dataIndex="createdAt" 
        key="createdAt"
        className={styles.date}

         />
          <Table.Column 
        title="DATE JOINED" 
        dataIndex="createdAt2" 
        key="createdAt"
        className={styles.date}
         />
            {/* <Table.Column 
        title="STATUS" 
        dataIndex="status" 
        key="status"
         /> */}
            <Table.Column
              title="Action"
              dataIndex="action"
              key="action"
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              render={(_: any, record: any) => (
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
             {/* <Link href={`/users/${row.original.id}`}> */}
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
              )}
            />
      </Table>
      I AM GOING TO HIDE 3 COLUMNS max-width: 600px
    </div>
  );
};

export default UserInfo3;