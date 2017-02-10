# webpack-angular-externals
[![Build Status](https://travis-ci.org/mattlewis92/webpack-angular-externals.svg?branch=master)](https://travis-ci.org/mattlewis92/webpack-angular-externals)
[![codecov](https://codecov.io/gh/mattlewis92/webpack-angular-externals/branch/master/graph/badge.svg)](https://codecov.io/gh/mattlewis92/webpack-angular-externals)
> A tiny utility to prevent webpack bundling @angular dependencies in your library code

## Installation

```bash
npm install webpack-angular-externals --save-dev
```

## Usage
```js
// webpack.config.js
const webpackAngularExternals = require('webpack-angular-externals');

module.exports = {
  // rest of config here
  externals: [
    webpackAngularExternals(),
    {
      'another-external-lib': {
        root: ['anotherExternalLib'],
        commonjs: 'another-external-lib',
        commonjs2: 'another-external-lib',
        amd: 'another-external-lib'
      }
    }
  ]
};
```

## License
MIT