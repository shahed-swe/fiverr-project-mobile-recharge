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

const Home = () => {

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
                                <div className="input-group mb-3 d-flex justify-content-center extra-design">
                                    <div className="input-group-prepend ">
                                        <span className="input-group-text bg-danger border border-danger rounded-pill input-group-extra pl-3 pr-3" id="basic-addon1" style={{color: "white"}}><FontAwesomeIcon icon={faGlobeAsia}/></span>
                                    </div>
                                    <input type="text" className="form-control shadow-none col-5 border border-danger rounded-pill pl-5" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
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