import axios from 'axios'
import Services from './Services'

class HomeServices extends Services {
    userLog() {
        return axios.post(this.API_URL + "log")
    }

    sendCallRequest(_formData) {
        return axios.post(this.API_URL + "sendCallRequest", _formData)
    }
}

export default HomeServices