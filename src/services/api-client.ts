import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '9f7662c095a3464b81a9a42ad08c49ae',
    }
})