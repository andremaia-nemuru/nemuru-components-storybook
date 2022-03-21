export { useEventDispatcher } from './utils/events/useEventDispatcher';
export { ContextEventCatcher } from './components/kernel/ContextEventCatcher';
export { requestApi } from './utils/request';
export { dispatchMiddleware } from './utils/contexts/dispatchMiddleWare';
export { enrichContextState } from './utils/contexts/enrichContextState';
export { requestAndDispatch } from './utils/contexts/requestAndDispatch';

export { dispatchEventToParentWindow } from './utils/events/channelFunctions/dispatchEventToParentWindow';
export { dispatchEventToDevConsole } from './utils/events/channelFunctions/dispatchEventToDevConsole';
export { pushEventToGTMDataLayer } from './utils/events/channelFunctions/pushEventToGTMDataLayer';
export { EVENT_TYPES } from './utils/events/config';
export { sendEventForEachChannelOfTypeActive } from './utils/events/sendEventForEachChannelOfTypeActive';

export InputRange from './components/InputRange';
export RichTextfield from './components/RichTextfield';
export InputRangeMobile from './components/InputRangeMobile';
export TableMui from './components/TableMui';
export FetchingDataGrid from './components/DataGrid/FetchingDataGrid';
export Header from './components/Header';
export Themer from './components/kernel/Themer';
export CircularProgressWithLabel from './components/CircularProgressWithLabel';
export BarChart from './components/BarChart';
export ConditionalWrapper from './components/ConditionalWrapper';
export IconWithCircle from './components/IconWithCircle';
export InputDate from './components/InputDate';
export ResponsiveDialog from './components/ResponsiveDialog';
export NemuruSnackbar from './components/NemuruSnackbar';
export TextValue from './components/TextValue';
export BackButton from './components/BackButton';
export AccentIcon from './components/AccentIcon';
export ResponsiveButton from './components/ResponsiveButton';
export PasswordTextfield from './components/PasswordTextfield';
export Pricing from './components/Pricing';
export SingleLinearStatBar from './components/SingleLinearStatBar';
export InformationMessage from './components/InformationMessage';
export ThemedAsset from './components/ThemedAsset';
export TripleStateToggler from './components/TripleStateToggler';
export { assetPackIds } from './assets/assetPacksDefs/config';
export { assetIds } from './assets/assetPacksDefs/config';
import { RalewayFont } from './assets/style/index.js';
import { NemuruIconFont } from './assets/style/index.js';

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
} from './utils/dateHelpers';

export {
    getIconName,
    isObject,
    formatDeleteSpacesInStringAndUpperCase,
    formatSnakecaseToSpaces,
    normalizeText,
    formatNumber,
    formatMoney,
    formatMoneyNum,
    formatPercent,
    parseStringAmountWithUnitToNumber,
    mergeDeep,
    formatAmountForDisplay,
    capitalizeEachWord,
} from './utils';

//EXPORT MAPPERS
export { FormatDateMapper } from './utils/mappers/FormatDateMapper';
export { NotificationsMapper } from './utils/mappers/NotificationsMapper';

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
} from './utils/validations';

// const a = EVENT_TYPES()
