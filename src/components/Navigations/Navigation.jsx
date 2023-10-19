import { useAuth } from 'hooks';
import { Nav, StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
    const { isLogin } = useAuth();

    return (
        <Nav>
            <StyledNavLink to="/">
                Home
            </StyledNavLink>
            {isLogin && (
                <StyledNavLink to="/contacts">
                    Contacts
                </StyledNavLink>
            )}
        </Nav>
    );
};