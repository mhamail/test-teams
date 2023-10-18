"use client"
import React from 'react'
import TextField from '../input/textfield/TextField'
import PrimaryButton from '@/components/button/PrimaryButton'
import FileUpload from '@/components/fileUpload/FileUpload'
import MultiSelect from '../select/multiselect/MultiSelect'

const FormField = () => {
    const handleImage=()=>{}
  return (
    <div className='shadow-xl rounded-lg p-4 space-x-6 space-y-5 max-w-5xl mx-auto mb-[50px]'>
        <h1 className='font-bold text-3xl p-6'>Enter Passport Entry</h1>
        <form className='space-y-4'>
            <FileUpload handleImage={handleImage}/>
            <TextField />
            <TextField/>
            <TextField/>
            <TextField/>
            <MultiSelect/>
          <PrimaryButton text='Submit'  className='border-blue-600 hover:bg-blue-600 hover:text-white'/>
        </form>
    </div>
  )
}

export default FormField