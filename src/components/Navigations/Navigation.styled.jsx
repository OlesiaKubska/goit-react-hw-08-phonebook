import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: green;
    font-size: 20px;

    &.active {
        color: #006400;
        font-weight: bold;
    }
`;

export const AuthContainer = styled.div`
    display: flex;
    gap: 20px;
`;

export const AuthNavLink = styled(NavLink)`
    text-decoration: none;
    color: green;
    font-size: 20px;

    &.active {
        color: #006400;
        font-weight: bold;
    }
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-bottom: 20px;
    background-color: #f0f0f0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;