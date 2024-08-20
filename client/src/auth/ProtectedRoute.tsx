import Loading from "@/components/Loading";
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const ProtectedRoute = () => {
    const { isAuthenticated, isLoading } = useAuth0();
    const location = useLocation();

    if (isLoading) {
        return <div className='flex items-center justify-center h-screen'>
            <Loading />
        </div>
    }

    return isAuthenticated ? (
        <Outlet />
    ) : (
        <Navigate
            to="/sign-in"
            replace
            state={{ from: location }} // Store the original location so you can redirect back to it after login.
        />
    );
}

export default ProtectedRoute;
