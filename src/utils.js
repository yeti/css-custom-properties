export const isArray = object => object && Array.isArray(object);

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

export const isNumber = (string) => !isNaN(string) && string !== 'Infinity';

export const formatResult = (string) => isNumber(string) ? parseFloat(string, 10) : string;

export const unprefixString = (string, prefix) => string.startsWith(prefix) ? string.slice(prefix.length) : string;

export const prefixString = (string, prefix) => string.startsWith(prefix) ? string : `${prefix}${string}`;
