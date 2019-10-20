import { Component, createElement } from "react";
import { Platform, Text, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { flattenStyles } from "../utils/common";
import { library } from "@fortawesome/fontawesome-svg-core";
import { styles } from "../ui/styles";

const defaultButtonStyle = {
    container: styles.container,
    buttonView: styles.buttonView,
    iconWrapper: styles.iconWrapper,
    icon: styles.icon,
    label: styles.label
};

export class FontAwesomeButton extends Component {
    styles = flattenStyles(defaultButtonStyle, this.props.style);

    render() {
        library.add(far, fas);
        const isAndroid = Platform.OS === "android";
        var textElement = null;
        if (this.props.caption) {
            textElement = <Text style={this.styles.label}>{this.props.caption}</Text>;
        }
        // Use prefix when specified.
        var iconProperty = null;
        if (this.props.iconNamePrefix) {
            iconProperty = [this.props.iconNamePrefix, this.props.iconName];
        } else {
            iconProperty = this.props.iconName;
        }
        var buttonView = (
            <View style={this.styles.buttonView}>
                <View style={this.styles.iconWrapper}>
                    <FontAwesomeIcon icon={iconProperty} />
                </View>
                {textElement}
            </View>
        );
        return (
            <View style={this.styles.container}>
                {isAndroid ? (
                    <TouchableNativeFeedback style={this.styles.button} onPress={this.props.onClickAction}>
                        {buttonView}
                    </TouchableNativeFeedback>
                ) : (
                    <TouchableOpacity style={this.styles.button} onPress={this.props.onClickAction}>
                        {buttonView}
                    </TouchableOpacity>
                )}
            </View>
        );
    }
}
