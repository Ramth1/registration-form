import React from 'react';
import { useFormContext } from 'react-hook-form';

const ProvinceDropdown: React.FC = () => {
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor="province">Province:</label>
      <select id="province" {...register('province')}>
        <option value="">Select Province</option>
        <option value="Province1">Province 1</option>
        <option value="Province2">Province 2</option>
        <option value="Province3">Province 3</option>
        
      </select>
    </div>
  );
};

export default ProvinceDropdown;
