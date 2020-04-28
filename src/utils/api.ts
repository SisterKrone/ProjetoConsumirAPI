import axios from 'axios'

const api = axios.create({
    baseURL:'http://example-ecommerce.herokuapp.com'
})

export default api;