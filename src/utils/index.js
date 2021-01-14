import config from '../config';

export function getIconName(str) {
    return config.ICONS[str] || '';
}

export function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}

export function formatSnakecaseToSpaces(text) {
    return text.replace(/_/g, " ");
}

export function mergeDeep(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                mergeDeep(target[key], source[key]);
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }

    return mergeDeep(target, ...sources);
}
