import { useDispatch } from 'react-redux';
import { register } from 'redux/authOperations';
import { StyledRegisterForm, StyledRegisterButton, StyledLabel, StyledInput } from './RegisterForm.styled';

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <StyledRegisterForm onSubmit={handleSubmit} autoComplete="off">
            <StyledLabel>
                Username
                <StyledInput type="text" name="name" />
            </StyledLabel>
            <StyledLabel>
                Email
                <StyledInput type="email" name="email" />
            </StyledLabel>
            <StyledLabel>
                Password
                <StyledInput type="password" name="password" />
            </StyledLabel>
            <StyledRegisterButton type="submit">Register</StyledRegisterButton>
        </StyledRegisterForm>
    );
};