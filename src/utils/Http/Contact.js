import { Api } from "../Api";
import Axios from 'axios'


// for getting country list
const ContactUs = async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    return await Axios.post(`${Api}/email/sendEmail`, config)
}

const Contact = {
    ContactUs
}

export default Contact