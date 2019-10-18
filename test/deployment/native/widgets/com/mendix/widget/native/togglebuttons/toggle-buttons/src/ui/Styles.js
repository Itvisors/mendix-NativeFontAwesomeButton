import { Platform } from 'react-native';

const blue = "rgb(0, 122, 255)";
const purple = "rgb(98, 0, 238)";
const defaultToggleButtonsStyle = {
    container: {
        borderRadius: Platform.select({ ios: 5, android: 3 })
    },
    containerDisabled: {
        opacity: 0.5
    },
    button: {
        borderRadius: 0,
        borderColor: Platform.select({ ios: blue, android: "#CCC" })
    },
    text: Platform.select({
        ios: {
            color: blue
        },
        android: {
            color: "#666",
            paddingVertical: 3,
            fontWeight: "600"
        }
    }),
    activeButton: Platform.select({
        ios: {
            borderColor: blue,
            backgroundColor: blue
        },
        android: {
            borderColor: purple,
            backgroundColor: purple
        }
    }),
    activeButtonText: {
        color: "#fff"
    },
    validationMessage: {
        color: "#ed1c24"
    }
};

export { defaultToggleButtonsStyle };
