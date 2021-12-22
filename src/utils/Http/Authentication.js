import { Api } from "../Api";
import Axios from "axios";

// for signup
const SignUp = async(data) => {
    const config = {
        headers:{
            "Accept": "application/json",
            "Content-Type":"application/json"
        }
    }
    return await Axios.post(`${Api}/user/signup`, data, config)
}

// for resending verification email
const ResendVerificationEmail = async(data) => {
    const config = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }
    return await Axios.post(`${Api}/user/resend/verification`, data, config)
}

// for verifying email
const VerifyEmail = async(data) => {
    const config = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }
    return await Axios.get(`${Api}/user/resend/verification/${data.userid}/${data.token}`, config)
}


// for login
const Login = async(data) => {
    const config = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }
    return await Axios.post(`${Api}/user/login`, data, config)
}

// for forgetting password
const ForgotPassword = async(data) => {
    const config = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }
    return await Axios.post(`${Api}/user/password-reset`, data, config)
}

// for password reset
const ResetPassword = async (data, userid, token) => {
    const config = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }
    return await Axios.post(`${Api}/user/password-reset/${userid}/${token}`, data, config)
}


// for email subscription
const EmailSubscription = async(data) => {
    const config = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }

    return await Axios.post(`${Api}/user/subscribe`, data, config)
}


// contact us
const ContactUs = async (data) => {
    const config = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }

    return await Axios.post(`${Api}/email/sendEmail`, data, config)
}


const Authentication = {
    SignUp,
    ResendVerificationEmail,
    VerifyEmail,
    Login,
    ForgotPassword,
    ResetPassword,
    EmailSubscription,
    ContactUs
}

export default Authentication