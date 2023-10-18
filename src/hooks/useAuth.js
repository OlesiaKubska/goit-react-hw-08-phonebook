import { useSelector } from 'react-redux';
import { selectUser, selectIsLogin, selectIsAuthenticated } from 'redux/selectors';

export const useAuth = () => {
    const isLogin = useSelector(selectIsLogin);
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const user = useSelector(selectUser);

    return {
        isLogin,
        isAuthenticated,
        user,
    };
};