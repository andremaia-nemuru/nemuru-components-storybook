import React from 'react';
import TripleStateToggler from '../components/TripleStateToggler';
import './main.css';

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
    return <TripleStateToggler {...args} />;
};
export const TripleStateTogglerButton = Template.bind({});
TripleStateTogglerButton.args = {
    name: 'TripleStateToggler',
    disabled: false,
    handleChange: () => {},
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Nemuru-components/TripleStateToggler',
    component: Template,
    argTypes: {},
};
