import { isLoggedin } from '../../utils/Authentication';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { DangerButton } from '../button/index';
import { NavLink, useHistory } from 'react-router-dom'
import './style.scss'


export const Navbar = () => {
    // checking logged in or not
    const loggedin = isLoggedin()
    const history = useHistory()

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
                <div className="navbar-brand">
                    <FontAwesomeIcon icon={faHome} className='text-danger' size="lg" />
                </div>

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
                        <DangerButton className="nav-item rounded-pill ml-3" style={style.button}>
                            <div className="nav-link pl-4 pr-4 text-white"><span className='text-white'>Contact Us</span> </div>
                        </DangerButton>
                    </ul>
                </div>
            </div>

        </nav>
    )
}