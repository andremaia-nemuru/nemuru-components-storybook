import {EVENT_TYPES} from "../config";

export const dispatchEventToDevConsole = ({ name, type, payload }) => {
  // if (developOptions?.SHOW_DEV_CONSOLE_LOG) { // TODO
  const logOrnamentsByEventType = {
    [EVENT_TYPES.action]: {
      text: "%cACTION",
      style: "color: #1A88A1",
    },
    [EVENT_TYPES.requestDispatch]: {
      text: "    ╭ %cop ▶️",
      style: "color: #36a3f7",
    },
    [EVENT_TYPES.requestFulfilled]: {
      text: "   ╰ %cop ✔️",
      style: "color: #4dd970",
    },
    [EVENT_TYPES.requestRejected]: {
      text: "    ╰ %cop ✖️",
      style: "color: #ef5957",
    },
    [EVENT_TYPES.error]: {
      text: "%cCRITICAL ERROR ✖️",
      style: "color: #ef5957",
    },
    [EVENT_TYPES.milestoneCompleted]: {
      text: "%c========== MILESTONE ==========",
      style: "color: #a5479a",
    },
    default: {
      text: `%c${type}`,
      style: "color: #bada55",
    },
  };
  const logTitle =
      logOrnamentsByEventType[type] || logOrnamentsByEventType.default;
  console.log(logTitle.text, logTitle.style, name, payload || "∅");
  // }
};
