import './style.scss'
import { X } from 'react-feather'
import { GrayButton } from '../button/index'
import { useTranslation } from 'react-i18next'

// Help drawer
const Drawer = (props) => {
    return (
        <div className="help-drawer-container">
            <div className={props.show ? "backdrop open-backdrop" : "backdrop"}
                onClick={props.onHide}
            />

            {/* Drawer */}
            <div className={props.show ? "drawer open-drawer" : "drawer"}>
                <div className="drawer-header p-3">
                    <GrayButton
                        onClick={props.onHide}
                        style={{ borderRadius: "50%", padding: "8px 10px" }}
                    ><X size={18} /></GrayButton>
                </div>
                <div className="drawer-body">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export { Drawer }