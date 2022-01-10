// react components
import { Edit, Phone } from 'react-feather'
import { Link, useHistory, useParams } from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'
// created components
import { Text } from '../../components/text/Text'
import { Navbar } from '../../components/navbar/index'
import { Footer } from '../../components/footer/index'
import { MiddleLayout } from '../../components/middlelayout'
import { isLoggedin } from '../../utils/Authentication'

// font awesome
import { faPaypal } from '@fortawesome/free-brands-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// style
import './style.scss'
import { Requests } from '../../utils/Http'
import { Container } from '../../components/container'
import { DangerButton } from '../../components/button'
import { Toastify } from '../../components/toastify/Toastify'


const Recharge = () => {
    localStorage.removeItem('get')
    localStorage.removeItem('operator')
    const params = useParams()
    const history = useHistory()
    const { register, handleSubmit, setError, formState: { errors } } = useForm()
    const [page, setPage] = useState(6)
    const [data, setData] = useState([])
    const [price, setPrice] = useState(null)
    const [number, setNumber] = useState(null)
    const [operator, setOperator] = useState(null)
    const [showprice, setshowprice] = useState(null)
    const [pricesdata, setPriceData] = useState(null)
    const [showNumber, setShowNumber] = useState(false)
    const [showMessage, setShowMessage] = useState(false)

    


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


    // handle phone number validation
    const isValidPhone = (phonenumber) => {
        const regex2 = new RegExp(operator.ValidationRegex)
        return regex2.test(phonenumber)
    }

    const handleGetNumber = (data) => {
        // console.log(data.phone_no)
        console.log(isValidPhone(params.prefix + data.phone_no))
        if (isValidPhone(params.prefix + data.phone_no) === false) {
            setError("phone_no", {
                type: "manual",
                message: "Invalid Phone number",
            });
        } else {
            setNumber(data.phone_no)
            setShowNumber(true)

        }
    }

    const fetchData = useCallback(async () => {
        const data = []
        const newpage = page + 3
        operator && operator.products && operator.products.length > 0 && operator.products.map((item) => item.price.map((item2) => data.push(item2)))
        setPriceData(data.splice(0, newpage))
    }, [operator, page])

    // show prices
    useEffect(() => {
        fetchData(6)
    }, [fetchData])



    const gotoTop = () => {
        return window.scrollTo({ top: 0, behavior: 'smooth' })
    }


    // fetching localStorage data
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('data')))
        setPrice(JSON.parse(localStorage.getItem('price')))
        setNumber(JSON.parse(localStorage.getItem('number')))
        setOperator(JSON.parse(localStorage.getItem('operatordata')))
        setshowprice(JSON.parse(localStorage.getItem('showprice')))
        setPriceData(JSON.parse(localStorage.getItem('pricesdata')))
        setShowNumber(JSON.parse(localStorage.getItem('showNumber')))
        setShowMessage(JSON.parse(localStorage.getItem('showMessage')))
    },[])


    const handlePaymentGateway = (value) => {
        
        if(isLoggedin()){
            if (value === "card") {
                history.push('/invoice')
            } else {
                history.push('/invoice-error')
            }
            Toastify.Success("Successfully Purchased")
            localStorage.removeItem('data')
            localStorage.removeItem('price')
            localStorage.removeItem('number')
            localStorage.removeItem('operatordata')
            localStorage.removeItem('showprice')
            localStorage.removeItem('pricesdata')
            localStorage.removeItem('showNumber')
            localStorage.removeItem('showMessage')
            window.location.reload()
        }else{
            localStorage.setItem('get',true)
            localStorage.setItem('operator', params.code+'/'+params.name+'/'+params.prefix)
            localStorage.setItem('data', JSON.stringify(data))
            localStorage.setItem('price', JSON.stringify(price));
            localStorage.setItem('number', JSON.stringify(number))
            localStorage.setItem('operatordata', JSON.stringify(operator))
            localStorage.setItem('showprice', JSON.stringify(showprice))
            localStorage.setItem('pricesdata', JSON.stringify(pricesdata))
            localStorage.setItem('showNumber', JSON.stringify(showNumber))
            localStorage.setItem('showMessage', JSON.stringify(showMessage))
            history.push('/login')
        }
        
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
                                                <div className='d-flex justify-content-between col-lg-8 col-md-12'>
                                                    <div className='d-flex justify-content-between'>
                                                        <span className={`flag-icon pl-3 pr-3 p-2 border border-danger rounded-circle flag-icon-${params.code.toLowerCase()}`}> </span>
                                                        <span className='my-auto ml-2'>{params.name}</span>
                                                    </div>
                                                    <Link to={'/'}>
                                                        <div className='my-auto ml-auto' style={{ cursor: 'pointer' }}>
                                                            <Edit size={22} color={"red"} />
                                                        </div>
                                                    </Link>
                                                </div>

                                            </div>
                                            {operator ?
                                                <div className='bg-white row border border-danger ml-5 mr-5 p-2 mt-2 text-left'>
                                                    <Text className="font-weight-bold fs-14 my-auto p-2 col-4">Operator: </Text>
                                                    <div className='d-flex justify-content-between col-lg-8 col-md-12'>
                                                        <div className='d-flex justify-content-between'>
                                                            <img src={operator.LogoUrl} alt="" className='rounded-circle' style={{ height: "35px", width: "35px" }} />
                                                            <span className='ml-2 p-0 my-auto'>{operator.Name}</span>
                                                        </div>
                                                        <div className='my-auto' onClick={() => { setOperator(null); setShowNumber(false); setshowprice(false) }} style={{ cursor: 'pointer' }}>
                                                            <Edit size={22} color={"red"} />
                                                        </div>
                                                    </div>
                                                </div> : null}
                                            {showNumber ?
                                                <div className='bg-white row border border-danger ml-5 mr-5 p-2 mt-2 text-left'>
                                                    <Text className="font-weight-bold fs-14 my-auto col-4">Number: </Text>
                                                    <div className="d-flex justify-content-between col-lg-8 col-md-12">
                                                        <div className="d-flex justify-content-start ">
                                                            <div className="rounded-circle border border-danger p-2">
                                                                <Phone size={22} color={"red"} />
                                                            </div>
                                                            <div className='my-auto'>
                                                                <span className='ml-2 p-0 my-auto'>+{params.prefix} | <span className='number-prefix'>{number}</span></span>
                                                            </div>
                                                        </div>
                                                        <div className='my-auto extra-button-two' onClick={() => { setShowNumber(false); setshowprice(false) }} style={{ cursor: 'pointer' }}>
                                                            <Edit size={22} color={"red"} />
                                                        </div>
                                                    </div>
                                                </div> : null}
                                            {price && showprice ?
                                                <div>
                                                    <div className='bg-white row border border-danger ml-5 mr-5 p-2 mt-2 text-left'>
                                                        <Text className="font-weight-bold fs-14 my-auto col-4">Received Value: </Text>
                                                        <div className="d-flex justify-content-between col-lg-8 col-md-12">
                                                            <div className="d-flex justify-content-between">
                                                                <div className='my-auto'>
                                                                    <span className='p-0 my-auto'>{price.ReceiveValue} USD</span>
                                                                </div>
                                                            </div>
                                                            <div className='my-auto' onClick={() => setshowprice(false)} style={{ cursor: 'pointer' }}>
                                                                <Edit size={22} color={"red"} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='bg-white row border border-danger ml-5 mr-5 p-2 mt-2 text-left'>
                                                        <Text className="font-weight-bold fs-14 my-auto col-4">Received Value: </Text>
                                                        <div className="d-flex justify-content-between col-lg-8 col-md-12">
                                                            <div className="d-flex justify-content-between">
                                                                <div className='my-auto'>
                                                                    <span className='p-0 my-auto'>{price.ReceiveValue} {price.ReceiveCurrencyIso}</span>
                                                                </div>
                                                            </div>
                                                            <div className='my-auto' onClick={() => setshowprice(false)} style={{ cursor: 'pointer' }}>
                                                                <Edit size={22} color={"red"} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                : null}
                                        </div>
                                    </div>
                                    <div className='bg-white resetpass border border-danger pb-3 mt-5'>
                                        {!operator ?
                                            <div className='text-center pt-2'>
                                                <Text className="fs-16 font-weight-bolder text-gray">Select Operator</Text>
                                                <div className='bg-white country-sec-two border border-danger ml-5 mr-5 p-3'>
                                                    <div className='row'>
                                                        {data && data.map((item, index) => {
                                                            return (
                                                                <div className='col-3 col-sm-4 col-xs-6 my-auto p-0 pb-2 pl-1 pr-1' style={{ cursor: "pointer" }} onClick={() => setOperator(item)} key={index}>
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
                                                <div className='bg-white ml-5'>
                                                    <div className='row '>
                                                        {errors.phone_no && errors.phone_no.message ?
                                                            <Text className="text-danger fs-13 mb-1">{errors.phone_no && errors.phone_no.message}</Text> :
                                                            null
                                                        }
                                                        <form className="input-group mb-1" onSubmit={handleSubmit(handleGetNumber)}>

                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text bg-danger m-0" id="basic-addon1"><span className={`flag-icon bg-white p-1 pl-2 rounded-circle flag-icon-${params.code.toLowerCase()}`}></span></span>
                                                            </div>
                                                            <span className="prefix my-auto">+{params.prefix}</span>
                                                            <input type="text" className={errors.phone_no ? "form-control shadow-none error extra-input pl-5 border border-danger" : "form-control shadow-none extra-input pl-5 border border-danger"}
                                                                placeholder='Enter Phone number'
                                                                {...register("phone_no", {
                                                                    required: "Phone number is required",
                                                                })}
                                                            />
                                                            <DangerButton className="btn-block extra-btn">Next</DangerButton>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            : null}
                                        {showNumber && !showprice ?
                                            <div className='text-center pt-2'>
                                                <Text className="fs-16 font-weight-bolder text-gray">Select Amount</Text>
                                                {operator && !operator.products[0].PromotionDescPromotionType? <Text className="fs-16 font-weight-normal text-gray">No Promotional Message Available</Text> : null}
                                                {!showMessage ? 
                                                <Text className="fs-16 font-weight-normal text-gray" ><span style={{cursor:'pointer'}} onClick={() => setShowMessage(true)}>{operator && operator.products ? operator.products[0].PromotionDescPromotionType : null}</span></Text>:
                                                    <Text className="fs-16 font-weight-normal text-gray " ><span className='text-align-justify' style={{ cursor: 'pointer' }} onClick={() => setShowMessage(false)}>{operator && operator.products ? operator.products[0].PromotionDescTermAndCondition : null}</span></Text>}
                                                <div className='bg-white ml-5 mr-5 p-3'>

                                                    <div className='mt-3'>
                                                        <div className='row'>
                                                            {pricesdata && pricesdata.length > 0 && pricesdata.map((item2, index) => {
                                                                return (
                                                                    <Container.Column className="col-lg-4 col-md-4 pt-2" key={index}>
                                                                        <div className='border border-danger price-rounded' style={{ cursor: "pointer" }} onClick={() => { setPrice(item2); setshowprice(true); gotoTop(); }}>
                                                                            <div className='pt-2'>
                                                                                <span className="mb-0"> Charges: {item2.SendValueWithOutServiceFees} USD</span>
                                                                            </div>
                                                                            <hr />
                                                                            <div className='mb-2'>
                                                                                <span>Receive: {item2.ReceiveValue} {item2.ReceiveCurrencyIso}</span>
                                                                            </div>

                                                                        </div>
                                                                    </Container.Column>
                                                                )
                                                            })}
                                                        </div>

                                                    </div>

                                                    <button className='btn btn-danger mt-3 btn-block rounded-pill' onClick={() => { setPage(page + 3); fetchData(page) }}>Next</button>
                                                </div>
                                            </div>
                                            : null}
                                        {showprice ? <div className='text-center pt-2'>
                                            <Text className="fs-16 font-weight-bolder text-gray mt-2 mb-0">Payment Method</Text>
                                            <div className='bg-white'>
                                                <div className="mx-auto d-flex justify-content-around">
                                                    <div className='col-6'>
                                                        <button className='btn btn-danger btn-block d-flex justify-content-center shadow-none' onClick={() => handlePaymentGateway("card")}>
                                                            <div className='bg-white rounded-circle p-1 pl-2 pr-2 my-auto' style={{ color: 'red' }} ><FontAwesomeIcon icon={faCreditCard} /></div>
                                                            <Text className="fs-14 my-auto pl-2 extra-take-button">Pay with Card</Text>
                                                        </button>
                                                    </div>
                                                    <div className='col-6'>
                                                        <button className='btn btn-outline-danger btn-block d-flex justify-content-center shadow-none' onClick={() => handlePaymentGateway("paypal")}>
                                                            <div className='bg-white rounded-circle p-1 pl-2 pr-2 my-auto' style={{ color: 'red' }} ><FontAwesomeIcon icon={faPaypal} /></div>
                                                            <Text className="fs-14 my-auto pl-2 extra-take-button">Pay with PayPal</Text>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> : null}
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