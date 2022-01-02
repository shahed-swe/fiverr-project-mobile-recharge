// react components
import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useHistory } from 'react-router-dom'

// created components
import { RegistrationForm } from '../../components/form/registrationForm'
import { Container } from '../../components/container'
import { Navbar } from '../../components/navbar/index'
import { Toastify } from '../../components/toastify/Toastify'
import { MiddleLayout } from '../../components/middlelayout'
import { Text } from '../../components/text/Text'
// api request
import { Requests } from '../../utils/Http/index'

// styles
import './style.scss'
import { Footer } from '../../components/footer'

const Register = () => {
    const history = useHistory()
    const { register, handleSubmit, clearErrors, formState: { errors } } = useForm()
    // states
    const [isLoading, setLoading] = useState(false);
    const [subscribe, setSubscribe] = useState(false)
    const [message, setMessage] = useState(false)


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
                // history.push('/login')
                setMessage(true)
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
                    <Container.Basic>
                        <Container.Column className="pt-5 pb-5">
                            {!message ? 
                            <div className='pt-5 pb-5'>
                                <RegistrationForm
                                    handleSubmit={handleSubmit}
                                    onSubmit={registration}
                                    errors={errors}
                                    isLoading={isLoading}
                                    register={register}
                                    subscribe={subscribe}
                                    setSubscribe={setSubscribe}
                                />
                            </div>:
                            <div className='text-section pt-5 pb-5 mt-5 '>
                                    <Text className="fs-22 font-weight-bold text-gray text-center">Verify Your Email To finish Signup</Text>
                                    <div className='bg-white resetpass border border-danger pb-3 mt-5 mb-5 pb-5'>
                                        <Text className="fs-14 text-center text-gray py-5">Thank you for choosing us, An email is send to your email account. <br/> Please
                                            click the verification link from your email.</Text>
                                    </div>
                            </div>}
                        </Container.Column>
                    </Container.Basic>
                    
                </MiddleLayout>
            </div>
            <Footer/>
        </div>
    )
}

export default Register;