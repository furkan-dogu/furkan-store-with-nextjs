import axios from 'axios'
import { useSelector} from "react-redux"

const useAxios = () => {
    const { token } = useSelector(state => state.auth)

    const axiosPublic = axios.create({
        baseURL: "https://product-api-2.vercel.app"
    })

    const axiosWithToken = axios.create({
        baseURL: "https://product-api-2.vercel.app",
        headers: {Authorization : `Token ${token}`}
    })

    return  {axiosPublic, axiosWithToken }
}

export default useAxios