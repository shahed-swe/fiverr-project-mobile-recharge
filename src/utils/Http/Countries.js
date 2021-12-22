import { Api } from "../Api";
import Axios from 'axios'


// for getting country list
const CountryList = async() => {
    const config = {
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
    }

    return await Axios.get(`${Api}/country/get`, config)
}


// for getting country information
const CountryWiseInformation = async(info) => {
    const config = {
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json',
        }
    }

    return await Axios.get(`${Api}/process/request/${info}`)
}


const CountryApi = {
    CountryList,
    CountryWiseInformation
}

export default CountryApi