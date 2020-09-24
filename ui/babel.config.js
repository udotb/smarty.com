module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
    ],
  plugins: [
    '@babel/plugin-proposal-class-properties', // added to support private class properties
  ]
};
