import React, { useState } from 'react';
import './main.css';
import PasswordTextfield from '../components/PasswordTextfield';
import Wrapper from './shared/Wrapper';

export default {
    title: 'Nemuru-components/PasswordTextfield',
    component: Template,
    argTypes: {
        showPasswordStrengthMeter: {
            control: 'boolean',
        },
    },
};

const Template = (args) => {
    const [showPasswordOnClick, setShowPasswordOnClick] = useState(false);
    const [passwordStrengthLevelState, setPasswordStrengthLevel] =
        React.useState(0);
    const recalculatePasswordStrengthLevelState = (e) => {
        e.preventDefault();
        const password = e.target.value;
        if (password.length < MIN_PASSWORD_LENGTH) {
            setPasswordStrengthLevel(0);
            return;
        }
        let strengthLevel = 0;
        if (/\d/.test(password)) {
            strengthLevel += 1;
        }
        if (/[a-z]/.test(password)) {
            strengthLevel += 1;
        }
        if (/[A-Z]/.test(password)) {
            strengthLevel += 1;
        }
        if (/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
            strengthLevel += 1;
        }
        setPasswordStrengthLevel(strengthLevel);
    };

    args.passwordStrengthLevel = passwordStrengthLevelState;
    args.handleClickShowPassword = () => {
        setShowPasswordOnClick(!showPasswordOnClick);
    };
    args.onChange = (e) => recalculatePasswordStrengthLevelState(e);
    args.showPassword = showPasswordOnClick;
    args.className = 'mb-3';

    return (
        <Wrapper maxWidth={args.fullWidth ? '550px' : '270px'}>
            <PasswordTextfield {...args}></PasswordTextfield>
        </Wrapper>
    );
};
export const PasswordTextfieldStory = Template.bind({});
PasswordTextfieldStory.args = {
    fullWidth: true,
    iconColor: 'inherit',
    showPasswordStrengthMeter: true,
    onChange: () => {},
    label: 'Introduzca contraseña',
};

const MIN_PASSWORD_LENGTH = 6;
