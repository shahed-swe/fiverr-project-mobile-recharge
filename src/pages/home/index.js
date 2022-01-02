// react components
import { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
// created components
import { Container } from '../../components/container'
import { Navbar } from '../../components/navbar/index'
import { Footer } from '../../components/footer/index'
import { Text } from '../../components/text/Text'
// styles
import './style.scss'
// images
import FrontImage from '../../assets/first-section-back.jpg'
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons'
import { SingleSelect } from '../../components/select/index'

// backend request
import { Requests } from '../../utils/Http/index'
import { Toastify } from '../../components/toastify/Toastify'


const Home = () => {
    // states
    const history = useHistory()
    const [data, setData] = useState([])
    const [country, setCountry] = useState(null)


    // fetching country list
    const fetchCountryList = useCallback(async () => {
        const response = await Requests.CountryApi.CountryList()
        if (response.data && response.status === 200) {
            const data = response.data.map(item => {
                return { label: <div className='d-flex justify-content-start'><span className={`flag-icon rounded-circle flag-icon-${item.CountryIso.toLowerCase()}`}></span><span className='pl-2'>{`+ ${item.InternationalDialingInformations[0].Prefix}  ${item.CountryIso}`}</span></div>, value: item.CountryIso, name: item.CountryName, prefix: item.InternationalDialingInformations[0].Prefix };
            });
            setData(data)
        }
    }, [])

    // for  fetching contry list on load
    useEffect(() => {
        fetchCountryList()
    }, [fetchCountryList])

    // handle Selected country
    const  handleSelect = () => {
        if(country){
            history.push(`/recharge/${country.value}/${country.name}/${country.prefix}`)
        }else{
            Toastify.Error("Please Select a country")
        }
    }

    return (
        <div>
            <Navbar />
            <div className='home-section'>
                <img src={FrontImage} className='img-fluid' alt="" />
                <Container.Basic className='home-section__inside'>
                    <Container.Row>
                        <Container.Column>
                            <div className='text-center'>
                                <Text className="fs-28 font-weight-bold text-white">INTERNATIONAL MOBILE RECHARGE</Text>
                                <Text className="fs-14 text-white position-relative left">Where to sent the Top-Up</Text>
                            </div>
                            <div className='search-seaction d-flex justify-content-center'>
                                <button className="input-group-text bg-danger border border-danger input-group-extra" style={{ color: "white" }}><FontAwesomeIcon icon={faGlobeAsia} /></button>
                                <div className='w-50'>
                                    <SingleSelect
                                        options={data}
                                        placeholder={'a country'}
                                        value={event => setCountry(event)}
                                    />
                                </div>
                                <button className="input-group-text bg-danger border border-danger input-group-extra-secondary pl-3 pr-3 p-2" style={{ color: "white" }} onClick={handleSelect}>Go</button>
                            </div>
                            <div className='text-center mt-2'>
                                <Text className="fs-14 text-white position-relative left font-weight-bold">Reliable Mobile Top-up with lowest rates</Text>
                            </div>
                        </Container.Column>
                    </Container.Row>
                </Container.Basic>
            </div>
            <Footer />
        </div>
    )
}

export default Home;