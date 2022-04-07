export {useEventDispatcher} from '../kernel/utils/useEventDispatcher';

export {dispatchEventToParentWindow} from '../kernel/utils/channelFunctions/dispatchEventToParentWindow';
export {dispatchEventToDevConsole} from '../kernel/utils/channelFunctions/dispatchEventToDevConsole';
export {pushEventToGTMDataLayer} from '../kernel/utils/channelFunctions/pushEventToGTMDataLayer';
export {EVENT_TYPES} from '../kernel/utils/eventsConfig';
export {sendEventForEachChannelOfTypeActive} from '../kernel/utils/sendEventForEachChannelOfTypeActive';

//EXPORT UTILS
export {
    getNumberOfWeek,
    getNumberOfPeriodInDate,
    getCurrentWeekMonday,
    getYearMonthAndDay,
    getMonthYearString,
    getMonthAbbrName,
    getDayAbbrName,
    getPeriodAbbrName,
    addMonthsToDate,
    getYearsSinceAutoRegistration,
} from './dateHelpers';

export {
    isObject,
    mergeDeep,
} from './object';

export {
    getIconName,
} from './icons';

//EXPORT MAPPERS
export {FormatDateMapper} from './mappers/FormatDateMapper';
export {NotificationsMapper} from './mappers/NotificationsMapper';

//EXPORT VALIDATIONS
export {
    DNI_REGEX,
    NIE_REGEX,
    CUPS_REGEX,
    SPANISH_LICENSE_PLATE_REGEX,
    spainIdType,
    validDNI,
    validNIE,
    validateDNIorNIE,
    validatePhoneWithPrefix,
} from './validations';

export {assetPackIds} from "../assets/assetPacksDefs/config";
export {
    capitalizeEachWord,
    formatAmountForDisplay,
    formatMoney,
    formatMoneyNum,
    formatNumber,
    formatPercent,
    formatSnakecaseToSpaces,
    formatDeleteSpacesInStringAndUpperCase,
    parseStringAmountWithUnitToNumber,
    normalizeText
} from "./formatters";


// const a = EVENT_TYPES()
