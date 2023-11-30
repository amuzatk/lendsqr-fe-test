import React, { useState } from "react";
import { Table, Popover, Button } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import Filter from "../../public/assets/icons/Filter.png";
import ViewDetail from "../../public/assets/icons/ViewDetail.png";
import Blacklist from "../../public/assets/icons/Blacklist.png";
import Activate from "../../public/assets/icons/Activate.png";
import ActionButton from "../../public/assets/icons/ActionButton.png";
import Image from "next/image";
interface DataType {
  key: React.Key;
  surname: string;
  email: string;
  phone: string;
  date: string;
  status: string;
  organization: string;
}

const UserInfo: React.FC = () => {

  const [popoverVisibility, setPopoverVisibility] = useState<Array<boolean>>(
    []
  );

  // Initialize the popover visibility state for each item to false
  const initializePopoverVisibility = (data: DataType[]) => {
    const initialState = data.map(() => false);
    setPopoverVisibility(initialState);
  };

  // Call initializePopoverVisibility once when the component mounts
  React.useEffect(() => {
    initializePopoverVisibility(data);
  }, []);

  const handleIconClick = (index: number) => {
    // Toggle the visibility state for the clicked item
    const updatedVisibility = [...popoverVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setPopoverVisibility(updatedVisibility);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "ORGANIZATION",
      dataIndex: "organization",
      filterIcon: (filtered: boolean) => (
        <Image
          src={Filter}
          alt="Custom Filter Icon"
          style={{
            width: 16,
            height: 16,
            filter: filtered ? "invert(20%)" : undefined,
          }}
        />
      ),
      filters: [
        {
          text: "Lenqsqr4",
          value: "Lenqsqr4",
        },
        {
          text: "Lenqsqr",
          value: "Lenqsqr",
        },
        {
          text: "Lenqsqr2",
          value: "Lenqsqr2",
        },
      ],
      filterSearch: true,
      onFilter: (value: string, record) =>
        record.organization.startsWith(value),
      width: "30%",
    },
    {
      title: "SURNAME",
      dataIndex: "surname",
      filterIcon: (filtered: boolean) => (
        <Image
          src={Filter}
          alt="Custom Filter Icon"
          style={{
            width: 16,
            height: 16,
            filter: filtered ? "invert(20%)" : undefined,
          }}
        />
      ),
      filters: [
        {
          text: "Lenqsqr4",
          value: "Lenqsqr4",
        },
        {
          text: "Lenqsqr",
          value: "Lenqsqr",
        },
        {
          text: "Lenqsqr2",
          value: "Lenqsqr2",
        },
      ],
      filterSearch: true,
      onFilter: (value: string, record) => record.surname.startsWith(value),
      width: "30%",
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      filterIcon: (filtered: boolean) => (
        <Image
          src={Filter}
          alt="Custom Filter Icon"
          style={{
            width: 16,
            height: 16,
            filter: filtered ? "invert(20%)" : undefined,
          }}
        />
      ),
      filters: [
        {
          text: "Lenqsqr4",
          value: "Lenqsqr4",
        },
        {
          text: "Lenqsqr",
          value: "Lenqsqr",
        },
        {
          text: "Lenqsqr2",
          value: "Lenqsqr2",
        },
      ],
      filterSearch: true,
      onFilter: (value: string, record) => record.email.startsWith(value),
      width: "30%",
    },
    {
      title: "PHONE NUMBER",
      dataIndex: "phone",
      filterIcon: (filtered: boolean) => (
        <Image
          src={Filter}
          alt="Custom Filter Icon"
          style={{
            width: 16,
            height: 16,
            filter: filtered ? "invert(20%)" : undefined,
          }}
        />
      ),
      filters: [
        {
          text: "Lenqsqr4",
          value: "Lenqsqr4",
        },
        {
          text: "Lenqsqr",
          value: "Lenqsqr",
        },
        {
          text: "Lenqsqr2",
          value: "Lenqsqr2",
        },
      ],
      filterSearch: true,
      onFilter: (value: string, record) => record.phone.startsWith(value),
      width: "30%",
    },
    {
      title: "DATE JOINED",
      dataIndex: "date",
      filterIcon: (filtered: boolean) => (
        <Image
          src={Filter}
          alt="Custom Filter Icon"
          style={{
            width: 16,
            height: 16,
            filter: filtered ? "invert(20%)" : undefined,
          }}
        />
      ),
      filters: [
        {
          text: "Lenqsqr4",
          value: "Lenqsqr4",
        },
        {
          text: "Lenqsqr",
          value: "Lenqsqr",
        },
        {
          text: "Lenqsqr2",
          value: "Lenqsqr2",
        },
      ],
      filterSearch: true,
      onFilter: (value: string, record) => record.date.startsWith(value),
      width: "30%",
    },
    {
      title: "STATUS",
      dataIndex: "status",
      filterIcon: (filtered: boolean) => (
        <Image
          src={Filter}
          alt="Custom Filter Icon"
          style={{
            width: 16,
            height: 16,
            filter: filtered ? "invert(20%)" : undefined,
          }}
        />
      ),
      filters: [
        {
          text: "Lenqsqr4",
          value: "Lenqsqr4",
        },
        {
          text: "Lenqsqr",
          value: "Lenqsqr",
        },
        {
          text: "Lenqsqr2",
          value: "Lenqsqr2",
        },
      ],
      filterSearch: true,
      onFilter: (value: string, record) => record.status.startsWith(value),
      width: "30%",
    },

    {
      dataIndex: "actions",
      render: (text, record, index) => (
        <Popover
          content={
            <div
              style={{
                width: "180px",
                height: "130px",
                borderRadius: "4px",
                display: "flex",
                flexDirection: "column",
              }}
              // className="" for media and positioning min-width 1000px
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "15px",
                  alignItems: "center",
                }}
              >
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
                <p>Blacklist User</p>
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
                <p>Activate User</p>
              </div>
            </div>
          }
          open={popoverVisibility[index]}
          trigger="click"
          onOpenChange={() => handleIconClick(index)}
        >
          <Button type="link">
            <Image
              src={ActionButton}
              alt="Custom Icon"
              style={{ width: 16, height: 16 }}
            />
          </Button>
        </Popover>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      organization: "Lenqsqr",
      surname: "Adedeji",
      email: "kaz@gmail.com",
      phone: "09087899",
      date: "01-02-23",
      status: "Inactive",
    },
    {
      key: "2",
      organization: "Lenqsqr2",
      surname: "Adedeji2",
      email: "kaz2@gmail.com",
      phone: "09087899099",
      date: "02-02-23",
      status: "Pending",
    },
    {
      key: "3",
      organization: "Lenqsqr3",
      surname: "Adedeji3",
      email: "kaz3@gmail.com",
      phone: "0908789933333",
      date: "03-02-23",
      status: "Active",
    },
    {
      key: "4",
      organization: "Lenqsqr4",
      surname: "Adedeji4",
      email: "kaz4@gmail.com",
      phone: "09087899",
      date: "04-02-23",
      status: "Blacklisted",
    },
    {
      key: "5",
      organization: "Lenqsqr5",
      surname: "Adedeji5",
      email: "kaz5@gmail.com",
      phone: "0908789955555",
      date: "05-02-23",
      status: "Inactive",
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return <Table columns={columns} dataSource={data} onChange={onChange} />;
};
export default UserInfo;
