import React from 'react';
import ResponsiveButton from '../components/ResponsiveButton';
import './main.css';

export default {
    title: 'Nemuru-components/ResponsiveButton',
    component: Template,
    argTypes: {
        color: {
            control: 'select',
            options: ['primary', 'secondary'],
        },
        variant: {
            control: 'select',
            options: ['outlined', 'contained', 'text'],
        },
        size: {
            control: 'radio',
            options: ['small', 'medium', 'large'],
        },
    },
};

const Template = (args) => {
    args.onClick = () => {
        console.log('You clicked the responsive button');
    };
    return <ResponsiveButton {...args}></ResponsiveButton>;
};
export const ResponsiveButtonStory = Template.bind({});
ResponsiveButtonStory.args = {
    variant: 'outlined',
    color: 'primary',
    size: 'small',
    className: '',
    text: 'Responsive Button',
    iconName: 'chevron_right',
    isMobile: false,
};
