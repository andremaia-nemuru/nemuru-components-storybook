import React from 'react';
import Pricing from '../components/Pricing';
import './main.css';
import {
    PricingsDataFreeProgram,
    PricingsDataZeroProgram,
} from './data/PricingsData';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Nemuru-components/Pricing',
    component: Template,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Pricing {...args} />;
export const FreeProgram = Template.bind({});
FreeProgram.args = {
    pricingData: PricingsDataFreeProgram[0],
};
export const ZeroProgram = Template.bind({});
ZeroProgram.args = {
    pricingData: PricingsDataZeroProgram[0],
};
