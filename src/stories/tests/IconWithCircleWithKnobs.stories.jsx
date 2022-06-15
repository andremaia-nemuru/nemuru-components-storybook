import React from 'react';
import IconWithCircle from '../../components/IconWithCircle';
import { select, withKnobs, number } from '@storybook/addon-knobs';
import { useTheme } from '@material-ui/styles';

export default {
    title: 'Nemuru-components/IconWithCircleWithKnobs',
    component: IconWithCircleWithKnobs,
    argTypes: {},
    decorators: [withKnobs],
};

// export const Template = () => {
const Template = () => {
    const { palette } = useTheme();

    const iconsNames = [
        'chevron_right',
        'home',
        'web',
        'play_arrow',
        'cancel',
        'done',
        'hourglass_empty',
    ];
    const CircleColors = {
        primary: {
            background: palette.primary.main,
            text: palette.primary.contrastText,
        },
        secondary: {
            background: palette.secondary.main,
            text: palette.secondary.contrastText,
        },
        dark: {
            background: palette.dark.main,
            text: palette.dark.contrastText,
        },
    };

    const icon = select('Icon', iconsNames, iconsNames[0], 'Props');
    const color = select(
        'Theme Color',
        CircleColors,
        CircleColors.primary,
        'Props'
    );
    const backgroundSize = number(
        'Circle Size',
        46,
        { range: true, min: 16, max: 90, step: 2 },
        'Props'
    );
    const iconSize = number(
        'Icon Size',
        16,
        { range: true, min: 8, max: 60, step: 6 },
        'Props'
    );

    const args = {
        height: backgroundSize,
        width: backgroundSize,
        backgroundColor: color.background,
        className: 'material-icons',
        style: { color: color.text, fontSize: iconSize },
    };

    return <IconWithCircle {...args}>{icon}</IconWithCircle>;
};
