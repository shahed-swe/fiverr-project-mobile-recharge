import { isLoggedin } from '../../utils/Authentication';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DangerButton } from '../button/index';
import './style.scss'

export const Navbar = () => {

    const loggedin = isLoggedin()
    console.log(loggedin)


    const style = {
        button: {
            margin: 0,
            padding: 0,
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light p-3">
            <div className='container d-flex'>
                <div className="navbar-brand">Navbar</div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active ml-3">
                            <div className="nav-link">Mobile Top Up<span className="sr-only">(current)</span></div>
                        </li>
                        {!loggedin?
                            <>
                                <li className="nav-item ml-3">
                                    <div className="nav-link">Login<span className="sr-only">(current)</span></div>
                                </li>
                                <li className="nav-item ml-3">
                                    <div className="nav-link">Registration<span className="sr-only">(current)</span></div>
                                </li>
                            </>
                            : null}
                        <DangerButton className="nav-item rounded-pill ml-3" style={style.button}>
                            <div className="nav-link pl-4 pr-4 text-white">Contact Us <span className="sr-only">(current)</span></div>
                        </DangerButton>
                    </ul>
                </div>
            </div>

        </nav>
    )
}