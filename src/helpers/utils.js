import i18n from "../i18n";

// From: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
export const create_UUID = () => {
  let dt = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = ((dt + Math.random() * 16) % 16) | 0;
    dt = Math.floor(dt/16);
    return (c === 'x' ? r : ((r & 0x3) | 0x8)).toString(16);
  });
  return uuid;
};

export const translate = (id) => (
  i18n.t(id)
);

export const generateRandomNumber = (min = 1, max = Number.MAX_SAFE_INTEGER) => (
  Math.floor(Math.random() * max) + min
);

export const isEmpty = (object = {}) => object && Object.keys(object).length === 0 && object.constructor === Object;

export const mapToValueLabel = (src = []) => src.map(x => ({ value: x.id, label: x.name }));
