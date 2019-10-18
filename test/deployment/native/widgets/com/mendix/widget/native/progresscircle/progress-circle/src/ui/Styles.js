import { Platform } from 'react-native';

const defaultProgressCircleStyle = {
    container: {},
    circle: {
        size: 100,
        borderWidth: 1,
        borderColor: Platform.select({ ios: "rgb(0, 122, 255)", android: "rgb(98,0,238)" })
    },
    fill: {
        width: 3,
        lineCapRounded: false,
        backgroundColor: Platform.select({ ios: "rgb(0, 122, 255)", android: "rgb(98,0,238)" })
    },
    text: {
        fontSize: 18,
        color: Platform.select({ ios: "rgb(0, 122, 255)", android: "rgb(98,0,238)" })
    },
    validationMessage: {
        color: "#ed1c24"
    }
};

export { defaultProgressCircleStyle };
