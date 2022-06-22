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
export const PrimaryContainedSmall = Template.bind({});
PrimaryContainedSmall.args = {
    variant: 'contained',
    color: 'primary',
    size: 'small',
    className: '',
    text: 'Responsive Button',
    iconName: 'chevron_right',
    isMobile: false,
    disabled: false,
};
export const PrimaryOutlinedSmall = Template.bind({});
PrimaryOutlinedSmall.args = {
    variant: 'outlined',
    color: 'primary',
    size: 'small',
    className: '',
    text: 'Responsive Button',
    iconName: 'chevron_right',
    isMobile: false,
    disabled: false,
};
export const PrimaryTextSmall = Template.bind({});
PrimaryTextSmall.args = {
    variant: 'text',
    color: 'primary',
    size: 'small',
    className: '',
    text: 'Responsive Button',
    iconName: 'chevron_right',
    isMobile: false,
    disabled: false,
};

export const SecondaryContainedSmall = Template.bind({});
SecondaryContainedSmall.args = {
    variant: 'contained',
    color: 'secondary',
    size: 'small',
    className: '',
    text: 'Responsive Button',
    iconName: 'chevron_right',
    isMobile: false,
    disabled: false,
};
export const SecondaryOutlinedSmall = Template.bind({});
SecondaryOutlinedSmall.args = {
    variant: 'outlined',
    color: 'secondary',
    size: 'small',
    className: '',
    text: 'Responsive Button',
    iconName: 'chevron_right',
    isMobile: false,
    disabled: false,
};
export const SecondaryTextSmall = Template.bind({});
SecondaryTextSmall.args = {
    variant: 'text',
    color: 'secondary',
    size: 'small',
    className: '',
    text: 'Responsive Button',
    iconName: 'chevron_right',
    isMobile: false,
    disabled: false,
};
export const PrimaryContainedMedium = Template.bind({});
PrimaryContainedMedium.args = {
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    className: '',
    text: 'Responsive Button',
    iconName: 'chevron_right',
    isMobile: false,
    disabled: false,
};
export const PrimaryOutlinedMedium = Template.bind({});
PrimaryOutlinedMedium.args = {
    variant: 'outlined',
    color: 'primary',
    size: 'medium',
    className: '',
    text: 'Responsive Button',
    iconName: 'chevron_right',
    isMobile: false,
    disabled: false,
};
export const PrimaryTextMedium = Template.bind({});
PrimaryTextMedium.args = {
    variant: 'text',
    color: 'primary',
    size: 'medium',
    className: '',
    text: 'Responsive Button',
    iconName: 'chevron_right',
    isMobile: false,
    disabled: false,
};

export const SecondaryContainedMedium = Template.bind({});
SecondaryContainedMedium.args = {
    variant: 'contained',
    color: 'secondary',
    size: 'medium',
    className: '',
    text: 'Responsive Button',
    iconName: 'chevron_right',
    isMobile: false,
    disabled: false,
};
export const SecondaryOutlinedMedium = Template.bind({});
SecondaryOutlinedMedium.args = {
    variant: 'outlined',
    color: 'secondary',
    size: 'medium',
    className: '',
    text: 'Responsive Button',
    iconName: 'chevron_right',
    isMobile: false,
    disabled: false,
};
export const SecondaryTextMedium = Template.bind({});
SecondaryTextMedium.args = {
    variant: 'text',
    color: 'secondary',
    size: 'medium',
    className: '',
    text: 'Responsive Button',
    iconName: 'chevron_right',
    isMobile: false,
    disabled: false,
};

export const PrimaryContainedSmallDisabled = Template.bind({});
PrimaryContainedSmallDisabled.args = {
    variant: 'contained',
    color: 'primary',
    size: 'small',
    className: '',
    text: 'Disabled',
    iconName: 'chevron_right',
    isMobile: false,
    disabled: true,
};
export const PrimaryOutlinedSmallDisabled = Template.bind({});
PrimaryOutlinedSmallDisabled.args = {
    variant: 'outlined',
    color: 'primary',
    size: 'small',
    className: '',
    text: 'Disabled',
    iconName: 'chevron_right',
    isMobile: false,
    disabled: true,
};
export const PrimaryTextSmallDisabled = Template.bind({});
PrimaryTextSmallDisabled.args = {
    variant: 'text',
    color: 'primary',
    size: 'small',
    className: '',
    text: 'Disabled',
    iconName: 'chevron_right',
    isMobile: false,
    disabled: true,
};
