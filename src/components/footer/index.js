import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faCreditCard, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Text } from "../text/Text"

// images
import FooterImage from '../../assets/footerimage.png'
import Store from '../../assets/store.svg'
import Group from '../../assets/group.svg'

// styles
import './style.scss'



export const Footer = (props) => {
    return (
        <div>
            <div className="container border border-danger rounded footer-section__first">
                <div className="text-center mt-5 pt-5">
                    <Text className="footer-text__first">How to send mobile top up in three easy steps</Text>
                </div>
                <div className='mt-5'>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 footer-section__first-inside my-auto">
                            <ul className="footer-list__style">
                                <li className='p-2'>
                                    <Text className="fs-14 mt-2"> <span className='p-3 mr-2 shadow rounded-circle bg-white'><FontAwesomeIcon icon={faSearch} className='fs-22' color='red' /></span> Select Country</Text>
                                </li>
                                <li className='p-2'>
                                    <Text className="fs-14 mt-2"> <span className='p-3 mr-2 shadow rounded-circle bg-white'><FontAwesomeIcon icon={faUser} className='fs-22' color='red' /></span> Recharge Detail</Text>
                                </li>
                                <li className='p-2'>
                                    <Text className="fs-14 mt-2"> <span className='p-3 mr-2 shadow rounded-circle bg-white'><FontAwesomeIcon icon={faCreditCard} className='fs-22' color='red' /></span> Select Payments</Text>
                                </li>
                                <li className='p-2'>
                                    <Text className="fs-14 mt-2"> <span className='p-3 mr-2 shadow rounded-circle bg-white'><FontAwesomeIcon icon={faPaperPlane} className='fs-22' color='red' /></span>Sent Top Up</Text>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className='text-center'>
                                <img src={FooterImage} className='img-fluid footer-image__size ' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5 border border-danger rounded mt-2 mb-2 p-3'>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className='text-center'>
                                <Text className="fs-20 my-auto">Subscribe to get the latest offer and news</Text>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="input-group ml-4">
                                <input type="text" className="form-control col-8 shadow-none rounded-pill input-extra-design mx-auto" placeholder="Email here" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                <div className="input-group-prepend bg-danger button-extra-style extra-rounded">
                                    <div className="button-extra-style__inside text-white border-0 shadow-none pt-1" type="button" id="button-addon1">Send</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className='border border-danger p-3'>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <div className="nav-link fs-18">About Us</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link fs-18">Help</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link fs-18">How to Sent top up</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link fs-18">News</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link fs-18">Services</div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <div className="footer-image">
                                <img src={Store} className='img-fluid' alt="" width={160} height={50} />
                                <img src={Group} className='img-fluid' alt="" width={160} height={50} />
                            </div>
                        </form>
                    </div>
                </nav>
            </footer>
        </div>
    )
}
