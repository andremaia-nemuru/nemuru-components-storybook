import { createTheme } from '@material-ui/core/styles';
import { mergeDeep } from '../../utils';
import { mainDefaultReusableValues } from './mainDefaultReusableValues';
import { constructBaseTheme } from './constructBaseTheme';

const setThemeWithCustomizableValues = (newCustomizableValues) => {
    const targetThemeValues = mergeDeep(
        mainDefaultReusableValues,
        newCustomizableValues
    );
    const baseThemeConstruction = constructBaseTheme(targetThemeValues);

    return mergeDeep(baseThemeConstruction, targetThemeValues);
};

const createCustomTheme = (newCustomizableValues) => {
    return createTheme(setThemeWithCustomizableValues(newCustomizableValues));
};

export default createCustomTheme;
