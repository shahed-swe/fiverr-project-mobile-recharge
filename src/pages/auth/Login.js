// react components
import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useHistory } from 'react-router-dom'

// created components
import { LoginForm } from '../../components/form/loginForm'
import { Container } from '../../components/container'
import { Navbar } from '../../components/navbar/index'
import { Footer } from '../../components/footer/index'
import { Requests } from '../../utils/Http/index'
import { Toastify } from '../../components/toastify/Toastify'
import { MiddleLayout } from '../../components/middlelayout'

// styles
import './style.scss'

const Login = () => {
    const history = useHistory()
    const { register, handleSubmit, clearErrors, formState: { errors } } = useForm()
    // states
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) history.push('/')
    }, [history])


    const login = async (data) => {
        clearErrors()
        try {
            setLoading(true)
            const body = {
                user: {
                    email: data.email,
                    password: data.password,
                }
            }
            const response = await Requests.Authentication.Login(body)
            if (response.data && response.status === 200) {
                
                localStorage.setItem('token', response.data.user.token)
                history.push('/')
            }
        } catch (error) {
            if(error){
                Toastify.Error("Credential Error")
            }
        }
    }

    return (
        <div>
            <Navbar/>
            <div className='auth-container'>

                <MiddleLayout>
                    <LoginForm
                        handleSubmit={handleSubmit}
                        onSubmit={login}
                        errors={errors}
                        isLoading={isLoading}
                        register={register}
                    />
                </MiddleLayout>
            </div>
            <Footer />
        </div>
    )
}

export default Login;