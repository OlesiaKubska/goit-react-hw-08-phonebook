import styled from "styled-components";

export const UserMenuContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const WelcomeMessage = styled.p`
    font-size: 18px;
    color: #333;
    margin: 0;
`;

export const LogoutButton = styled.button`
    padding: 8px 15px;
    background-color: #ff5c5c;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #e53e3e;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;