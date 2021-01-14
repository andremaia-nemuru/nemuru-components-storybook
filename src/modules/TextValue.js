import React, { useContext } from "react";
import { formatSnakecaseToSpaces } from "../utils";
import { Typography } from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";

export default function TextValue(props) {
  const {
    tId,
    lowerCased,
    upperCased,
    dynamicDataTexts,
    capitalized,
    trueResult,
    typography,
    strong,
    small,
    translation,
  } = props;
  const { palette: themePalette } = useTheme();
  if (!translation && trueResult) {
    return null;
  }
  let result = translation || tId;
  if (upperCased) result = formatSnakecaseToSpaces(result).toUpperCase();
  if (lowerCased || (!translation && tId))
    result = formatSnakecaseToSpaces(result).toLowerCase();
  if (capitalized || (!translation && tId))
    result = result.charAt(0).toUpperCase() + result.slice(1);

  if (dynamicDataTexts) {
    const dynamicDataTextsArray = Array.isArray(dynamicDataTexts)
      ? dynamicDataTexts
      : [dynamicDataTexts];
    for (let i = 0; i <= dynamicDataTextsArray.length - 1; i += 1) {
      result = result.replace(`$v${i + 1}`, dynamicDataTextsArray[i]);
    }
  }
  if (strong) result = <strong>{result}</strong>;
  if (small) result = <small>{result}</small>;
  let typoOptions = typography;
  let style = {};
  if (typoOptions) {
    if (typoOptions.color === "title") {
      // "title" is not a valid value for Typography's prop "color", so we need to pass it as style object
      delete typoOptions.color;
      style = {
        ...style,
        color: themePalette.text.title,
      };
    }
    result = (
      <Typography {...typoOptions} style={style}>
        {result}
      </Typography>
    );
  }
  return result;
}

export function useTranslation(tId, forceTranslation) {
  const {
    state: { dictionaryValues },
  } = useContext(ConfigContext);
  const translation = dictionaryValues[tId];
  if (!translation && forceTranslation) {
    return null;
  }
  let result = translation || tId;
  if (!translation) result = formatSnakecaseToSpaces(result).toLowerCase();
  if (!translation) result = result.charAt(0).toUpperCase() + result.slice(1);
  if (!translation) {
    devConsoleLog(
      `--- Translation param needed: */\n  ${tId}: '${result}️', \n/* --- in current language file`
    );
  }
}
