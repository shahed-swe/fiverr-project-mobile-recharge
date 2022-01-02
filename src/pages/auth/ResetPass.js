// react components
import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useHistory } from 'react-router-dom'

// created components
import { ResetPasswordForm } from '../../components/form/resetpassFrom'
import { Container } from '../../components/container'
import { Navbar } from '../../components/navbar/index'
import { Toastify } from '../../components/toastify/Toastify'
import { MiddleLayout } from '../../components/middlelayout'
// api request
import { Requests } from '../../utils/Http/index'

// styles
import './style.scss'
import { Footer } from '../../components/footer'

const ResetPass = () => {
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


    const resetpass = async (data) => {
        console.log(data)
        // clearErrors()
        // try {
        //     setLoading(true)
        //     const body = {
        //         user: {
        //             email: data.email,
        //             name: data.name,
        //             surname: data.surname,
        //             password: data.password
        //         }
        //     }
        //     const response = await Requests.Authentication.SignUp(body)
        //     console.log(response)
        //     if (response.data && response.status === 200) {
        //         Toastify.Success("Successfully Registered")
        //         // history.push('/login')
        //         setMessage(true)
        //         setLoading(false)
        //     }

        // } catch (error) {
        //     if (error.response && error.response.status === 422) {
        //         // 
        //         console.log(error.response)
        //     }
        //     else {

        //     }
        //     setLoading(false)
        // }
    }

    return (
        <div>
            <Navbar />

            <div className='auth-container'>
                <MiddleLayout>
                    <Container.Basic>
                        <Container.Column className="pt-5 pb-5">
                            <div className='pt-5 pb-5'>
                                <ResetPasswordForm
                                    handleSubmit={handleSubmit}
                                    onSubmit={resetpass}
                                    errors={errors}
                                    isLoading={isLoading}
                                    register={register}
                                    subscribe={subscribe}
                                    setSubscribe={setSubscribe}
                                />
                            </div>
                        </Container.Column>
                    </Container.Basic>

                </MiddleLayout>
            </div>
            <Footer />
        </div>
    )
}

export default ResetPass;