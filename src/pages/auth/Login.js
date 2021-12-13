// react components
import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useHistory } from 'react-router-dom'

// created components
import { Text } from '../../components/text/Text'
import { FormGroup } from "../../components/formGroup/index"

const Login = () => {
    const history = useHistory()
    const { register, handleSubmit, clearErrors, setError, formState: { errors } } = useForm()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) history.push('/')
    }, [history])


    const login = async (data) => {
        console.log(data)
    }

    return (
        <div className='text-primary'>Hello</div>
    )
}

export default Login;