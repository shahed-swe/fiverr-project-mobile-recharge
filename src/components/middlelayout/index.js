import Background from '../../assets/background.png'
import './styles.scss'

export const MiddleLayout = (props) => {
    return (
        <div className='layout'>
            <img src={Background} alt="" className='img-fluid'/>
            <div className='layout-inner'>
                {props.children}
            </div>
        </div>
    )
}