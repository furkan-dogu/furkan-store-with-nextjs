import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { toastErrorNotify } from "@/helpers/ToastNotify";
import { fetchFail, fetchStart, getProductsSuccess } from "@/redux/features/productSlice";

const useProductCalls = () => {
    const { axiosPublic } = useAxios();
    const dispatch = useDispatch();

    const getProducts = async (search) => {
        dispatch(fetchStart());
        try {
            const { data } = await axiosPublic(`/products?limit=100&search=${search}`);
            dispatch(getProductsSuccess(data))
        } catch (error) {
            dispatch(fetchFail());
            toastErrorNotify("Product data could not be accessed")
            console.log(error);
        }
    }

    return { getProducts }
}

export default useProductCalls