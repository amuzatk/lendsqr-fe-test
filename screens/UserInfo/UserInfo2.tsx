// import React, { useEffect, useMemo, useState } from "react";
// import { useTable, useFilters, useGlobalFilter, useSortBy, usePagination } from 'react-table';
// import { Button, Input, Spin, Alert, Popover, Select } from 'antd';
// import { useRouter } from 'next/router';
// import Image from 'next/image';
// import { useQuery } from 'react-query';
// import { useMediaQuery } from '@react-hook/media-query';
// import { useDispatch } from 'react-redux';
// import { User } from '../../interfaces';
// import { fetchUserData } from "../../features/user/userActions2";
// // import { fetchUsers } from "../../features/user/userActions";
// import styles from '../../styles/dashboard/UserInfo2.module.scss';
// import FilterIcon from "../../public/assets/icons/Filter.png";
// import ActionButton from "../../public/assets/icons/ActionButton.png";
// import ViewDetail from "../../public/assets/icons/ViewDetail.png";
// import Blacklist from "../../public/assets/icons/Blacklist.png";
// import Activate from "../../public/assets/icons/Activate.png";
// import StatusColumnFilter from "./TableColumn/StatusColumnFilter";
// import Link from "next/link";

// const UserInfo: React.FC = () => {
//   const [activeFilterColumn, setActiveFilterColumn] = useState(null);
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const { data, isLoading, isError, refetch } = useQuery<User[], Error>('users', fetchUserData, {
//     enabled: false, // Disable automatic fetching
//   });
//   console.log(data, 'data DUMMY=====')

//   // const { data, isLoading, isError, refetch } = useQuery<User[], Error>('users', fetchUsers);
//   // console.log(data, 'data ACTUAL=====')

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         await refetch(); // Manually trigger the data fetching
//       } catch (error) {
//         // Handle error
//       }
//     };
  
//     fetchData();
//   }, [refetch]);

//   const toggleFilterVisibility = (column: any) => {
//     setActiveFilterColumn(activeFilterColumn === column ? null : column);
//   };

//   const isSmallScreen = useMediaQuery('(max-width: 600px)');
//     const isMediumScreen = useMediaQuery('(min-width: 601px) and (max-width: 1024px)');
//   const isLargeScreen = useMediaQuery('(min-width: 1025px)');
//   // const isLargeScreen = useMediaQuery('(max-width: 1325px)');


//   const renderStatusCell = (status: { array: string[] }) => {
//     // Custom rendering for the status cell
//     const statusValue = status.array[0];
  
//     const getStatusStyle = (status: string) => {
//       switch (status) {
//         case 'Active':
//           return { color: "#39CD62" , borderRadius:"25px", padding:"12px", background:"#f3fcf6"};

//         case 'Inactive':
//           return  { color: "#545F7D", borderRadius:"25px", padding:"12px", background:"#f5f5f7"  };
//         case 'Pending':
//           return { color: "#E9B200" , borderRadius:"25px", padding:"12px", background:"#fdf7e6" };

//         case 'Blacklisted':
//         return  { color: "#E4033B", borderRadius:"25px", padding:"12px", background:"#fce6eb" };

//         default:
//           return { color: 'gray' };
//       }
//     };
  
//     return <span style={getStatusStyle(statusValue)}>{statusValue}</span>;
//     // return <span></span>;
//   };
  

//   const renderActionsCell = (row: any) => {
//     // Custom rendering for the actions cell
//     // Similar to the original component's popover logic
//     // ...

//     return (

//     //   <Popover
//     //   content={() => {
//     //     console.log('Row Data:', row.original); // Log the entire row data
//     //     console.log('Row ID:', row.original.id);
//     //     console.log('orgName:', row.original.orgName);
//     //     console.log('userName:', row.original.userName);
//     //     console.log('phoneNumber:', row.original.phoneNumber);
//     //     console.log('email:', row.original.email);
//     //     console.log('createdAt:', row.original.createdAt);

//     //     return (
//     //       <div>
//     //         <p>This is mini table</p>
//     //       </div>
//     //     );
//     //   }}
//     //   trigger="click"
//     //   // ... Other popover props
//     // >
//     //   <Button type="link">
//     //     <Image
//     //       src={ActionButton}
//     //       alt="ActionButton"
//     //     />
//     //   </Button>
//     // </Popover>

//       <Popover
//       content={
//         <div
//           style={{
//             width: "180px",
//             height: "130px",
//             borderRadius: "4px",
//             display: "flex",
//             flexDirection: "column",
//           }}
//           // className="" for media and positioning min-width 1000px
//         >
//             <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               gap: "15px",
//               alignItems: "center",
//               cursor: "pointer",
//             }}
//           >
//              <Link href={`/users/${row.original.id}`}>
//                 <Image
//                   src={ViewDetail}
//                   alt="Custom Filter Icon"
//                   style={{
//                     width: 16,
//                     height: 16,
//                   }}
//                 />
//                 <p
//                   style={{
//                     fontSize: "14px",
//                     fontWeight: "500",
//                     lineHeight: "16px",
//                     letterSpacing: "0em",
//                     textAlign: "left",
//                   }}
//                 >
//                   View Details
//                 </p>
//             </Link>
//           </div>

//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               gap: "15px",
//               alignItems: "center",
//             }}
//           >
//             <Image
//               src={Blacklist}
//               alt="Custom Filter Icon"
//               style={{
//                 width: 16,
//                 height: 16,
//               }}
//             />
//             <p
//               style={{
//                 fontSize: "14px",
//                 fontWeight: "500",
//                 lineHeight: "16px",
//                 letterSpacing: "0em",
//                 textAlign: "left",
//                 cursor: "pointer",
//               }}
//             >
//               Blacklist User
//             </p>
//           </div>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               gap: "15px",
//               alignItems: "center",
//             }}
//           >
//             <Image
//               src={Activate}
//               alt="Custom Filter Icon"
//               style={{
//                 width: 16,
//                 height: 16,
//               }}
//             />
//             <p
//               style={{
//                 fontSize: "14px",
//                 fontWeight: "500",
//                 lineHeight: "16px",
//                 letterSpacing: "0em",
//                 textAlign: "left",
//                 cursor: "pointer",
//               }}
//             >
//               Activate User
//             </p>
//           </div>
//         </div>
//       }
//       // open={popoverVisibility[index]}
//       trigger="click"
//       // onOpenChange={() => handleIconClick(index)}
//     >
//       <Button type="link">
//         <Image
//           src={ActionButton}
//           alt="Custom Icon"
//           style={{ width: 16, height: 16 }}
//         />
//       </Button>
//     </Popover>
//     );
//   };

//   const columns = useMemo(() => [
//     {
//         Header: 'ORGANIZATION',
//         accessor: 'orgName',
//         Filter: SelectColumnFilter,
  
//     },
//     {
//         Header: 'USERNAME',
//         accessor: 'userName',
//         Filter: TextColumnFilter,
//     },
//         {
//       Header: 'EMAIL',
//       accessor: 'email',
//       Filter: TextColumnFilter, // Custom filter for email
//     },
//     {
//       Header: 'PHONE NUMBER',
//       accessor: 'phoneNumber',
//       Filter: TextColumnFilter, // Custom filter for phone number
//     },
//     {
//       Header: 'DATE JOINED',
//       accessor: 'createdAt',
//       Filter: TextColumnFilter, // Custom filter for date joined
//     },
//     {
//       Header: 'STATUS',
//       accessor: 'status',
//       Filter: StatusColumnFilter, // Use the StatusColumnFilter component
//       Cell: ({ value }) => renderStatusCell(value),
//     },
//     {
//         Header: 'ACTIONS',
//         Cell: ({ row }) => renderActionsCell(row),
//     },
// ], []);

// const columnsToHide = ['USERNAME', 'STATUS','DATE JOINED','PHONE NUMBER','EMAIL'];
//   const columnsToHideMedium = ['USERNAME', 'STATUS', 'PHONE NUMBER'];
//   // const columnsToHideLarge = ['DATE JOINED', 'EMAIL'];
//   const columnsToHideLarge = [ ''];

//   const dynamicColumns = useMemo(() => {
//     if (isSmallScreen) {
//       return columns.filter((column) => !columnsToHide.includes(column.Header));
//     } else if (isMediumScreen) {
//       return columns.filter((column) => !columnsToHideMedium.includes(column.Header));
//     } else if (isLargeScreen) {
//       return columns.filter((column) => !columnsToHideLarge.includes(column.Header));
//     } else {
//       return columns;
//     }
//   }, [isSmallScreen, isMediumScreen, isLargeScreen, columns]);

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//     state: { pageIndex, pageSize },
//   } = useTable(
//     { columns: dynamicColumns, data: data || [] },
//     useFilters,
//     useGlobalFilter,
//     useSortBy,
//     usePagination
//   ) as any;

//   const renderHeaderCell = (column) => {
//     const isActionsColumn = column.Header === 'ACTIONS';
//     return (
//       <th
//         {...column.getHeaderProps(isActionsColumn ? {} : column.getSortByToggleProps())}
//         className={styles.headerCell}
//       >
//         {isActionsColumn ? null : column.render('Header')}
//         {isActionsColumn ? null : (
//           <>
//             <Image
//               src={FilterIcon}
//               alt="FilterIcon"
//               onClick={() => toggleFilterVisibility(column)}
//               style={{
//                 width: 13,
//                 height: 10,
//               }}
//             />
//             <div>
//               {activeFilterColumn === column && column.canFilter ? (
//                 <div className={styles.filterDropdown}>
//                   {column.render('Filter')}
//                 </div>
//               ) : null}
//             </div>
//           </>
//         )}
//       </th>
//     );
//   };

//   return (
//   <div className={styles.tableContainer}>
//             {isLoading && <Spin size="large" />}
//             {isError && <Alert message="Error fetching data" type="error" />}
//             <table {...getTableProps()} className={styles.table}>
//                 <thead>
//                     {headerGroups.map((headerGroup) => (
//           <tr {...headerGroup.getHeaderGroupProps()} className={styles.headerRow}>
//           {headerGroup.headers.map((column) => renderHeaderCell(column))}
//         </tr>
//                     ))}
//                 </thead>
//                 <tbody {...getTableBodyProps()} className={styles.body}>
//                     {rows.map((row) => {
//                         prepareRow(row);
//                         return (
//                             <tr {...row.getRowProps()} className={styles.bodyRow}>
//                                 {row.cells.map((cell) => (
//                                     <td {...cell.getCellProps()} className={styles.bodyCell}>
//                                         {cell.render('Cell')}
//                                     </td>
//                                 ))}
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </table>
//             {/* Pagination controls */}
//             {/* ... */}
//         </div>
//   );
// };

// // Custom filter for text columns
// const TextColumnFilter: React.FC<any> = ({ column }) => {
//   const { filterValue, setFilter } = column;
//   return (
//     <Input
//       value={filterValue || ''}
//       onChange={(e) => setFilter(e.target.value)}
//       placeholder={`Search ${column.Header.toLowerCase()}`}
//     />
//   );
// };

// const { Option } = Select;
// const statusOptions = ['Active', 'Inactive', 'Pending', 'Blacklisted'];


// const SelectColumnFilter: React.FC<any> = ({ column, data }) => {
//   const { filterValue, setFilter } = column;

//   // Extract unique 'orgName' values from the fetched data
//   const orgNames = useMemo(() => {
//     return data ? Array.from(new Set(data.map((user) => user.orgName))) : [];
//   }, [data]);

//   return (
//     <div className="filter-dropdown">
//       <form action="" className="filter-form">
//         <div className="filter-field">
//           <label htmlFor="organization">Organization:</label>
//           <Select
//             showSearch
//             style={{ width: '100%' }}
//             placeholder="Search organization"
//             optionFilterProp="label"
//             value={filterValue || ''}
//             onChange={(value) => setFilter(value || undefined)}
//             filterOption={(input: string, option: { label: string }) =>
//               option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
//             }
//           >
//             <Option key="" value="" label="All">
//               All
//             </Option>
//             {orgNames.map((orgName) => (
//               <Option key={orgName.toString()} value={orgName.toString()} label={orgName}>
//                 {orgName}
//               </Option>
//             ))}
//           </Select>
//         </div>

//         {/* Add input fields for other columns */}
//                 <div className="filter-field">
//           <label htmlFor="username">Username:</label>
//           <Input
//       value={filterValue || ''}
//       onChange={(e) => setFilter(e.target.value)}
//       placeholder="Search username"
//     />
//         </div>

//         <div className="filter-field">
//           <label htmlFor="email">Email:</label>
//           <Input
//       value={filterValue || ''}
//       onChange={(e) => setFilter(e.target.value)}
//       placeholder="Search email"

//     />
//         </div>

//         <div className="filter-field">
//           <label htmlFor="date-joined">Date Joined:</label>
//           <Input
//       value={filterValue || ''}
//       onChange={(e) => setFilter(e.target.value)}
//       placeholder="Search date joined"
//     />
//         </div>

//         <div className="filter-field">
//           <label htmlFor="phone-number">Phone Number:</label>
//           <Input
//       value={filterValue || ''}
//       onChange={(e) => setFilter(e.target.value)}
//       placeholder="Search phone number"
//     />
//         </div>

// <div className="filter-field">
// <label htmlFor="status">Status:</label>
// <select
// value={filterValue || ''}
// onChange={(e) => setFilter(e.target.value || undefined)}
// >
// <option value="">All</option>
// {statusOptions.map((status) => (
// <option key={status} value={status}>
// {status}
// </option>
// ))}
// </select>
// </div>

//         <div>
//           <Button>Reset</Button>
//         </div>
//         <div>
//           <Button>Filter</Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UserInfo;

import React, { useEffect, useMemo, useState } from "react";
import { useTable, useFilters, useGlobalFilter, useSortBy, usePagination } from 'react-table';
import { Button, Input, Spin, Alert, Popover, Select } from 'antd';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useQuery } from 'react-query';
import { useMediaQuery } from '@react-hook/media-query';
import { useDispatch } from 'react-redux';
import { User } from '../../interfaces';
// import { fetchUserData } from "../../features/user/userActions2";
import { fetchUsers } from "../../features/user/userActions";
import styles from '../../styles/dashboard/UserInfo2.module.scss';
import FilterIcon from "../../public/assets/icons/Filter.png";
import ActionButton from "../../public/assets/icons/ActionButton.png";
import ViewDetail from "../../public/assets/icons/ViewDetail.png";
import Blacklist from "../../public/assets/icons/Blacklist.png";
import Activate from "../../public/assets/icons/Activate.png";
import StatusColumnFilter from "./TableColumn/StatusColumnFilter";
import Link from "next/link";

const UserInfo: React.FC = () => {
  const [activeFilterColumn, setActiveFilterColumn] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();
  // const { data, isLoading, isError, refetch } = useQuery<User[], Error>('users', fetchUserData, {
  //   enabled: false, // Disable automatic fetching
  // });
  // console.log(data, 'data DUMMY=====')

  const { data, isLoading, isError, refetch } = useQuery<User[], Error>('users', fetchUsers);
  console.log(data, 'data ACTUAL=====')

  useEffect(() => {
    const fetchData = async () => {
      try {
        await refetch(); // Manually trigger the data fetching
      } catch (error) {
        // Handle error
      }
    };
  
    fetchData();
  }, [refetch]);

  const toggleFilterVisibility = (column: any) => {
    setActiveFilterColumn(activeFilterColumn === column ? null : column);
  };

  const isSmallScreen = useMediaQuery('(max-width: 600px)');
    const isMediumScreen = useMediaQuery('(min-width: 601px) and (max-width: 1024px)');
  const isLargeScreen = useMediaQuery('(min-width: 1025px)');
  // const isLargeScreen = useMediaQuery('(max-width: 1325px)');


  const renderStatusCell = (status: { array: string[] }) => {
    // Custom rendering for the status cell
    // const statusValue = status.array[0];
  
    const getStatusStyle = (status: string) => {
      switch (status) {
        case 'Active':
          return { color: "#39CD62" , borderRadius:"25px", padding:"12px", background:"#f3fcf6"};

        case 'Inactive':
          return  { color: "#545F7D", borderRadius:"25px", padding:"12px", background:"#f5f5f7"  };
        case 'Pending':
          return { color: "#E9B200" , borderRadius:"25px", padding:"12px", background:"#fdf7e6" };

        case 'Blacklisted':
        return  { color: "#E4033B", borderRadius:"25px", padding:"12px", background:"#fce6eb" };

        default:
          return { color: 'gray' };
      }
    };
  
    // return <span style={getStatusStyle(statusValue)}>{statusValue}</span>;
    return <span></span>;
  };
  

  const renderActionsCell = (row: any) => {
    // Custom rendering for the actions cell
    // Similar to the original component's popover logic
    // ...

    return (

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
              cursor: "pointer",
            }}
          >
             <Link href={`/users/${row.original.id}`}>
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
    );
  };

  const columns = useMemo(() => [
    {
        Header: 'ORGANIZATION',
        accessor: 'orgName',
        Filter: SelectColumnFilter,
  
    },
    {
        Header: 'USERNAME',
        accessor: 'userName',
        Filter: TextColumnFilter,
    },
        {
      Header: 'EMAIL',
      accessor: 'email',
      Filter: TextColumnFilter, // Custom filter for email
    },
    {
      Header: 'PHONE NUMBER',
      accessor: 'phoneNumber',
      Filter: TextColumnFilter, // Custom filter for phone number
    },
    {
      Header: 'DATE JOINED',
      accessor: 'createdAt',
      Filter: TextColumnFilter, // Custom filter for date joined
    },
    // {
    //   Header: 'STATUS',
    //   accessor: 'status',
    //   Filter: StatusColumnFilter, // Use the StatusColumnFilter component
    //   Cell: ({ value }) => renderStatusCell(value),
    // },
    {
        Header: 'ACTIONS',
        Cell: ({ row }) => renderActionsCell(row),
    },
], []);

const columnsToHide = ['USERNAME', 'STATUS','DATE JOINED','PHONE NUMBER','EMAIL'];
  const columnsToHideMedium = ['USERNAME', 'STATUS', 'PHONE NUMBER'];
  // const columnsToHideLarge = ['DATE JOINED', 'EMAIL'];
  const columnsToHideLarge = [''];

  const dynamicColumns = useMemo(() => {
    if (isSmallScreen) {
      return columns.filter((column) => !columnsToHide.includes(column.Header));
    } else if (isMediumScreen) {
      return columns.filter((column) => !columnsToHideMedium.includes(column.Header));
    } else if (isLargeScreen) {
      return columns.filter((column) => !columnsToHideLarge.includes(column.Header));
    } else {
      return columns;
    }
  }, [isSmallScreen, isMediumScreen, isLargeScreen, columns]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { pageIndex, pageSize },
  } = useTable(
    { columns: dynamicColumns, data: data || [] },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  ) as any;

  const renderHeaderCell = (column) => {
    const isActionsColumn = column.Header === 'ACTIONS';
    return (
      <th
        {...column.getHeaderProps(isActionsColumn ? {} : column.getSortByToggleProps())}
        className={styles.headerCell}
      >
        {isActionsColumn ? null : column.render('Header')}
        {isActionsColumn ? null : (
          <>
            <Image
              src={FilterIcon}
              alt="FilterIcon"
              onClick={() => toggleFilterVisibility(column)}
              style={{
                width: 13,
                height: 10,
              }}
            />
            <div>
              {activeFilterColumn === column && column.canFilter ? (
                <div className={styles.filterDropdown}>
                  {column.render('Filter')}
                </div>
              ) : null}
            </div>
          </>
        )}
      </th>
    );
  };

  return (
  <div className={styles.tableContainer}>
            {isLoading && <Spin size="large" />}
            {isError && <Alert message="Error fetching data" type="error" />}
            <table {...getTableProps()} className={styles.table}>
                <thead>
                    {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className={styles.headerRow}>
          {headerGroup.headers.map((column) => renderHeaderCell(column))}
        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()} className={styles.body}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} className={styles.bodyRow}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()} className={styles.bodyCell}>
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {/* Pagination controls */}
            {/* ... */}
        </div>
  );
};

// Custom filter for text columns
const TextColumnFilter: React.FC<any> = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <Input
      value={filterValue || ''}
      onChange={(e) => setFilter(e.target.value)}
      placeholder={`Search ${column.Header.toLowerCase()}`}
    />
  );
};

const { Option } = Select;
const statusOptions = ['Active', 'Inactive', 'Pending', 'Blacklisted'];


const SelectColumnFilter: React.FC<any> = ({ column, data }) => {
  const { filterValue, setFilter } = column;

  // Extract unique 'orgName' values from the fetched data
  const orgNames = useMemo(() => {
    return data ? Array.from(new Set(data.map((user) => user.orgName))) : [];
  }, [data]);

  return (
    <div className="filter-dropdown">
      <form action="" className="filter-form">
        <div className="filter-field">
          <label htmlFor="organization">Organization:</label>
          <Select
            showSearch
            style={{ width: '100%' }}
            placeholder="Search organization"
            optionFilterProp="label"
            value={filterValue || ''}
            onChange={(value) => setFilter(value || undefined)}
            filterOption={(input: string, option: { label: string }) =>
              option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option key="" value="" label="All">
              All
            </Option>
            {orgNames.map((orgName) => (
              <Option key={orgName.toString()} value={orgName.toString()} label={orgName}>
                {orgName}
              </Option>
            ))}
          </Select>
        </div>

        {/* Add input fields for other columns */}
                <div className="filter-field">
          <label htmlFor="username">Username:</label>
          <Input
      value={filterValue || ''}
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Search username"
    />
        </div>

        <div className="filter-field">
          <label htmlFor="email">Email:</label>
          <Input
      value={filterValue || ''}
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Search email"

    />
        </div>

        <div className="filter-field">
          <label htmlFor="date-joined">Date Joined:</label>
          <Input
      value={filterValue || ''}
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Search date joined"
    />
        </div>

        <div className="filter-field">
          <label htmlFor="phone-number">Phone Number:</label>
          <Input
      value={filterValue || ''}
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Search phone number"
    />
        </div>

<div className="filter-field">
<label htmlFor="status">Status:</label>
<select
value={filterValue || ''}
onChange={(e) => setFilter(e.target.value || undefined)}
>
<option value="">All</option>
{statusOptions.map((status) => (
<option key={status} value={status}>
{status}
</option>
))}
</select>
</div>

        <div>
          <Button>Reset</Button>
        </div>
        <div>
          <Button>Filter</Button>
        </div>
      </form>
    </div>
  );
};


// const { Option } = Select;
// const statusOptions = ['Active', 'Inactive', 'Pending', 'Blacklisted'];

// const SelectColumnFilter: React.FC<any> = ({ column, data }) => {
//   const { filterValue, setFilter } = column;

//   // Extract unique 'orgName' values from the fetched data
//   const orgNames = useMemo(() => {
//     return data ? Array.from(new Set(data.map((user) => user.orgName))) : [];
//   }, [data]);

//   // State to track the selected organization and corresponding data
//   const [selectedOrg, setSelectedOrg] = useState('');

//   // Effect to update the filter value when the selected organization changes
//   useEffect(() => {
//     setFilter(selectedOrg || undefined);
//   }, [selectedOrg, setFilter]);

//   // Function to retrieve user data based on the selected organization
// const getUserDataByOrg = (orgName: string) => {
//   // Assuming you have the user data stored in a state variable called 'data'
//   return data.filter((user) => user.orgName === orgName);
// };
// const updateOtherFields = (orgData: User[]) => {
//   const usernameFilterValue = orgData.map((user) => user.userName).join(',');
//   const emailFilterValue = orgData.map((user) => user.email).join(',');
//   const dateJoinedFilterValue = orgData.map((user) => user.createdAt).join(',');
//   const phoneNumberFilterValue = orgData.map((user) => user.phoneNumber).join(',');

//   // Use setFilter for each corresponding column
//   column.setFilter('username', usernameFilterValue);
//   column.setFilter('email', emailFilterValue);
//   column.setFilter('date-joined', dateJoinedFilterValue);
//   column.setFilter('phone-number', phoneNumberFilterValue);
// };



//   // Function to handle organization selection
//   const handleOrgSelect = (value: string) => {
//     setSelectedOrg(value);
  
//     // Retrieve user data based on the selected organization
//     const orgData = getUserDataByOrg(value);
  
//     // Update other input fields based on orgData
//     updateOtherFields(orgData);
//   };
  

//   return (
//     <div className="filter-dropdown">
//       <form action="" className="filter-form">
//         {/* Filter dropdown for 'Organization' */}
//         <div className="filter-field">
//           <label htmlFor="organization">Organization:</label>
//           <Select
//             showSearch
//             style={{ width: '100%' }}
//             placeholder="Search organization"
//             optionFilterProp="label"
//             value={selectedOrg}
//             onChange={handleOrgSelect}
//             filterOption={(input: string, option: { label: string }) =>
//               option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
//             }
//           >
//             <Option key="" value="" label="All">
//               All
//             </Option>
//             {orgNames.map((orgName) => (
//               <Option key={orgName.toString()} value={orgName.toString()} label={orgName}>
//                 {orgName}
//               </Option>
//             ))}
//           </Select>
//         </div>

//         {/* Add input fields for other columns */}
//         {/* 'Username' */}
//         <div className="filter-field">
//           <label htmlFor="username">Username:</label>
//           <Input
//             value={filterValue || ''}
//             onChange={(e) => setFilter(e.target.value)}
//             placeholder="Search username"
//           />
//         </div>

//         {/* 'Email' */}
//         <div className="filter-field">
//           <label htmlFor="email">Email:</label>
//           <Input
//             value={filterValue || ''}
//             onChange={(e) => setFilter(e.target.value)}
//             placeholder="Search email"
//           />
//         </div>

//         {/* 'Date Joined' */}
//         <div className="filter-field">
//           <label htmlFor="date-joined">Date Joined:</label>
//           <Input
//             value={filterValue || ''}
//             onChange={(e) => setFilter(e.target.value)}
//             placeholder="Search date joined"
//           />
//         </div>

//         {/* 'Phone Number' */}
//         <div className="filter-field">
//           <label htmlFor="phone-number">Phone Number:</label>
//           <Input
//             value={filterValue || ''}
//             onChange={(e) => setFilter(e.target.value)}
//             placeholder="Search phone number"
//           />
//         </div>

//         {/* 'Status' dropdown */}
//         <div className="filter-field">
//           <label htmlFor="status">Status:</label>
//           <select
//             value={filterValue || ''}
//             onChange={(e) => setFilter(e.target.value || undefined)}
//           >
//             <option value="">All</option>
//             {statusOptions.map((status) => (
//               <option key={status} value={status}>
//                 {status}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Reset and Filter buttons */}
//         <div>
//           <Button>Reset</Button>
//         </div>
//         <div>
//           <Button>Filter</Button>
//         </div>
//       </form>
//     </div>
//   );
// };


export default UserInfo;