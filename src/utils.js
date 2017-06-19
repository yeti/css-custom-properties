export const isString = (string) => string && typeof string === 'string';

export const isObject = object => object && typeof object === 'object';

export const forEach = (object, method) => {
  if (!isObject(object)) {
    return;
  }

  for (let prop in object) {
    if (object.hasOwnProperty(prop)) {
      method(prop, object[prop]);
    }
  }
};

export const set = (object, property, value) => {
  if (!isObject(object)) {
    return object;
  }

  object[property] = value;

  return object;
};

export const startsWith = (string, substring) => isString(string) && string.startsWith(substring);
