import styled from "styled-components";

export const StyledRegisterForm = styled.form`
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 10px;
`;

export const StyledLabel = styled.label`
    display: block;
    margin-bottom: 20px;
    margin-right: 20px;
    font-size: 16px;
    color: green;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const StyledInput = styled.input`
    display: block;
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid green;
    border-radius: 5px;
    font-size: 16px;

    &:focus {
        outline: none;
        border-color: #00FF7F;
    }
`;

export const StyledRegisterButton = styled.button`
    display: block;
    width: 100%;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: green;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #3CB371;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;