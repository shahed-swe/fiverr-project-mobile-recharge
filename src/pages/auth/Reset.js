import React, { useState, useEffect } from 'react'
import './style.scss'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Container } from '../../components/container/index'
import { Card } from '../../components/card/index'
import { Text } from '../../components/text/Text'
import { SendOtpForm } from '../../components/form/resetpasswordform'
import { Toastify } from '../../components/toastify/Toastify'
import { Requests } from '../../utils/Http/index'
import { Navbar } from '../../components/navbar'
import { Footer } from '../../components/footer'
import { MiddleLayout } from '../../components/middlelayout'


const ResetRequest = () => {
    const history = useHistory()
    const { t } = useTranslation()
    const { register, handleSubmit, clearErrors, formState: { errors } } = useForm()
    const [sendingotp, setSendingotp] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) history.push('/shop')
    }, [history])

    // Submit Form to OTP
    const SendOTP = async (data) => {
        try {
            clearErrors();
            setSendingotp(true)

            const response = await Requests.Authentication.ForgotPassword(data)
            if(response.data && response.status === 200){
                Toastify.Success("Password Reset Link Sent")
            }
            setSendingotp(false)
        } catch (error) {
            if (error) {
                console.log(error)
            }
        }
    }

    return (
        <div>
            <Navbar />
            <div className="auth-container">
                <MiddleLayout>
                    <Container.Basic>
                        <Container.Column className="pt-5 pb-5 col-lg-7 mx-auto">
                            <div className='pt-5 pb-5'>
                                <div className='resetpass-section'>
                                    <div className='text-center'>
                                        <Text className="fs-26 font-weight-bolder mb-1 text-extra text-gray pb-3">Password Reset</Text>
                                    </div>
                                    <div className='bg-white resetpass p-5 border border-danger'>
                                        <SendOtpForm
                                            handleSubmit={handleSubmit}
                                            onSubmit={SendOTP}
                                            errors={errors}
                                            sendingotp={sendingotp}
                                            t={t}
                                            register={register}
                                        />
                                    </div>
                                </div>
                            </div>
                            
                        </Container.Column>
                    </Container.Basic>
                    
                </MiddleLayout>
            </div>
            <Footer />
        </div>
    );
}

export default ResetRequest;