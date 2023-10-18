import React from 'react'
import TextField from '../input/textfield/TextField'
import MultiSelect from '../select/multiselect/MultiSelect'
import PrimaryButton from '@/components/button/PrimaryButton'

const CompanyForm = () => {
  return (
    <div className='shadow-xl rounded-lg p-4 space-x-6 space-y-5 max-w-5xl mx-auto'>
    <h1 className='font-bold text-3xl p-6'>Company Information</h1>
    <TextField label='Company Name' placeholder='Enter Company Name'/>
    <TextField label='License No' placeholder='Enter License No'/>
    <TextField label='Phone' placeholder='Enter Phone Number'/>
    <TextField label='Owner Contact' placeholder='Enter Owner Contact'/>
    <TextField label='Password' type='password' placeholder='Enter Password'/>
    <TextField label='Cnic' placeholder='Enter Cnic'/>
    <TextField label='Address' placeholder='Enter Company Address'/>
    <MultiSelect name='Option'/>
    <PrimaryButton text='Submit' className='border-blue-600 hover:bg-blue-600 hover:text-white'/>
    </div>
  )
}

export default CompanyForm