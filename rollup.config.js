const external = [
    /^mendix($|\/)/,
    /^react-native($|\/)/,
    /^big.js$/,
    /^react($|\/)/,
    /^react-native-gesture-handler($|\/)/,
    /^react-native-reanimated($|\/)/,
    /^react-native-svg($|\/)/,
    /^react-native-vector-icons($|\/)/,
    /^react-navigation($|\/)/,
    /^@fortawesome\/free-brands-svg-icons($|\/)/,
    /^@fortawesome\/pro-light-svg-icons($|\/)/,
    /^@fortawesome\/pro-regular-svg-icons($|\/)/,
    /^@fortawesome\/pro-solid-svg-icons($|\/)/
];

export default args =>
    args.configDefaultConfig.map(config => ({
        ...config,
        external
    }));
