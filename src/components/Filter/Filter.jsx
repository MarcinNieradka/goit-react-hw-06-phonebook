import React from 'react';

export const Filter = ({ filter, filterChange }) => {
  return (
    <input
      type="text"
      value={filter}
      onChange={filterChange}
      placeholder="Search..."
    />
  );
};
