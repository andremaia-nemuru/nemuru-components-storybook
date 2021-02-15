import config from "../config";

export function getIconName(str) {
  return config.ICONS[str] || "";
}

export function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}

export function formatSnakecaseToSpaces(text) {
  return text.replace(/_/g, " ");
}

export function formatNumber(num) {
  return new Intl.NumberFormat("es-ES", {
    maximumSignificantDigits: 3,
  }).format(num);
}

export function formatPercent(num) {
  return new Intl.NumberFormat("es-ES", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);
}

export function formatMoney(num, forcedDec) {
  const numIsInteger = num % 1 === 0;
  const defaultDec = numIsInteger ? 0 : 2;
  const dec = forcedDec === undefined ? defaultDec : forcedDec;
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: dec,
    maximumFractionDigits: dec,
  }).format(num);
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
