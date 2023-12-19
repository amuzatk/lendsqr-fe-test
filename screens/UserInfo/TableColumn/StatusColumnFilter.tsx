// StatusColumnFilter.tsx
import React from 'react';

interface StatusColumnFilterProps {
  column: any;
}

const StatusColumnFilter: React.FC<StatusColumnFilterProps> = ({ column }) => {
  const { filterValue, setFilter } = column;

  const statusOptions = ['Active', 'Inactive', 'Pending', 'Blacklisted'];

  return (
    <select
      value={filterValue || ''}
      onChange={(e) => {
        // Set the filter value to the selected status
        setFilter(e.target.value || undefined);
      }}
      onBlur={() => {
        // Trigger the filter process when the user exits the dropdown
        column.setFilter(filterValue, '===');
      }}
    >
      <option value="">All</option>
      {statusOptions.map((status) => (
        <option key={status} value={status}>
          {status}
        </option>
      ))}
    </select>
  );
};

export default StatusColumnFilter;
