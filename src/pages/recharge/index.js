// react components
import { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { Edit, Phone } from 'react-feather'
// created components
import { Navbar } from '../../components/navbar/index'
import { Footer } from '../../components/footer/index'
import { MiddleLayout } from '../../components/middlelayout'
import { Text } from '../../components/text/Text'

// style
import './style.scss'
import { Requests } from '../../utils/Http'
import { Container } from '../../components/container'
import { DangerButton } from '../../components/button'

const Recharge = () => {
    const [operator, setOperator] = useState(null)
    const [number, setNumber] = useState(null)
    const [showNumber, setShowNumber] = useState(false)
    const params = useParams()
    const [data, setData] = useState([])

    // get country details
    const fetchCountryDetails = useCallback(async (code) => {
        const response = await Requests.CountryApi.CountryWiseInformation(code)
        if (response.status === 200) {
            setData(response.data.providers)
        }
    }, [])

    useEffect(() => {
        if (params.code) {
            fetchCountryDetails(params.code)
        }
    }, [fetchCountryDetails, params])


    const handleGetNumber = () => {
        setShowNumber(true)
    }

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
                                            <Text className="fs-16 font-weight-bolder text-danger">Summary</Text>
                                            <div className='bg-white country-sec row border border-danger ml-5 mr-5 p-2 text-left'>
                                                <Text className="font-weight-bold fs-14 my-auto p-2 col-4">Country:</Text>
                                                <div className='d-flex justify-content-between col-8'>
                                                    <div className='my-auto'>
                                                        <span className={`flag-icon pl-3 pr-3 p-2 flag-icon-${params.code.toLowerCase()}`}> </span>
                                                        <span className='my-auto ml-2'>{params.name}</span> 
                                                    </div>
                                                    
                                                    <div className='my-auto'>
                                                        <Edit size={22} color={"red"} />
                                                    </div>
                                                </div>

                                            </div>
                                            {operator ?
                                                <div className='bg-white row border border-danger ml-5 mr-5 p-2 mt-2 text-left'>
                                                    <Text className="font-weight-bold fs-14 my-auto p-2 col-4">Operator: </Text>
                                                    <div className='d-flex justify-content-between col-8'>
                                                        <div>
                                                            <img src={operator.LogoUrl} alt="" className='rounded-circle' style={{ height: "35px", width: "35px" }} />
                                                            <span className='ml-2 p-0'>{operator.Name}</span>
                                                        </div>
                                                        <div className='my-auto'>
                                                            <Edit size={22} color={"red"} />
                                                        </div>
                                                    </div>


                                                </div> : null}

                                            {showNumber ?
                                                <div className='bg-white d-flex justify-content-between border border-danger ml-5 mr-5 p-2 mt-2 text-left'>
                                                    <Text className="font-weight-bold fs-14 my-auto p-2 col-4">Number: </Text>
                                                    <div className="d-flex justify-content-between col-8">
                                                        <div className="d-flex justify-content-start">
                                                            <div className="rounded-circle border border-danger p-2">
                                                                <Phone size={22} color={"red"} />
                                                            </div>
                                                            <div className='my-auto'>
                                                                <span className='ml-2 p-0 my-auto'>+{params.prefix} | {number}</span>
                                                            </div>
                                                        </div>
                                                        <div className='my-auto'>
                                                            <Edit size={22} color={"red"} />
                                                        </div>
                                                    </div>

                                                    
                                                </div> : null}
                                        </div>
                                    </div>
                                    <div className='bg-white resetpass border border-danger pb-3 mt-5'>
                                        {!operator ?
                                            <div className='text-center pt-2'>
                                                <Text className="fs-16 font-weight-bolder text-gray">Select Operator</Text>
                                                <div className='bg-white country-sec border border-danger ml-5 mr-5 p-3'>
                                                    <div className='row'>
                                                        {data && data.map((item, index) => {
                                                            return (
                                                                <div className='col-3 my-auto p-0 pb-2' onClick={() => setOperator(item)} key={index}>
                                                                    <div className='w-100'>
                                                                        <img src={item.LogoUrl} alt="" width={120} height={120} className='img-fluid ' />
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>

                                                </div>
                                            </div> :
                                            null}
                                        {operator && !showNumber ?
                                            <div className='text-center pt-2'>
                                                <Text className="fs-16 font-weight-bolder text-gray">Where to send the Top-Up?</Text>
                                                <div className='bg-white ml-5 mr-5 p-3'>
                                                    <div className='row mx-auto'>
                                                        <div className="input-group mb-3 ">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text bg-danger m-0" id="basic-addon1"><span className={`flag-icon bg-white p-1 pl-2 pr-2 rounded-circle flag-icon-${params.code.toLowerCase()}`}></span></span>
                                                            </div>
                                                            <span className="prefix my-auto">+{params.prefix}</span>
                                                            <input type="text" class="form-control shadow-none extra-input pl-5 p-3 border border-danger" min="10" max="12" required onChange={(event) => setNumber(event.target.value)} />
                                                            <DangerButton onClick={() => handleGetNumber()}>Submit</DangerButton>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            : null}

                                        {showNumber ?
                                            <div className='text-center pt-2'>
                                                <Text className="fs-16 font-weight-bolder text-gray">Select Amount</Text>
                                                <div className='bg-white ml-5 mr-5 p-3'>
                                                    <div className='row mx-auto'>
                                                        <div className="input-group mb-3 ">
                                                            <div className="input-group-prepend">
                                                                <span className={`input-group-text bg-danger flag-icon flag-icon-${params.code.toLowerCase()}`} id="basic-addon1">{params.code}</span>
                                                            </div>
                                                            <span className="prefix my-auto">+{params.prefix}</span>
                                                            <input type="text" class="form-control shadow-none extra-input pl-5 border border-danger" min="10" max="12" onChange={(event) => setNumber(event.target.value)} />
                                                            <DangerButton onClick={() => handleGetNumber()}>Submit</DangerButton>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            : null}
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

export default Recharge;