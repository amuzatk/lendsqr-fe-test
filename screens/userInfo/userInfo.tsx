import React, { useEffect, useState } from "react";
import { Table, Popover, Button, Form, Input, Select, Spin, Alert, Popconfirm,message } from "antd";
import type { ColumnsType } from "antd/es/table";
import Filter from "../../public/assets/icons/Filter.png";
import ViewDetail from "../../public/assets/icons/ViewDetail.png";
import Blacklist from "../../public/assets/icons/Blacklist.png";
import Activate from "../../public/assets/icons/Activate.png";
import ActionButton from "../../public/assets/icons/ActionButton.png";
import styles from '../../styles/dashboard/UserInfo3.module.scss';
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { DatePicker } from "antd";
import { toastHandler } from "../../helpers/toastHandler";
import Paginate from "./pagination";
import { User } from "../../interfaces";
import CustomIcon from "../../constants/svgIcons/CallendarIcon";

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

interface UserInfo3Props {
  selectedOrganization: string;
  searchResults: User[];
  onSearchResultsChange: (results: User[]) => void;
  onForceRerender: (newDummyVariable: any) => void; // Define the callback function prop
}

const UserInfo: React.FC<UserInfo3Props> = ({ 
  selectedOrganization, 
  searchResults, 
  onSearchResultsChange,
  onForceRerender, // Receive the callback function prop
 }) => {
  const [form] = Form.useForm();
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [originalData, setOriginalData] = useState<Array<User>>([]);
  const [filteredData, setFilteredData] = useState<Array<User>>([]);
  const [popoverVisible, setPopoverVisible] = useState<string | null>(null);
  const [dummyVariable, setDummyVariable] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleFilterVisibility = () => {
    setFilterVisible(!isFilterVisible);
  }

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
  
    if (storedUsers && storedUsers.length > 0) {
      setOriginalData(storedUsers);
      setFilteredData(storedUsers);
      setIsLoading(false);
      onSearchResultsChange(storedUsers);
    } else {
      setIsError(true);
    }
  }, [dummyVariable, onSearchResultsChange]);
  

  useEffect(() => {
    if (originalData && originalData.length > 0) {
      const filteredUsers = selectedOrganization
        ? searchResults.filter((user) => user.orgName === selectedOrganization)
        : searchResults;

      setFilteredData(filteredUsers);
    }
  }, [selectedOrganization, searchResults, originalData]);

  const handlePageChange = (page: number, pageSize?: number) => {
    setCurrentPage(page);
    setPageSize(pageSize || 10);
  }

  const realData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  if (isLoading) return <span style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className={styles.loading}><Spin size="large" /></span>;
  if (isError) return <span style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className={styles.loading}><Alert message="Error fetching data" type="error" /></span>;
 
  // if (isError) return <Alert message="Error fetching data" type="error" />;

  const updateTableData = () => {
    setDummyState(Math.random());
  };

  const setDummyState = (value: number | React.SetStateAction<null>) => {
    // Update a state variable to trigger a re-render
    setDummyVariable(value);
    onForceRerender(value); // Call the callback function to send data to UsersDashboard
  };

  const handleBlacklist = (userId: string) => {
    const userToBlacklist = originalData.find((user) => user.id === userId);
  
    if (userToBlacklist && userToBlacklist.status.array[0] === 'Blacklisted') {
      toastHandler.error('This user is already blacklisted.');
      setTimeout(() => {
        setPopoverVisible(null); // Close the Popover after message
      }, 3000); // Delay of 3000 milliseconds (3 seconds)
      return;
    }
  
    const updatedUsers = originalData.map((user) =>
      user.id === userId ? { ...user, status: { array: ['Blacklisted'] } } : user
    );
  
    setOriginalData(updatedUsers);
    setFilteredData(updatedUsers);
  
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  
    updateTableData();
  
    toastHandler.success('User blacklisted successfully');
    setTimeout(() => {
      setPopoverVisible(null); // Close the Popover after success
    }, 3000); // Delay of 3000 milliseconds (3 seconds)
  };
  
  const handleActivate = (userId: string) => {
    const userToActivate = originalData.find((user) => user.id === userId);
  
    if (userToActivate && userToActivate.status.array[0] === 'Active') {
      toastHandler.error('This user is already active.');
      setTimeout(() => {
        setPopoverVisible(null); // Close the Popover after message
      }, 3000); // Delay of 3000 milliseconds (3 seconds)
      return;
    }
  
    const updatedUsers = originalData.map((user) => {
      const updatedStatus = user.status?.array ? { array: ['Active'] } : { array: ['Inactive'] };
      return user.id === userId ? { ...user, status: updatedStatus } : user;
    });
  
    setOriginalData(updatedUsers);
    setFilteredData(updatedUsers);
  
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  
    updateTableData();
  
    toastHandler.success('User activated successfully');
    setTimeout(() => {
      setPopoverVisible(null); // Close the Popover after success
    }, 3000); // Delay of 3000 milliseconds (3 seconds)
    setDummyState(Math.random()); // Force a re-render
  };
  



  const columns: ColumnsType<{
    id: string;
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    dateJoined: string;
    status: string;
  }> = [    
      {
        title: (
          <div 
          className={styles.titleContainer}
          ><span className={`${styles.columnTitle} ${styles.orgTitle}`}>ORGANIZATION</span><Image
            src={Filter}
            alt="Custom Filter Icon"
            onClick={handleFilterVisibility}
            width={13}
            height={10}
            className={styles.filterIcon}
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
  
              className={styles.forWrapper}
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
      {Array.from(new Set(originalData.map(item => item?.status?.array[0]))).map(status => (
        <Select.Option key={status} value={status}>
          {status}
        </Select.Option>
      ))}
    </Select>
              </Form.Item>
              <div className={styles.buttons}>
              <Form.Item 
              >
                <Button
                
                  onClick={() => {
                    form.resetFields();
                    setFilteredData(originalData);
                  }}
                  className={styles.reset}
                >
                  Reset
                </Button>
  
              </Form.Item>
              <Form.Item 
              >
                 <Button type="primary" htmlType="submit"
                 className={styles.filter}
                 >
                  Filter
                </Button>
              </Form.Item>
              </div>
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
          <div 
          className={styles.titleContainer}
          ><span className={`${styles.columnTitle} ${styles.nameTitle}`}>USERNAME</span><Image
            src={Filter}
            alt="Custom Filter Icon"
            width={13}
            height={10}
            className={styles.filterIcon}
            /></div>
        ),
        dataIndex: "userName",
        key: "userName",
        className: styles.name,
      },
      {
        title: (
          <div 
          className={styles.titleContainer}
          ><span className={`${styles.columnTitle} ${styles.emailTitle}`}>EMAIL</span><Image
            src={Filter}
            alt="Custom Filter Icon"
            width={13}
            height={10}
            className={styles.filterIcon}
             /></div>
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
          <div 
          className={styles.titleContainer}
          ><span className={`${styles.columnTitle} ${styles.phoneTitle}`}>PHONE NUMBER</span><Image
            src={Filter}
            alt="Custom Filter Icon"
            width={13}
            height={10}
            className={styles.filterIcon}
             /></div>
        ),
        dataIndex: "phoneNumber",
        key: "phoneNumber",
        className: styles.phone,
      },
      {
        title: (
          <div 
          className={styles.titleContainer}
  
          ><span className={`${styles.columnTitle} ${styles.dateTitle}`}>DATE JOINED</span><Image
            src={Filter}
            alt="Custom Filter Icon"
            width={13}
            height={10}
            className={styles.filterIcon}
             /></div>
        ),
        dataIndex: "dateJoined",
        key: "dateJoined",
        className: styles.date,
      },
      // {
      //   title: (
      //     <div 
      //     className={styles.titleContainer}
  
      //     ><span className={`${styles.columnTitle} ${styles.statusTitle}`}>STATUS</span><Image
      //       src={Filter}
      //       alt="Custom Filter Icon"
      //       width={13}
      //       height={10}
      //       className={styles.filterIcon}
      //        /></div>
      //   ),
      //   dataIndex: "status",
      //   key: "status",
      //   className: styles.status,
      //   render: (status: {}) => {
      //     // Define styles based on the status value
      //     let statusStyle = {};
      //     if (status === "Inactive") {
      //       statusStyle = { color: "#545F7D", borderRadius:"25px", padding:"6px 12px", background:"#f5f5f7"  };
      //     } else if (status === "Blacklisted") {
      //       statusStyle = { color: "#E4033B", borderRadius:"25px", padding:"6px 12px", background:"#fce6eb" }; 
  
      //     } else if (status === "Active") {
      //       statusStyle = { color: "#39CD62" , borderRadius:"25px", padding:"6px 12px", background:"#f3fcf6"};
      //     } else if (status === "Pending") {
      //       statusStyle = { color: "#E9B200" , borderRadius:"25px", padding:"6px 12px", background:"#fdf7e6" }; 
      //     }
    
      //     return <span style={statusStyle}>{status}</span>;
      //   },
      // },


      {
        title: (
          <div className={styles.titleContainer}>
            <span className={`${styles.columnTitle} ${styles.statusTitle}`}>STATUS</span>
            <Image
              src={Filter}
              alt="Custom Filter Icon"
              width={13}
              height={10}
              className={styles.filterIcon}
            />
          </div>
        ),
        dataIndex: "status",
        key: "status",
        className: styles.status,
        render: (status: string) => { // Specify the type of status as string
          // Define styles based on the status value
          let statusStyle = {};
          if (status === "Inactive") {
            statusStyle = { color: "#545F7D", borderRadius: "25px", padding: "6px 12px", background: "#f5f5f7" };
          } else if (status === "Blacklisted") {
            statusStyle = { color: "#E4033B", borderRadius: "25px", padding: "6px 12px", background: "#fce6eb" };
          } else if (status === "Active") {
            statusStyle = { color: "#39CD62", borderRadius: "25px", padding: "6px 12px", background: "#f3fcf6" };
          } else if (status === "Pending") {
            statusStyle = { color: "#E9B200", borderRadius: "25px", padding: "6px 12px", background: "#fdf7e6" };
          }
      
          return <span style={statusStyle}>{status}</span>;
        },
      },
      
    {
      dataIndex: "action",
      key: "action",
      render: (_: any, record: any) => (
        <Popover
  content={      
            
            <div className={styles.popOver}>
                <div>
                  <Link href={`/dashboard/users/${record.id}`} className={styles.actions}>
                    <Image src={ViewDetail} alt="Custom Filter Icon" width={16} height={16} />
                    <p>View Details</p>
                  </Link>
                </div>

                <div >
                  <Popconfirm
                    title={`Are you sure you want to blacklist ${record.userName}?`}
                    onConfirm={() => handleBlacklist(record.id)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <a
                    className={styles.actions}
                    >
                      <Image src={Blacklist} alt="Custom Filter Icon" width={16} height={16} />
                      <p>Blacklist User</p>
                    </a>
                  </Popconfirm>
                </div>
                <div 
                >
                  <Popconfirm
                    title={`Are you sure you want to activate ${record.userName}?`}
                    onConfirm={() => handleActivate(record.id)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <a
                    className={styles.actions}
                    >
                      <Image src={Activate} alt="Custom Filter Icon" width={16} height={16} />
                      <p>Activate User</p>
                    </a>
                  </Popconfirm>
                </div>
              </div>
  }
  trigger="click"
  open={popoverVisible === record.id}
  onOpenChange={(visible) => setPopoverVisible(visible ? record.id : null)}
>
  <Button type="link">
    <Image src={ActionButton} alt="Custom Icon" style={{ width: 16, height: 16 }} />
  </Button>
</Popover>

      
      
        )
    }, 
  ];

  return (
    <>
      <div className={styles.container}>
        <Table dataSource={tableData(realData)} className={styles.tab} columns={columns} pagination={false} />
      </div>
      <div>
        <Paginate current={currentPage} pageSize={pageSize} total={filteredData.length} onChange={handlePageChange} />
      </div>
    </>
  );
};

export default UserInfo;