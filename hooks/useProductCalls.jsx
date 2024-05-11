import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { toastErrorNotify } from "@/helpers/ToastNotify";
import { fetchFail, fetchStart, getProductsSuccess, getCategoriesSuccess, getSingleProductSuccess } from "@/redux/features/productSlice";

const useProductCalls = () => {
    const { axiosWithToken } = useAxios();
    const dispatch = useDispatch();

    const getProducts = async (search) => {
        dispatch(fetchStart());
        try {
            const { data } = await axiosWithToken(`/products?limit=100&search=${search}`);
            dispatch(getProductsSuccess(data))
        } catch (error) {
            dispatch(fetchFail());
            toastErrorNotify("Products data could not be accessed")
            console.log(error);
        }
    }

    const getCategories = async () => {
        dispatch(fetchStart());
        try {
            const { data } = await axiosWithToken("/categories")
            dispatch(getCategoriesSuccess(data))
        } catch (error) {
            dispatch(fetchFail());
            toastErrorNotify("Categories data could not be accessed")
            console.log(error);
        }
    }

    const getSingleProduct = async (id) => {
        dispatch(fetchStart());
        try {
            const { data } = await axiosWithToken(`/products/${id}`);
            dispatch(getSingleProductSuccess(data))
        } catch (error) {
            dispatch(fetchFail());
            toastErrorNotify("Product data could not be accessed")
            console.log(error);
        }
    }

    return { getProducts, getCategories, getSingleProduct }
}

export default useProductCalls