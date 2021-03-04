import axios, {AxiosInstance} from "axios";

const api: AxiosInstance = axios.create({
    method: 'get',
    baseURL: 'https://call-of-duty-modern-warfare.p.rapidapi.com',
    headers: {
        'x-rapidapi-key': '3dd6b4c6ccmsh8d1856302824736p164f5fjsnb7a3b8627086',
        'x-rapidapi-host': 'call-of-duty-modern-warfare.p.rapidapi.com'
    }
})

export default api