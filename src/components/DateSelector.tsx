import React from 'react';
import { useFormContext } from 'react-hook-form';

const DateSelector: React.FC = () => {
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor="dob">Date of Birth:</label>
      <input type="date" id="dob" {...register('dob')} />
    </div>
  );
};

export default DateSelector;
