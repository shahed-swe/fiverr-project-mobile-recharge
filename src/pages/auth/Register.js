// react components
import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useHistory } from 'react-router-dom'

// created components
import { RegistrationForm } from '../../components/form/registrationForm'
import { Container } from '../../components/container'
import { Navbar } from '../../components/navbar/index'
import { Toastify } from '../../components/toastify/Toastify'
// api request
import { Requests } from '../../utils/Http/index'
import { MiddleLayout } from '../../components/middlelayout'

// styles
import './style.scss'
import { Footer } from '../../components/footer'

const Register = () => {
    const history = useHistory()
    const { register, handleSubmit, clearErrors, formState: { errors } } = useForm()
    // states
    const [isLoading, setLoading] = useState(false);
    const [subscribe, setSubscribe] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) history.push('/')
    }, [history])


    const registration = async (data) => {
        clearErrors()
        try {
            setLoading(true)
            const body = {
                user: {
                    email: data.email,
                    name: data.name,
                    surname: data.surname,
                    password: data.password
                }
            }
            const response = await Requests.Authentication.SignUp(body)
            console.log(response)
            if (response.data && response.status === 200) {
                Toastify.Success("Successfully Registered")
                history.push('/login')
                setLoading(false)
            }

        } catch (error) {
            if (error.response && error.response.status === 422) {
                // 
                console.log(error.response)
            }
            else {

            }
            setLoading(false)
        }
    }

    return (
        <div>
            <Navbar />

            <div className='auth-container'>
                <MiddleLayout>
                    <RegistrationForm
                        handleSubmit={handleSubmit}
                        onSubmit={registration}
                        errors={errors}
                        isLoading={isLoading}
                        register={register}
                        subscribe={subscribe}
                        setSubscribe={setSubscribe}
                    />
                </MiddleLayout>
            </div>
            <Footer/>
        </div>
    )
}

export default Register;