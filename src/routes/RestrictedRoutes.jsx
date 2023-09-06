import { Navigate, Outlet } from "react-router-dom";
import { useLogin } from "../context/loginContext";

export default function RestrictedRoutes() {
    const { logged } = useLogin();

    return (
        logged ? <Navigate to="/dashboard"/> : <Outlet />
    )
}