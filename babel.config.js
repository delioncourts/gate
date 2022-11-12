const presets = [
    ['@babel/preset-env', {
        targets: {
            firefox: '50',
            chrome: '64',
            safari: '11.1'
        },
        useBuiltIns: "entry"
    }]
];

module.exports = { presets };