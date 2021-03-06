import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        // Ripplecolor and all ViewStyle properties are allowed
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#0595DB",
        backgroundColor: "#0595DB",
        alignItems: "stretch",
        justifyContent: "center",
        borderRadius: 5
    },
    touchableContainer: {
        alignItems: "stretch",
        justifyContent: "center"
    },
    buttonView: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: Platform.select({ android: 15, ios: 20 })
    },
    iconWrapper: {
        marginRight: 10
    },
    icon: {
        fontSize: 14,
        color: "#FFFFFF"
    },
    label: {
        textAlign: "center",
        fontSize: 14,
        color: "#FFFFFF"
    }
});
