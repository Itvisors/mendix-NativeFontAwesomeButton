import { Platform } from 'react-native';

const defaultProgressBarStyle = {
    container: {},
    bar: Object.assign({ height: 6 }, Platform.select({
        ios: {
            borderWidth: 1,
            borderRadius: 4,
            borderColor: "rgb(0,122,255)"
        },
        android: {
            borderRadius: 0,
            borderWidth: 0,
            backgroundColor: "rgba(98,0,238, 0.2)"
        }
    })),
    fill: {
        backgroundColor: Platform.select({ ios: "rgb(0,122,255)", android: "rgb(98,0,238)" })
    },
    validationMessage: {
        color: "#ed1c24"
    }
};

export { defaultProgressBarStyle };
