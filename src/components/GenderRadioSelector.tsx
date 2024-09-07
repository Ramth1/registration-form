import React from 'react';
import { useFormContext } from 'react-hook-form';

const GenderRadioSelector: React.FC = () => {
  const { register } = useFormContext();

  return (
    <div>
      <label>Gender:</label>
      <div>
        <input type="radio" {...register('gender')} value="Male" /> Male
        <input type="radio" {...register('gender')} value="Female" /> Female
        <input type="radio" {...register('gender')} value="Other" /> Other
      </div>
    </div>
  );
};

export default GenderRadioSelector;
