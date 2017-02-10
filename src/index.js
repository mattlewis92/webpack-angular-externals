const camelCase = require('lodash.camelcase');

function angularExternalsFactory() {
  return function (context, request, callback) {
    if (request.startsWith('@angular/')) {
      return callback(null, {
        root: ['ng', camelCase(request.replace(/^@angular\//, ''))],
        commonjs: request,
        commonjs2: request,
        amd: request
      });
    }
    callback();
  };
}

module.exports = angularExternalsFactory;
module.exports.default = angularExternalsFactory;
