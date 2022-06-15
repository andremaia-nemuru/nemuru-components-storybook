import React from 'react';
import ThemeKnob from '../src/stories/themes/ThemeKnob';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = [
    (Story) => (
        <ThemeKnob>
            <Story />
        </ThemeKnob>
    ),
];
