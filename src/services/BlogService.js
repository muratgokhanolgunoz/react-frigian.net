import axios from 'axios'
import Services from './Services'

class BlogService extends Services {
    getBlogs(_language) {
        return axios.get(this.API_URL + "fnetBlog/" + _language)
    }

    getSelectedBlog(_language, _id) {
        return axios.get(this.API_URL + "fnetBlog/" + _language + "/" + _id)
    }

    addBlog(_language, _data) {
        return axios.post(this.API_URL + "fnetBlog/add/" + _language, _data)
    }

    deleteBlog(_language, _data) {
        return axios.post(this.API_URL + "fnetBlog/delete/" + _language, _data)
    }

    updateBlog(_language, _data) {
        return axios.post(this.API_URL + "fnetBlog/update/" + _language, _data)
    }
}
export default BlogService