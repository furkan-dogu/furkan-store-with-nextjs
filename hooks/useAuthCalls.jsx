import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, loginSuccess, logoutSuccess } from "@/redux/features/authSlice";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "@/helpers/ToastNotify";
import { useRouter } from "next/navigation";

const useAuthCalls = () => {
    const dispatch = useDispatch();
    const { axiosPublic, axiosWithToken } = useAxios();
    const router = useRouter();

    const login = async (userInfo) => {
        dispatch(fetchStart());
        try {
            const { data } = await axiosPublic.post("/auth/login/", userInfo);
            dispatch(loginSuccess(data));
            toastSuccessNotify("The login process is successful.")
            router.push("/dashboard")
        } catch (error) {
            dispatch(fetchFail());
            toastErrorNotify("Click on email and password")
            console.log(error);
        }
    };

    const logout = async () => {
        dispatch(fetchStart());
        try {
            await axiosWithToken.get("/auth/logout");
            dispatch(logoutSuccess());
            toastSuccessNotify("The logout process is successful.")
        } catch (error) {
            dispatch(fetchFail());
            toastErrorNotify("The logout process failed.")
            console.log(error);
        }
    };

    return { login, logout };
}

export default useAuthCalls;