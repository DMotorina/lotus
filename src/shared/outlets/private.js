import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateOutlet = () => {
    // Check that user has authenticeted and has access
    const user = useSelector((state) => state.user.data)
    return user ? <Outlet /> : <Navigate to="/login" />;
}