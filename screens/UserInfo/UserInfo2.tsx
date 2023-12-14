import React, { useEffect, useMemo } from "react";
import { useTable, useFilters, useGlobalFilter, useSortBy, usePagination } from 'react-table';
import { Button, Input, Spin, Alert, Popover } from 'antd';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useQuery } from 'react-query';
import { useMediaQuery } from '@react-hook/media-query';
import { useDispatch } from 'react-redux';
import { User } from '../../interfaces';
import { fetchUserData } from "../../features/user/userActions2";
import styles from '../../styles/dashboard/UserInfo2.module.scss';

const UserInfo: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data, isLoading, isError, refetch } = useQuery<User[], Error>('users', fetchUserData, {
    enabled: false, // Disable automatic fetching
  });
  console.log(data,'dddd')


  const isSmallScreen = useMediaQuery('(max-width: 600px)');

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
    {
        Header: 'STATUS',
        accessor: 'status',
        Filter: SelectColumnFilter,
        Cell: ({ value }) => renderStatusCell(value),
    },
    {
        Header: 'ACTIONS',
        Cell: ({ row }) => renderActionsCell(row),
    },
], []);

const columnsToHide = ['USERNAME', 'STATUS','DATE JOINED','PHONE NUMBER','EMAIL'];

const dynamicColumns = useMemo(() => {
  if (isSmallScreen) {
    return columns.filter((column) => !columnsToHide.includes(column.Header));
  } else {
    return columns;
  }
}, [isSmallScreen, columns]);

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
  
  // Now you can use `pageIndex` and `pageSize` without TypeScript errors

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

  const renderStatusCell = (status: { array: string[] }) => {
    // Custom rendering for the status cell
    // Similar to the original component's logic
    // ...

    return <span>{status.array[0]}</span>;
  };

  const renderActionsCell = (row: any) => {
    // Custom rendering for the actions cell
    // Similar to the original component's popover logic
    // ...

    return (
      <Popover
        content={<div>{/* ...Popover content */}</div>}
        trigger="click"
        // ... Other popover props
      >
        <Button type="link">
          {/* ...Icon or button content */}
        </Button>
      </Popover>
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
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    className={styles.headerCell}
                                >
                                    {column.render('Header')}
                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                                </th>
                            ))}
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

// Custom filter for select columns
const SelectColumnFilter: React.FC<any> = ({ column }) => {
  const { filterValue, setFilter } = column;
  const options = ['Option 1', 'Option 2', 'Option 3']; // Replace with your actual options
  return (
    <select
      value={filterValue || ''}
      onChange={(e) => setFilter(e.target.value || undefined)}
    >
      <option value="">All</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default UserInfo;


// import React, { useEffect, useMemo } from "react";
// import { useTable, useFilters, useGlobalFilter, useSortBy, usePagination } from 'react-table';
// import { Button, Input, Spin, Alert, Popover } from 'antd';
// import { useRouter } from 'next/router';
// import Image from 'next/image';
// import { useQuery } from 'react-query';
// import { useMediaQuery } from '@react-hook/media-query';
// import { useDispatch } from 'react-redux';
// import { User } from '../../interfaces';
// import { fetchUserData } from "../../features/user/userActions2";
// import styles from '../../styles/dashboard/UserInfo2.module.scss';

// const UserInfo: React.FC = () => {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const { data, isLoading, isError, refetch } = useQuery<User[], Error>('users', fetchUserData, {
//     enabled: false, // Disable automatic fetching
//   });
//   console.log(data, 'dddd')

//   const isSmallScreen = useMediaQuery('(max-width: 600px)');
//   const isMediumScreen = useMediaQuery('(min-width: 601px) and (max-width: 1024px)');
//   const isLargeScreen = useMediaQuery('(min-width: 1025px)');

//   const columns = useMemo(() => [
//     {
//       Header: 'ORGANIZATION',
//       accessor: 'orgName',
//       Filter: SelectColumnFilter,
//     },
//     {
//       Header: 'USERNAME',
//       accessor: 'userName',
//       Filter: TextColumnFilter,
//     },
//     {
//       Header: 'EMAIL',
//       accessor: 'email',
//       Filter: TextColumnFilter,
//     },
//     {
//       Header: 'PHONE NUMBER',
//       accessor: 'phoneNumber',
//       Filter: TextColumnFilter,
//     },
//     {
//       Header: 'DATE JOINED',
//       accessor: 'createdAt',
//       Filter: TextColumnFilter,
//     },
//     {
//       Header: 'STATUS',
//       accessor: 'status',
//       Filter: SelectColumnFilter,
//       Cell: ({ value }) => renderStatusCell(value),
//     },
//     {
//       Header: 'ACTIONS',
//       Cell: ({ row }) => renderActionsCell(row),
//     },
//   ], []);

//   const columnsToHideSmall = ['USERNAME', 'STATUS', 'DATE JOINED', 'PHONE NUMBER', 'EMAIL'];
//   const columnsToHideMedium = ['USERNAME', 'STATUS', 'PHONE NUMBER'];
//   const columnsToHideLarge = ['DATE JOINED', 'EMAIL'];

//   const dynamicColumns = useMemo(() => {
//     if (isSmallScreen) {
//       return columns.filter((column) => !columnsToHideSmall.includes(column.Header));
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

//   const renderStatusCell = (status: { array: string[] }) => {
//     return <span>{status.array[0]}</span>;
//   };

//   const renderActionsCell = (row: any) => {
//     return (
//       <Popover
//         content={<div>{/* ...Popover content */}</div>}
//         trigger="click"
//       >
//         <Button type="link">
//           {/* ...Icon or button content */}
//         </Button>
//       </Popover>
//     );
//   };

//   return (
//     <div className={styles.tableContainer}>
//       {isLoading && <Spin size="large" />}
//       {isError && <Alert message="Error fetching data" type="error" />}
//       <table {...getTableProps()} className={styles.table}>
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()} className={styles.headerRow}>
//               {headerGroup.headers.map((column) => (
//                 <th
//                   {...column.getHeaderProps(column.getSortByToggleProps())}
//                   className={styles.headerCell}
//                 >
//                   {column.render('Header')}
//                   <div>{column.canFilter ? column.render('Filter') : null}</div>
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()} className={styles.body}>
//           {rows.map((row) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()} className={styles.bodyRow}>
//                 {row.cells.map((cell) => (
//                   <td {...cell.getCellProps()} className={styles.bodyCell}>
//                     {cell.render('Cell')}
//                   </td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       {/* Pagination controls */}
//       {/* ... */}
//     </div>
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

// // Custom filter for select columns
// const SelectColumnFilter: React.FC<any> = ({ column }) => {
//   const { filterValue, setFilter } = column;
//   const options = ['Option 1', 'Option 2', 'Option 3']; // Replace with your actual options
//   return (
//     <select
//       value={filterValue || ''}
//       onChange={(e) => setFilter(e.target.value || undefined)}
//     >
//       <option value="">All</option>
//       {options.map((option) => (
//         <option key={option} value={option}>
//           {option}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default UserInfo;