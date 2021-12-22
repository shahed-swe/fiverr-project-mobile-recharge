import React from 'react'
import { DangerButton } from '../button/index'
import { Text } from '../text/Text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { Container } from '../../components/container/index'

export const SendOtpForm = (props) => {
    const { handleSubmit, onSubmit, errors, sendingotp, t, register } = props;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* E-mail or phone */}
            <Container.Row>
                <Container.Column className="col-md-3">
                <Text className="text-capitalize fs-13 mb-4 font-weight-bold text-danger pr-5 pt-2">Enter your email</Text>

                </Container.Column>
                <Container.Column className="col-md-9">
                    <div className='d-flex'>
                        <input
                            type="text"
                            className={errors.email ? "form-control shadow-none error border border-danger rounded my-auto" : "form-control border border-danger shadow-none rounded"}
                            placeholder="Email"
                            {...register("email", { required: t("E-mail is required") })}
                        />
                        <FontAwesomeIcon icon={faCheckCircle} className='fs-28 mt-1 ml-2' color='green' />
                    </div>
                    
                </Container.Column>
                
            </Container.Row>
            <div >
                <Text className="fs-14 font-weight-bold">We will send a link to the email entered. Click on the link to reset your password and login</Text>
            </div>
            <div className='text-center'>
                <DangerButton
                    type="submit"
                    className="rounded-pill"
                    disabled={sendingotp}
                >
                    {sendingotp ? "Sending Email ..." : "Reset"}
                </DangerButton>
            </div>


            {/* Submit button */}
            
        </form>
    )
}
