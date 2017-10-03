const pascalCase = require('pascal-case');
const { stringifyRequest } = require('loader-utils');

const stringifiedRegexp = /^'|".*'|"$/;

function stringify(content) {
  if (typeof content === 'string' && stringifiedRegexp.test(content)) {
    return content;
  }
  return JSON.stringify(content, null, 2);
}

function stringifySymbol(symbol) {
  return stringify({
    id: symbol.id,
    use: symbol.useId,
    viewBox: symbol.viewBox,
    content: symbol.render(),
  });
}


module.exports = function runtimeGenerator({ symbol, config, context }) {
  const { spriteModule, symbolModule, runtimeOptions } = config;
  // const compilerContext = loaderContext._compiler.context;

  const iconModulePath = runtimeOptions.iconModule;
  const iconModuleRequest = stringify(iconModulePath);

  const spriteRequest = stringifyRequest({ context }, spriteModule);
  const symbolRequest = stringifyRequest({ context }, symbolModule);
  const parentComponentDisplayName = 'SpriteSymbolComponent';
  const displayName = `${pascalCase(symbol.id)}${parentComponentDisplayName}`;

  return `
    import React from 'react';
    import SpriteSymbol from ${symbolRequest};
    import sprite from ${spriteRequest};
    import ${parentComponentDisplayName} from ${iconModuleRequest};
    
    const symbol = new SpriteSymbol(${stringifySymbol(symbol)});
    sprite.add(symbol);
    export default class ${displayName} extends React.Component {
      render() {
        return <${parentComponentDisplayName} glyph="${symbol.id}" {...this.props} />;
      }
    }
  `;
};
