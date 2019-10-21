import { Component, createElement } from "react";
import { Platform, Text, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { flattenStyles } from "../utils/common";
import { styles } from "../ui/styles";

const defaultButtonStyle = {
    container: styles.container,
    touchableContainer: styles.touchableContainer,
    buttonView: styles.buttonView,
    iconWrapper: styles.iconWrapper,
    icon: styles.icon,
    label: styles.label
};

export class FontAwesomeButton extends Component {
    styles = flattenStyles(defaultButtonStyle, this.props.style);

    render() {
        const isAndroid = Platform.OS === "android";
        // Use prefix when specified.
        var iconProperty = null;
        if (this.props.iconNamePrefix) {
            iconProperty = [this.props.iconNamePrefix, this.props.iconName];
        } else {
            iconProperty = this.props.iconName;
        }
        // FontAwesome does not allow setting the icon size using styles. So take size from the icon style.
        // Default style has fontSize, but Mendix classes use size
        var iconSize = this.styles.icon.fontSize ? this.styles.icon.fontSize : this.styles.icon.size;
        var fontAwesomeIcon = <FontAwesomeIcon icon={iconProperty} style={this.styles.icon} size={iconSize} />;
        var buttonView;
        if (this.props.caption) {
            buttonView = (
                <View style={this.styles.buttonView}>
                    <View style={this.styles.iconWrapper}>{fontAwesomeIcon}</View>
                    <Text style={this.styles.label}>{this.props.caption}</Text>
                </View>
            );
        } else {
            buttonView = <View style={this.styles.buttonView}>{fontAwesomeIcon}</View>;
        }
        return (
            <View style={this.styles.container}>
                {isAndroid ? (
                    <TouchableNativeFeedback style={this.styles.touchableContainer} onPress={this.props.onClickAction}>
                        {buttonView}
                    </TouchableNativeFeedback>
                ) : (
                    <TouchableOpacity style={this.styles.touchableContainer} onPress={this.props.onClickAction}>
                        {buttonView}
                    </TouchableOpacity>
                )}
            </View>
        );
    }
}
