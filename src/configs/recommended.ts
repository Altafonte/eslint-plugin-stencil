export default {
  plugins: [
    "react"
  ],
  extends: [
    "plugin:@stencil/base",
  ],
  rules: {
    '@stencil/strict-boolean-conditions': 2,
    '@stencil/ban-exported-const-enums': 2,
    '@stencil/ban-side-effects': 2,
    '@stencil/own-methods-must-be-private': 1,
    '@stencil/own-props-must-be-private': 1,
    '@stencil/strict-mutable': 2,
    '@stencil/decorators-style': [
      'error', {
        prop: 'inline',
        state: 'inline',
        element: 'inline',
        event: 'inline',
        method: 'multiline',
        watch: 'multiline',
        listen: 'multiline'
      }
    ],
    '@stencil/dependency-suggestions': 1,
    '@stencil/required-jsdoc': 1,
    "react/jsx-no-bind": [1, {
      "ignoreRefs": true
    }]
  }
};
