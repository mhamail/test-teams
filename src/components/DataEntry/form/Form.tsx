"use client"
import React from 'react'
import TextField from '../input/textfield/TextField'
import PrimaryButton from '@/components/button/PrimaryButton'
import FileUpload from '@/components/fileUpload/FileUpload'
import MultiSelect from '../select/multiselect/MultiSelect'

const FormField = () => {
    const handleImage=()=>{}
  return (
    <div className='mx-auto max-w-5xl space-y-10 shadow-lg p-4 rounded-lg'>
        <h1 className='text-3xl font-bold text-center'>Enter Passport Entry</h1>
        <form className='space-y-4'>
            <FileUpload handleImage={handleImage}/>
            <TextField/>
            <TextField/>
            <TextField/>
            <TextField/>
            <MultiSelect/>
          <PrimaryButton text='Submit'/>
        </form>
    </div>
  )
}

export default FormField