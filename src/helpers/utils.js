import i18n from "../i18n";

// From: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
export const create_UUID = () => {
  let dt = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (dt + Math.random()*16)%16 | 0;
    dt = Math.floor(dt/16);
    return (c === 'x' ? r :(r&0x3|0x8)).toString(16);
  });
  return uuid;
};

export const translate = (id) => (
  i18n.t(id)
);
