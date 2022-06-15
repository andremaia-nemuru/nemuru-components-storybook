import { Typography, useTheme } from '@material-ui/core';
import React from 'react';
import CircularProgressWithLabel from '../components/CircularProgressWithLabel';
import './main.css';

export default {
    title: 'Nemuru-components/CircularProgressWithLabel',
    component: Template,
    argTypes: {
        size: { control: { type: 'range', min: 40, max: 72, step: 2 } },
        subCircleStyleType: {
            control: 'select',
            options: ['primary', 'secondary', 'warning', 'danger'],
        },
        value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    },
};

const Template = (args) => {
    const { palette } = useTheme();
    const { subCircleStyleType, value } = args;
    args.subCircleStyle = { color: palette[subCircleStyleType].main };
    args.label = (
        <Typography variant="caption" component="div">
            <strong style={{ lineHeight: '0px' }}>
                {`${Math.round(value)}%`}
            </strong>
        </Typography>
    );

    return <CircularProgressWithLabel {...args}></CircularProgressWithLabel>;
};
export const CircularProgressWithLabelStory = Template.bind({});
CircularProgressWithLabelStory.args = {
    size: 42,
    value: 50,
    subCircleStyleType: 'warning',
};
