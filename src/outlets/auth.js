import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

export const AuthOutlet = () => {
    const user = useSelector((state) => state.user.data)
    return user ? <Navigate to="/" /> : <Outlet />;
}