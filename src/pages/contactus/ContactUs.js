// react components
import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useHistory } from 'react-router-dom'

// created components
import { ContactUsForm } from '../../components/form/contactus'
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

const ContactUs = () => {
    const { register, handleSubmit, clearErrors, formState: { errors } } = useForm()
    // states
    const [isLoading, setLoading] = useState(false);
    const [subscribe, setSubscribe] = useState(false)


    const registration = async (data) => {
        // console.log(data)
        clearErrors()
        try {
            setLoading(true)
            // console.log(data)
            const response = await Requests.Contact.ContactUs(data)
            console.log(response)
            if (response.data && response.status === 200) {
                Toastify.Success("Successfully Registered")
                // history.push('/login')
                setLoading(false)
            }

        } catch (error) {
            if (error.response && error.response.status === 422) {
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
                            <div className='pt-5 pb-5'>
                                <ContactUsForm
                                    handleSubmit={handleSubmit}
                                    onSubmit={registration}
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

export default ContactUs;