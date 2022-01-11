import { useState } from 'react'
import { isLoggedin } from '../../utils/Authentication';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { DangerButton, GrayButton } from '../button/index';
import { NavLink, useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { User, Menu } from 'react-feather'
import { Drawer } from '../drawer';
import './style.scss'
import { Text } from '../text/Text'

export const Navbar = () => {
    // checking logged in or not
    const loggedin = isLoggedin()
    const history = useHistory()
    const [show, setShow] = useState(false)

    const style = {
        button: {
            margin: 0,
            padding: 0,
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        history.push('/login')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light p-3">
            <div className='container d-flex'>
                <Link to={"/"}>
                    <div className="navbar-brand">
                        <FontAwesomeIcon icon={faHome} className='text-danger' size="lg" />
                    </div>
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <NavLink activeClassName='active' className="nav-item ml-3" to="/">
                            <div className="nav-link">Mobile Top Up</div>
                        </NavLink>
                        {loggedin ?
                            <li className="nav-item ml-3" onClick={handleLogout} >
                                <div className="nav-link">Logout</div>
                            </li> : null}
                        {!loggedin ?
                            <>
                                <NavLink activeClassName='active' className="nav-item ml-3" to="/register">
                                    <div className="nav-link">Registration</div>
                                </NavLink>
                                <NavLink activeClassName='active' className="nav-item ml-3" to="/login">
                                    <div className="nav-link">Login</div>
                                </NavLink>
                            </>
                            : null}
                        <Link to={'/contactus'}>
                            <DangerButton className="nav-item rounded-pill ml-3" style={style.button}>
                                <div className="nav-link pl-4 pr-4 text-white"><span className='text-white'>Contact Us</span> </div>
                            </DangerButton>
                        </Link>
                        {loggedin ?
                            <Link className="nav-item ml-3 mt-1" to="/">
                                <User size={28} color='black' />
                            </Link>
                            : null}
                    </ul>
                </div>
                {/* Menu button */}
                <div className="elements-container d-xl-none d-lg-none  ms-auto">
                    <GrayButton className="btn-circle" onClick={() => setShow(!show)}>
                        <Menu className="text-dark" size={20} />
                    </GrayButton>
                </div>
            </div>
            {/* Mobile drawer */}
            <Drawer
                show={show}
                width={280}
                placement="start"
                setShow={setShow}
                onHide={() => setShow(false)}
            >
                <div className="drawer-container">
                    <Link to="/" className="btn shadow-none w-100 text-start border-bottom rounded-0 py-10">
                        <div className="d-flex">
                            <div>
                                <Text className="text-dark fw-bold fs-13 mb-0">Mobile Recharge</Text>
                            </div>
                        </div>
                    </Link>
                    {!loggedin ?
                        <div>
                            <Link to="/login" className="btn shadow-none w-100 text-start border-bottom rounded-0 py-10">
                                <div className="d-flex">
                                    <div>
                                        <Text className="text-dark fw-bold fs-13 mb-0">Login</Text>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/register" className="btn shadow-none w-100 text-start border-bottom rounded-0 py-10">
                                <div className="d-flex">
                                    <div>
                                        <Text className="text-dark fw-bold fs-13 mb-0">Register</Text>
                                    </div>
                                </div>
                            </Link> </div> : null}
                    {loggedin ?
                        <div className="btn shadow-none w-100 text-start border-bottom rounded-0 py-10" onClick={handleLogout} >
                            <div className="d-flex">
                                <div>
                                    <Text className="text-dark fw-bold fs-13 mb-0">Logout</Text>
                                </div>
                            </div>
                        </div> : null}
                    <Link to={'/contactus'}>
                        <DangerButton className="nav-item mt-2" style={style.button}>
                            <div className="nav-link pl-4 pr-4 text-white"><span className='text-white'>Contact Us</span> </div>
                        </DangerButton>
                    </Link>
                </div>
            </Drawer>
        </nav>
    )
}