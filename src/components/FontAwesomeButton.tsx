import { Component, ReactNode, createElement } from "react";
import { Platform, Text, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";
import { ButtonStyle } from "../NativeFontAwesomeButton";
import { styles } from "../ui/styles";
import { flattenStyles } from "../utils/common";

export interface FontAwesomeButtonProps {
    caption?: string;
    iconName: string;
    iconPrefix?: string;
    style: ButtonStyle[];
    onClickAction?: () => void;
}

const defaultButtonStyle: ButtonStyle = {
    container: styles.flex,
    button: styles.button,
    icon: styles.icon,
    label: styles.label
};

export class FontAwesomeButton extends Component<FontAwesomeButtonProps> {
    private readonly styles = flattenStyles(defaultButtonStyle, this.props.style);

    render(): ReactNode {
        const isAndroid = Platform.OS === "android";

        return (
            <View style={this.styles.container}>
                {isAndroid ? (
                    <TouchableNativeFeedback style={this.styles.badge} onPress={this.props.onClickAction}>
                        <Text style={this.styles.label}>{this.props.caption}</Text>
                    </TouchableNativeFeedback>
                ) : (
                    <TouchableOpacity style={this.styles.badge} onPress={this.props.onClickAction}>
                        <Text style={this.styles.label}>{this.props.caption}</Text>
                    </TouchableOpacity>
                )}
            </View>
        );
    }
}
