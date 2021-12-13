// react components
import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useHistory } from 'react-router-dom'

// created components
import { RegistrationForm } from '../../components/form/registrationForm'
import { Container } from '../../components/container'

// styles
import './style.scss'

const Register = () => {
    const history = useHistory()
    const { register, handleSubmit, clearErrors, formState: { errors } } = useForm()
    // states
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) history.push('/')
    }, [history])


    const registration = async (data) => {
        clearErrors()
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
        console.log(data)
    }

    return (
        <div className='auth-container'>
            <Container.Basic>
                <Container.Row>
                    <Container.Column>
                        <RegistrationForm
                            handleSubmit={handleSubmit}
                            onSubmit={registration}
                            errors={errors}
                            isLoading={isLoading}
                            register={register}
                        />
                    </Container.Column>
                </Container.Row>
            </Container.Basic>
        </div>
    )
}

export default Register;