<h1 align="center">🗄 sep-prop</h1>
<div align="center">
  <strong>Get, set, or remove a property from a nested object using a separator of your choosing</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/sep-prop">
    <img src="https://img.shields.io/npm/v/sep-prop.svg?style=flat-square" alt="Package version" />
  </a>
  <a href="https://npmjs.org/package/sep-prop">
  <img src="https://img.shields.io/npm/dm/sep-prop.svg?style=flat-square" alt="Downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/sep-prop">
    <img src="https://img.shields.io/travis/tiaanduplessis/sep-prop.svg?style=flat-square" alt="Travis Build" />
  </a>
  <a href="https://github.com/RichardLitt/standard-readme)">
    <img src="https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square" alt="Standard Readme" />
  </a>
  <a href="https://badge.fury.io/gh/tiaanduplessis%2Fsep-prop">
    <img src="https://badge.fury.io/gh/tiaanduplessis%2Fsep-prop.svg?style=flat-square" alt="GitHub version" />
  </a>
  <a href="https://dependencyci.com/github/tiaanduplessis/sep-prop">
    <img src="https://dependencyci.com/github/tiaanduplessis/sep-prop/badge?style=flat-square" alt="Dependency CI" />
  </a>
  <a href="https://github.com/tiaanduplessis/sep-prop/blob/master/other/LICENSE">
    <img src="https://img.shields.io/npm/l/sep-prop.svg?style=flat-square" alt="License" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs" />
  </a>
  <a href="https://www.paypal.me/tiaanduplessis/1">
    <img src="https://img.shields.io/badge/$-support-green.svg?style=flat-square" alt="Donate" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/sep-prop/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/sep-prop.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/sep-prop/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/sep-prop.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20sep-prop!%20https://github.com/tiaanduplessis/sep-prop%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/sep-prop.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="tiaanduplessis.co.za">Tiaan</a> and <a href="https://github.com/tiaanduplessis/sep-prop/graphs/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
	<li><a href="#about">About</a></li>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#api">API</a></li>

  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## About

Based and inspired by [dot-prop](https://github.com/sindresorhus/dot-prop). Allows you to get, set, or remove a property from a nested object using a separator of your choosing. Support for escaping.

## Install

```sh
$ npm install --save sep-prop
```

Or

```sh
$ yarn add sep-prop
```

## Usage

```js

const prop = require('sep-prop')

const obj = {
  foo: {
    bar: {
      baz: 5
    },
    'oof/bax': {
      rab: 'zab'
    }
  }
}

console.log(prop.get(obj, 'foo/bar')) // {baz: 5}
console.log(prop.get(obj, 'foo$$bar', {sep: '$$'}))  // {baz: 5}
console.log(prop.get(obj, 'foo.bar', {sep: '.'}))
console.log(prop.get(obj, 'foo/oof$$/bax', {escape: '$$'})) // {rab: 'zab'}

console.log(prop.set(obj, 'foo/bar', 'Hi')) //{ foo: { bar: 'Hi', 'oof/bax': { rab: 'zab' } } }
console.log(prop.set(obj, 'foo/bar/baz', 5)) //{ foo: { bar: { baz: 5 }, 'oof/bax': { rab: 'zab' } } }

console.log(prop.remove(obj, 'foo/bar')) // true
console.log(obj) // { foo: { 'oof/bax': { rab: 'zab' } } }

```

## API

### get

Retrieve nested property from object.

**Parameters**

-   `obj` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)**
-   `path` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**
-   `opts` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)?= {}**

### set

Set a property on a object.

**Parameters**

-   `obj` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)**
-   `path` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**
-   `value` **Any**
-   `opts` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)?= {}**

### remove

Remove property from object.

**Parameters**

-   `obj` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)**
-   `path` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**
-   `opts` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)?= {}**

## Contribute

Contributions are welcome. Please open up an issue or create PR if you would like to help out.

Note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

Licensed under the MIT License.
