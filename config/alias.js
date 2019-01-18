const path = require('path');

const resolve = target => path.resolve(__dirname, target);

module.exports = {
  alias: {
    Compo: resolve('../src/components'),
    Utils: resolve('../src/utils')
  }
};
