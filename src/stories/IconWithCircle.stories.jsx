import React from 'react';
import IconWithCircle from '../components/IconWithCircle';
import { useTheme } from '@material-ui/styles';

export default {
    title: 'Nemuru-components/IconWithCircle',
    component: Template,
    argTypes: {
        icon: {
            control: 'select',
            options: [
                'chevron_right',
                'home',
                'web',
                'play_arrow',
                'cancel',
                'done',
                'hourglass_empty',
            ],
        },
        ThemeColor: {
            control: 'select',
            options: ['primary', 'secondary', 'dark', 'light'],
        },
        className: {
            control: 'select',
            options: ['material-icons', 'material-icons-outlined'],
        },
        iconSize: {
            control: { type: 'range', min: 8, max: 60, step: 6 },
        },
        backgroundSize: {
            control: { type: 'range', min: 16, max: 90, step: 2 },
        },
    },
};

const Template = (args) => {
    const { palette } = useTheme();
    const { ThemeColor, iconSize, icon, backgroundSize } = args;
    args.backgroundColor = palette[ThemeColor].main;
    (args.height = backgroundSize),
        (args.width = backgroundSize),
        (args.style = {
            fontSize: iconSize,
            color: palette[ThemeColor].contrastText,
        });
    return <IconWithCircle {...args}>{icon}</IconWithCircle>;
};
export const IconWithCircleControlled = Template.bind({});
IconWithCircleControlled.args = {
    icon: 'chevron_right',
    ThemeColor: 'primary',
    backgroundSize: 40,
    className: 'material-icons',
    iconSize: 26,
};
