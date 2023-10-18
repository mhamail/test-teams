"use client"
import React from 'react'
import TextField from '../input/textfield/TextField'
import MultiSelect from '../select/multiselect/MultiSelect'
import PrimaryButton from '@/components/button/PrimaryButton'
import FileUpload from '@/components/fileUpload/FileUpload'

const PassportForm = () => {
    const handleImage=()=>{}
  return (
    <>
     <div className='shadow-xl rounded-lg p-4 space-x-6 space-y-5 max-w-5xl mx-auto'>
    <h1 className='font-bold text-3xl p-6'>Passport Information</h1>
    <TextField label='Passport Number' type='number' placeholder='Enter Passport Number'/>
    <TextField label='Nationality' placeholder='Enter Nationality'/>
    <TextField label='Name' placeholder='Enter Full Name'/>
    <TextField label='Confirm Name' placeholder='Enter Confirm Name'/>
    <TextField label='Date Of Birth'  placeholder='Enter Date Of Birth'/>
    <TextField label='Place Of Birth'  placeholder='Enter Place Of Birth'/>
    <TextField label='Cnic' placeholder='Enter Cnic'/>
    <TextField label='Gender' placeholder='Enter Gender'/>
    <TextField label='City' placeholder='Enter City'/>
    <TextField label='Country' placeholder='Enter Country'/>
    <TextField label='Father Name' placeholder='Enter Father Name'/>
    <TextField label='DOI' placeholder='Enter Digital Object Indentifier'/>
    <TextField label='Date Of Expiry' placeholder='Enter Date Of Expiry'/>
    <TextField label='Issuing Authority' type='number' placeholder='Enter Issuing Authority'/>
    <TextField label='Tracking Number' type='number' placeholder='Enter Tracking Number'/>
    <TextField label='Booklet Number' type='number' placeholder='Enter Booklet Number'/>
    <FileUpload handleImage={handleImage}/>

    <PrimaryButton text='Submit' className='border-blue-600 hover:bg-blue-600 hover:text-white'/>
    </div>
    </>
  )
}

export default PassportForm