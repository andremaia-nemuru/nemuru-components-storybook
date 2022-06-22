import React from 'react';
import { useTheme } from '@material-ui/styles';
import InputRange from '../components/InputRange';
import './main.css';
import Wrapper from './shared/Wrapper';

export default {
    title: 'Nemuru-components/InputRange',
    component: Template,
    argTypes: {
        ThemeColor: {
            control: 'select',
            options: ['primary', 'secondary', 'dark', 'light'],
        },
        minPrincipal: {
            control: { type: 'range', min: 500, max: 3000, step: 20 },
        },
        maxPrincipal: {
            control: { type: 'range', min: 30000, max: 60000, step: 100 },
        },
    },
};

const Template = (args) => {
    const [state, setState] = React.useState();
    const { palette } = useTheme();
    const { ThemeColor, minPrincipal, maxPrincipal, inputVariant } = args;
    args.color = palette[ThemeColor].main;
    args.min = minPrincipal;
    args.max = maxPrincipal;
    args.action = (name, value) => {
        setState(value);
    };
    args.value = state;
    args.variant = 'outlined';
    args.className = 'm-0';
    args.label = (
        <div className="mb-1">
            <h4 className={'mb-2 d-inline'}>Importe</h4>
        </div>
    );
    return (
        <Wrapper maxWidth={args.fullWidth ? '450px' : '0px'}>
            <InputRange {...args}></InputRange>
        </Wrapper>
    );
};
export const InputRangeStory = Template.bind({});
InputRangeStory.args = {
    fullWidth: true,
    allowDecimals: true,
    value: '5000',
    unitName: '€',
    name: 'principal',
    minPrincipal: 3000,
    maxPrincipal: 60000,
    maxLength: 8,
    principal: 5000,
    step: 5,
    ThemeColor: 'primary',
};
