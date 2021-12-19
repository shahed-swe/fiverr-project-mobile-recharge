// react components
import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useHistory } from 'react-router-dom'

// created components
import { LoginForm } from '../../components/form/loginForm'
import { Container } from '../../components/container'
import { Navbar } from '../../components/navbar/index' 
import { Footer } from '../../components/footer/index'
// styles
import './style.scss'

const Login = () => {
    const history = useHistory()
    const { register, handleSubmit, clearErrors, formState: { errors } } = useForm()
    // states
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) history.push('/home')
    }, [history])


    const login = async (data) => {
        localStorage.setItem('token', data.email)
        history.push('/home')
    }

    return (
        <div>

        <Navbar/>
        <div className='auth-container'>
            <Container.Basic>
                <Container.Row>
                    <Container.Column>
                        <LoginForm
                            handleSubmit={handleSubmit}
                            onSubmit={login}
                            errors={errors}
                            isLoading={isLoading}
                            register={register}
                        />
                    </Container.Column>
                </Container.Row>
            </Container.Basic>
        </div>
            <Footer />
        </div>
    )
}

export default Login;