module.exports = {
    "presets": [
        "@babel/env",
        "@babel/preset-react",
        "@babel/preset-typescript"
       
    ],
    "plugins": [
        'babel-plugin-styled-components',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-runtime',
        '@babel/plugin-syntax-dynamic-import',
        'react-hot-loader/babel'
    ]
}