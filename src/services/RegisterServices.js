import axios from 'axios'
import Services from './Services'

class RegisterServices extends Services {
    setNextPageLog() {
        return axios.get(this.API_URL + "logRegView/2")
    }

    setPrevPageLog() {
        return axios.get(this.API_URL + "logRegView/1")
    }

    getCountryInfo() {
        return axios.get(this.API_URL + "getCurrInfo")
    }

    checkSubDomain(_value) {
        return axios.get(this.API_URL + "getSubdomainInfo/" + _value)
    }

    getDiscount(_value) {
        return axios.get(this.API_URL + "getDiscount/" + _value)
    }

    uploadLogo(_payload) {
        return axios.post(this.API_URL + "uploadLogo", _payload)
    }

    uploadDocument(_payload) {
        return axios.post(this.API_URL + "uploadDoc", _payload)
    }

    saveRegistration(_payload) {
        return axios.post(this.API_URL + "saveRegistration", _payload)
    }
}

export default RegisterServices