import React, { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import ProgressBar from '../components/ProgressBar';
import ImageInput from '../components/ImageInput';
import ProvinceDropdown from '../components/ProvinceDropdown';
import DistrictDropdown from '../components/DistrictDropdown';
import MunicipalityDropdown from '../components/MunicipalityDropdown';
import GenderRadioSelector from '../components/GenderRadioSelector';
import DateSelector from '../components/DateSelector';

// Define Zod schema and types as before
const registrationSchema = z.object({
  image: z
    .instanceof(File)
    .refine((file) => file.size <= 5 * 1024 * 1024, "File size should be less than 5MB"),
  province: z.string().min(1, 'Province is required'),
  district: z.string().min(1, 'District is required'),
  municipality: z.string().min(1, 'Municipality is required'),
  gender: z.enum(['Male', 'Female', 'Other']),
  dob: z.string().nonempty('Date of birth is required'),
});

type RegistrationFormValues = z.infer<typeof registrationSchema>;

const RegistrationForm: React.FC = () => {
  const methods = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    mode: 'onChange', // Validate on change for real-time progress tracking
  });

  const { handleSubmit, watch, formState: { isValid } } = methods;
  
  const [progress, setProgress] = useState(0);

  // Watch all form values and update the progress accordingly
  const formValues = watch();

  useEffect(() => {
    // Calculate filled fields count
    const filledFields = Object.values(formValues).filter(value => value !== '' && value !== undefined).length;
    const totalFields = Object.keys(formValues).length;

    // Calculate progress percentage
    const progressPercentage = (filledFields / totalFields) * 100;
    setProgress(progressPercentage);
  }, [formValues]);

  const onSubmit = (data: RegistrationFormValues) => {
    console.log('Form Data:', data);
    alert('Registration successful!');
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Registration Form</h2>
        <ProgressBar progress={progress} />
        <ImageInput />
        <ProvinceDropdown />
        <DistrictDropdown />
        <MunicipalityDropdown />
        <GenderRadioSelector />
        <DateSelector />
        <button type="submit" disabled={!isValid}>Register</button>
      </form>
    </FormProvider>
  );
};

export default RegistrationForm;
