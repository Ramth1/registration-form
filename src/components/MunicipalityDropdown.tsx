import React from 'react';
import { useFormContext } from 'react-hook-form';

const MunicipalityDropdown: React.FC = () => {
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor="municipality">Municipality:</label>
      <select id="municipality" {...register('municipality')}>
        <option value="">Select Municipality</option>
        <option value="Municipality1">Municipality 1</option>
        <option value="Municipality2">Municipality 2</option>
        <option value="Municipality3">Municipality 3</option>
        {/* Add more municipalities as needed */}
      </select>
    </div>
  );
};

export default MunicipalityDropdown;
