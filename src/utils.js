export const forEach = (object, method) => {
  if (!object) {
    return;
  }

  for (let prop in object) {
    if (object.hasOwnProperty(prop)) {
      method(prop, object[prop]);
    }
  }
};

export const set = (object, property, value) => {
  if (!object) {
    return object;
  }

  object[property] = value;

  return object;
};

export const startsWith = (object, substring) => {
  if (!object || typeof object !== 'string') {
    return false;
  }

  return object.startsWith(substring);
};
