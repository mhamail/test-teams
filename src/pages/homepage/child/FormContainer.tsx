"use client"
import React, { useState, useEffect } from 'react'
import FormField from '@/components/DataEntry/form/Form'
import { addPassport } from '@/actions/passport/passport'

const FormContainer = () => {
    const [value, setValue] = useState<{}>({})
    const [formData, setFormData] = useState<FormData>(new FormData());

    useEffect(() => {
        setFormData(new FormData())
    }, [])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const res = await addPassport(formData)
        }
        catch (err) { }
    }
    return (
        <div>
            <FormField />
        </div>
    )
}

export default FormContainer