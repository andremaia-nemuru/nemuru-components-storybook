import React from 'react';
import RichTextfield from '../components/RichTextfield';
import './main.css';

export default {
    title: 'Nemuru-components/RichTextfield',
    component: Template,
    argTypes: {},
};

const Template = (args) => {
    return <RichTextfield {...args} />;
};
export const RichTextFieldPrimary = Template.bind({});
RichTextFieldPrimary.args = {
    isMobile: false,
    hideIcon: false,
    value: undefined,
    unitName: '€',
    allowDecimals: false,
    maxLenght: 6,
    action: () => {
        console.log('You are typing in a RichTextField');
    },
};
