// react components
import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useHistory } from 'react-router-dom'

// created components
import { LoginForm } from '../../components/form/loginForm'
import { Container } from '../../components/container'
import { Navbar } from '../../components/navbar/index' 
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
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
        console.log(data)
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
        </div>
    )
}

export default Login;