import React from 'react'
import { useFormContext } from 'react-hook-form'

const ImageInput: React.FC =()=>{
    const {register}=useFormContext();

    return(
        <>
        <label htmlFor='image'>Upload Photo:</label>
        <input type='file' id='image' {...register('image')} accept='image/*'/>
        </>
    )
}

export default ImageInput;