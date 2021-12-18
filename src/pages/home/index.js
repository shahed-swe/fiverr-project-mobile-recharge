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

const Home = () => {
    const history = useHistory()
    const { register, handleSubmit, clearErrors, formState: { errors } } = useForm()
    // states
    const [isLoading, setLoading] = useState(false);



    return (
        <div>
            <Navbar />
            <div>
                <Container.Basic>
                    <Container.Row>
                        <Container.Column>
                            <h1>Hello</h1>
                        </Container.Column>
                    </Container.Row>
                </Container.Basic>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;