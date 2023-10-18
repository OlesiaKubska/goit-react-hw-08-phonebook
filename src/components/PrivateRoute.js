import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLogin, isAuthenticated } = useAuth();
    const shouldRedirect = !isLogin && !isAuthenticated;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};