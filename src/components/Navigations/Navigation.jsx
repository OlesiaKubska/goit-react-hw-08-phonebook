import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';

export const Navigation = () => {
    const { isLogin } = useAuth();

    return (
        <nav>
            <NavLink to="/">
                Home
            </NavLink>
            {isLogin && (
                <NavLink to="/contacts">
                    Contacts
                </NavLink>
            )}
        </nav>
    );
};