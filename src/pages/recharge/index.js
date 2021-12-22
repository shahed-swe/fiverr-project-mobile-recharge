// react components
import { useEffect, useState, useCallback } from 'react'
import { useForm } from "react-hook-form"
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'

// created components
import { Navbar } from '../../components/navbar/index'
import { Footer } from '../../components/footer/index'
import { MiddleLayout } from '../../components/middlelayout'
import { Text } from '../../components/text/Text'

// style
import './style.scss'
import { Requests } from '../../utils/Http'

const Recharge = () => {
    const history = useHistory()
    const params = useParams()
    const { register, handleSubmit, clearErrors, formState: { errors } } = useForm()
    const [data, setData] = useState([])

    // get country details
    const fetchCountryDetails = useCallback(async(code) => {
        const response = await Requests.CountryApi.CountryWiseInformation(code)
        if(response.status === 200){
            setData(response.data.providers)
        }
    },[])


    useEffect(() => {
        if(params.code){
            fetchCountryDetails(params.code)
        }
    },[fetchCountryDetails, params])

    return (
        <div>
            <Navbar />
            <div className='auth-container'>

                <MiddleLayout>
                    <div className='resetpass-section mt-5 pl-5'>
                        <div className='text-center'>
                            <Text className="fs-26 font-weight-bolder mb-1 text-extra text-gray pb-3">INTERNATIONAL MOBILE RECHARGE</Text>
                        </div>
                        <div className='bg-white resetpass border border-danger pb-3'>
                            <div className='text-center pt-2 '>
                                <Text className="fs-16 font-weight-bolder text-danger">Summary</Text>
                                <div className='bg-white country-sec d-flex justify-content-between border border-danger ml-5 mr-5'>
                                    <Text className="font-weight-bold fs-14 pl-2 pt-2">Country: {params.code}</Text>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white resetpass border border-danger pb-3 mt-5'>
                            <div className='text-center pt-2 '>
                                <Text className="fs-16 font-weight-bolder text-danger">Select Operator</Text>
                                <div className='bg-white country-sec border border-danger ml-5 mr-5 p-3'>
                                    <div className='row'>
                                        {data && data.map((item) => {
                                            return (
                                                <div className='col-2 my-auto'>
                                                    <div className=''>
                                                        <img src={item.LogoUrl} alt="" className='img-fluid border border-danger' />
                                                    </div>
                                                </div>
                                                
                                            )
                                        })}
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </MiddleLayout>
            </div>
            <Footer />
        </div>
    )
}

export default Recharge;