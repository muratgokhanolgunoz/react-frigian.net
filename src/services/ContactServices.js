import axios from 'axios'
import Services from './Services'

class ContactServices extends Services {
    sendMessage(_formData) {
        return axios.post(this.API_URL + "sendContactEmail", _formData)
    }
}

export default ContactServices