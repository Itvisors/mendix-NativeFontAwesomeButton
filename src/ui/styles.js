import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        // Ripplecolor and all ViewStyle properties are allowed
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#0595DB",
        backgroundColor: "#0595DB",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: Platform.select({ android: 15, ios: 20 })
    },
    buttonView: {
        flexDirection: "row"
    },
    icon: {
        fontSize: 12,
        color: "#FFFFFF"
    },
    label: {
        textAlign: "center",
        fontSize: 14,
        color: "#FFFFFF"
    }
});
