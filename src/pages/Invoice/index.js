import {useEffect} from 'react'
// react components
import { CheckCircle } from 'react-feather'
import { Link } from 'react-router-dom'

// created components
import { Text } from '../../components/text/Text'
import { Navbar } from '../../components/navbar/index'
import { Footer } from '../../components/footer/index'
import { MiddleLayout } from '../../components/middlelayout'
import { Container } from '../../components/container'
import { DangerButton } from '../../components/button'
import './style.scss'





const Invoice = () => {

    const gotoTop = () => {
        return window.scrollTo({ top: 0, behavior: 'smooth' })
    }


    useEffect(() => {
        gotoTop()
    })

    return (
        <div>
            <Navbar />
            <div className='auth-container'>
                <MiddleLayout>
                    <Container.Basic>
                        <Container.Column className="pt-5 pb-5 col-lg-7 mx-auto">
                            <div className='pt-5 pb-5'>
                                <div className='pt-2 pb-2'>
                                    <div className='text-center'>
                                        <Text className="fs-26 font-weight-bolder mb-1 text-extra text-gray pb-3">INTERNATIONAL MOBILE RECHARGE</Text>
                                    </div>
                                    <div className='bg-white resetpass border border-danger pb-3'>
                                        <div className='text-center pt-2 '>
                                            <Text className="fs-16 font-weight-bolder text-success">
                                                <CheckCircle size={56} />
                                            </Text>
                                            <div className='bg-white p-2 text-center'>
                                                <Text className="font-weight-normal fs-14 my-auto p-0">Your Payment was successfully</Text>
                                                <Text className="font-weight-normal fs-14 my-auto p-0">Invoice #123</Text>
                                                <Text className="font-weight-normal fs-14 my-auto p-0">Your Invoice will be emailed soon</Text>
                                                <hr className='border border-danger ml-5 mr-5' />
                                                <Link to="/">
                                                    <DangerButton>Send Another Recharge</DangerButton>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container.Column>
                    </Container.Basic>
                </MiddleLayout>
            </div>
            <Footer />
        </div>
    )
}

export default Invoice;