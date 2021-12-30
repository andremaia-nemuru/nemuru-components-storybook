export const dispatchEventToParentWindow = ({ name, type, payload, createdAt }) => {
  window.parent.postMessage({ name, type, payload, createdAt }, "*"); // TODO check if '*' is necessary
};
