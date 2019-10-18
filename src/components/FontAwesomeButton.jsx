import { Component, createElement } from "react";
import { Platform, Text, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";

import { flattenStyles } from "../utils/common";
import { styles } from "../ui/styles";

const defaultButtonStyle = {
    container: styles.container,
    button: styles.button,
    icon: styles.icon,
    label: styles.label
};

export class FontAwesomeButton extends Component {
    styles = flattenStyles(defaultButtonStyle, this.props.style);

    render() {
        const isAndroid = Platform.OS === "android";

        return (
            <View style={this.styles.container}>
                {isAndroid ? (
                    <TouchableNativeFeedback style={this.styles.button} onPress={this.props.onClickAction}>
                        <Text style={this.styles.label}>{this.props.caption}</Text>
                    </TouchableNativeFeedback>
                ) : (
                    <TouchableOpacity style={this.styles.button} onPress={this.props.onClickAction}>
                        <Text style={this.styles.label}>{this.props.caption}</Text>
                    </TouchableOpacity>
                )}
            </View>
        );
    }
}
