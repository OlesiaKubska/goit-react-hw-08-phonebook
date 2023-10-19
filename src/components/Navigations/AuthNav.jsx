import { AuthContainer, AuthNavLink } from './Navigation.styled';

export const AuthNav = () => {
    return (
        <AuthContainer>
            <AuthNavLink to="/register">
                Register
            </AuthNavLink>
            <AuthNavLink to="/login">
                Log In
            </AuthNavLink>
        </AuthContainer>
    );
};