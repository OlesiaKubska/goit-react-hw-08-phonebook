import { useDispatch } from 'react-redux';
import { logout } from 'redux/authOperations';
import { useAuth } from 'hooks';
import { UserMenuContainer, WelcomeMessage, LogoutButton } from './UserMenu.styled';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <UserMenuContainer>
            <WelcomeMessage>Welcome, {user.name}</WelcomeMessage>
            <LogoutButton type="button" onClick={() => dispatch(logout())}>
                Logout
            </LogoutButton>
        </UserMenuContainer>
    );
};