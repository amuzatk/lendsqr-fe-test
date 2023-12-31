// import React from "react";
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


 const tableData = (items: User[]) => {
    return items.map((item) => ({
      key: item?.id,
      orgName: item?.orgName,
      userName: `${item?.profile?.firstName} ${item?.profile?.lastName}`,
      email: item?.email,
      phoneNumber: item?.phoneNumber,
      createdAt2: format(new Date(item?.createdAt), 'MMM dd, yyyy'),
      createdTime: moment(item?.createdTime, 'hh:mm:ss A').format('hh:mm A'),
      dateJoined: `${moment(item?.createdAt).format('MMM DD, YYYY')} ${moment(item?.createdTime, 'hh:mm:ss A').format('hh:mm A')}`,
      status: item.status.array[0],
    }));
  };

const UserInfo3: React.FC = () => {
  const [form] = Form.useForm();
  const [isFilterVisible, setFilterVisible] = useState(false);
  // const [popoverVisibility, setPopoverVisibility] = useState<Array<boolean>>([]);
  const [originalData, setOriginalData] = useState<Array<User>>([]);
  const [filteredData, setFilteredData] = useState<Array<User>>([]);

  const handleFilterVisibility = () => {
    // console.log("Filter icon clicked");
    // setVisible(!visible);
    setFilterVisible(!isFilterVisible);
  }
  


  // const dispatch = useDispatch();
  // const router = useRouter();
  // const { data, isLoading, isError } = useQuery<User[], Error>('users', fetchUsers);
  const { data, isLoading, isError } = useQuery<User[], Error>('users', () => fetchUsers(form.getFieldsValue()));

  console.log(data, 'data3 ==========')

  useEffect(() => {
    if (data) {
      setOriginalData(data);
      setFilteredData(data);
      // initializePopoverVisibility(data);
    }
  }, [data]);

  const realData = filteredData
  // console.log(realData,'realData == Main Dashboard')

  if (isLoading) return <span style={{
    // border:"2px solid green",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"

  }}> <Spin size="large" /></span>;
  if (isError) return <Alert message="Error fetching data" type="error" />;

  
  
  const columns = [
  // const columns: ColumnsType<User> = [
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
              const newFilteredData = originalData.filter((item) =>
                values.orgName.includes(item.orgName)
              );
              setFilteredData(newFilteredData);
              // setVisible(false);
            }}
          >
            <Form.Item label="Organization" name="orgName">
              <Select 
              // mode="multiple" 
              placeholder="Select organizations" 
              showSearch
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
            <Form.Item label="Username" name="username">
              <Input placeholder="Enter username" />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input placeholder="Enter email" />
            </Form.Item>
            <Form.Item label="Date" name="date">
              <Input placeholder="Enter date" />
            </Form.Item>
            <Form.Item label="Phone Number" name="phone">
              <Input placeholder="Enter phone number" />
            </Form.Item>
            <Form.Item label="Status" name="status">
              <Select mode="multiple" placeholder="Select statuses" >
                {data.map((item) => (
                  <Select.Option
                    key={item?.status?.array[0]}
                    value={item?.status?.array[0]}
                  >
                    {item?.status?.array[0]}
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
      )
    },
  ];

  return (
    <div className={styles.container}>
  <Table dataSource={tableData(data)} className={styles.tab} columns={columns} />
    </div>
  );
};

export default UserInfo3;