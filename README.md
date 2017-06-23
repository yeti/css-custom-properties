# CSS Custom Properties

This module provides utilities to work with CSS custom properties in Javascript.

## Getting Started

### Installation

Install the package with the following command

```bash
npm install --save css-custom-properties
```

### Usage

Example:

```js
// Import using ES5 syntax
var CssCustomProperties = require('css-custom-properties');

// Import using ES6 syntax
import CssCustomProperties from 'css-custom-properties';

// Set a CSS variable
CssCustomProperties.set({
  'my-var': '16px',
  'my-other-var': 0.5,
});

// Get a CSS variable's value
console.log(CssCustomProperties.get('my-var'));
// => '16px'

// Get all CSS variables
console.log(CssCustomProperties.getAll());
// => {'my-var': '16px', 'my-other-var': 0.5}

// Check if a CSS variable has been set
console.log(CssCustomProperties.has('my-var'));
// => true

// Remove a CSS variable
console.log(CssCustomProperties.unset('my-var'));
// => '16px'

// Check if a CSS variable has been set
console.log(CssCustomProperties.has('my-var'));
// => false
```

## Documentation

The package exposes the following methods.

#### CssCustomProperties.set(collection, [element])

This method sets CSS variables on a DOM element.

**Arguments**

* **collection** _(Object)_: The collection of CSS variable-value pairs.
* **[element]** _(DOM Element)_: (Optional) The DOM element to apply the css variable to. Defaults to the global `:root` element.

**Returns**

* _(Object)_ returns `collection`.

**Example**

```js
var variables = CssCustomProperties.set({
  'my-var': '16px',
  'my-other-var': 0.5,
  '--my-prefixed-var': 'red',
});

console.log(variables);
// => {'my-var': '16px', 'my-other-var': 0.5, 'my-prefixed-var': 'red'}
```

#### CssCustomProperties.get(variable, [element])

This method gets a CSS variable's value on a DOM element.

**Arguments**

* **variable** _(String)_: The CSS variable name.
* **[element]** _(DOM Element)_: (Optional) The DOM element to get the css variable from. Defaults to the global `:root` element.

**Returns**

* _(*)_: returns matched `variable`'s value, else `undefined`.

**Example**

```js
var myVar = CssCustomProperties.get('my-var');

console.log(myVar);
// => '16px'

var myNonExistantVar = CssCustomProperties.get('my-non-existant-var');

console.log(myNonExistantVar);
// => undefined
```

#### CssCustomProperties.getAll([element])

This method gets all CSS variables on a DOM element.

**Arguments**

* **[element]** _(DOM Element)_: (Optional) The DOM element to get the css variables from. Defaults to the global `:root` element.

**Returns**

* _(Object)_: returns collection of CSS variable-value pairs.

**Example**

```js
CssCustomProperties.set({
  'my-var': '16px',
  'my-other-var': 0.5,
});
CssCustomProperties.set({
  'another-one': 0,
});

var allVars = CssCustomProperties.getAll();
console.log(allVars);
// => {'my-var': '16px', 'my-other-var': 0.5, 'another-one': 0}
```

#### CssCustomProperties.getAllPrefixed([element])

This method gets all CSS variables on a DOM element. Like `getAll()` but with prefixed variable names.

**Arguments**

* **[element]** _(DOM Element)_: (Optional) The DOM element to get the css variables from. Defaults to the global `:root` element.

**Returns**

* _(Object)_: returns collection of prefixed CSS variable-value pairs.

**Example**

```js
CssCustomProperties.set({
  'my-var': '16px',
  'my-other-var': 0.5,
});
CssCustomProperties.set({
  'another-one': 0,
});

var allVars = CssCustomProperties.getAll();
console.log(allVars);
// => {'--my-var': '16px', '--my-other-var': 0.5, '--another-one': 0}
```

#### CssCustomProperties.has(variable, [element])

This method checks if a CSS variable exists on a DOM element.

**Arguments**

* **variable** _(String)_: The CSS variable name.
* **[element]** _(DOM Element)_: (Optional) The DOM element to get the css variable from. Defaults to the global `:root` element.

**Returns**

* _(boolean)_: returns `true` if CSS variable exists on `element`, else `false`.

**Example**

```js
var myVarExists = CssCustomProperties.has('my-var');
console.log(myVarExists);
// => true

var myNonExistantVarExists = CssCustomProperties.get('my-non-existant-var');
console.log(myNonExistantVarExists);
// => false
```

#### CssCustomProperties.unset(variable, [element])

This method removes a CSS variable from a DOM element.

**Arguments**

* **variable** _(String)_: The CSS variable name.
* **[element]** _(DOM Element)_: (Optional) The DOM element to remove the css variable from. Defaults to the global `:root` element.

**Returns**

* _(*)_: returns the value of the removed variable.

**Example**

```js
var variables = CssCustomProperties.set({
  'my-var': '16px',
  'my-other-var': 0.5,
});

var removedVar = CssCustomProperties.unset('my-other-var');
// => 0.5

var allVars = CssCustomProperties.getAll();
console.log(allVars);
// => {'my-var': '16px'}
```


#### CssCustomProperties.unsetAll(variable, [element])

This method removes all CSS variable from a DOM element.

**Arguments**

* **[element]** _(DOM Element)_: (Optional) The DOM element to remove the css variable from. Defaults to the global `:root` element.

**Returns**

* _(*)_: returns the collection of removed variables.

**Example**

```js
var variables = CssCustomProperties.set({
  'my-var': '16px',
  'my-other-var': 0.5,
});

var removedVars = CssCustomProperties.unsetAll();
// => {'my-var': '16px', 'my-other-var': 0.5}

var allVars = CssCustomProperties.getAll();
console.log(allVars);
// => {}
```
