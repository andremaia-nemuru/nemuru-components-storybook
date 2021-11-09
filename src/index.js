export RichTextfield from './modules/RichTextfield';
export InputRange from './modules/InputRange';
export InputRangeMobile from './modules/InputRangeMobile';
export TableMui from './modules/TableMui';
export Header from './modules/Header';
export Themer from './modules/Themer';
export CircularProgressWithLabel from './modules/CircularProgressWithLabel';
export BarChart from './modules/BarChart';
export ConditionalWrapper from './modules/ConditionalWrapper';
export IconWithCircle from './modules/IconWithCircle';
export InputDate from './modules/InputDate';
export ResponsiveDialog from './modules/ResponsiveDialog';
export NemuruSnackbar from './modules/NemuruSnackbar';
export TextValue from './modules/TextValue';
export BackButton from './modules/BackButton';
export AccentIcon from './modules/AccentIcon';
export ResponsiveButton from './modules/ResponsiveButton';
export PasswordTextfield from './modules/PasswordTextfield';
export Pricing from './modules/Pricing';
export SingleLinearStatBar from './modules/SingleLinearStatBar';
export InformationMessage from './modules/InformationMessage';
export ThemedAsset from './modules/ThemedAsset';
export TripleStateToggler from './modules/TripleStateToggler';
export { assetPackIds } from './assets/assetPacksDefs/config';
export { assetIds } from './assets/assetPacksDefs/config';
import { RalewayFont } from './assets/style/index.js';
import { NemuruIconFont } from './assets/style/index.js';
import TripleStateToggler from './modules/TripleStateToggler';

//EXPORT UTILS
export { devConsoleLog } from './utils/devConsoleLog';

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
export { RegistryMapper } from './utils/mappers/RegistryMapper';
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
