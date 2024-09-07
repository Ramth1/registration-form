import React from 'react';
import { useFormContext } from 'react-hook-form';

const DistrictDropdown: React.FC = () => {
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor="district">District:</label>
      <select id="district" {...register('district')}>
        <option value="">Select District</option>
        <option value="District1">District 1</option>
        <option value="District2">District 2</option>
        <option value="District3">District 3</option>
        {/* Add more districts as needed */}
      </select>
    </div>
  );
};

export default DistrictDropdown;
