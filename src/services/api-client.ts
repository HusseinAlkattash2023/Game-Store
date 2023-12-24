import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'afe0b399857e4091b9ce833c0bbcc7c4'
    }
})