import { Component, ReactNode, createElement } from "react";
import { TextStyle, ViewStyle } from "react-native";
import { FontAwesomeButton } from "./components/FontAwesomeButton";
import { NativeFontAwesomeButtonProps } from "../typings/NativeFontAwesomeButtonProps";
import { Style } from "./utils/common";
import { ValueStatus } from "mendix";

export interface ButtonStyle extends Style {
    container: ViewStyle;
    button: ViewStyle;
    icon: TextStyle;
    label: TextStyle;
}

export class NativeFontAwesomeButton extends Component<NativeFontAwesomeButtonProps<ButtonStyle>> {
    private readonly onClickHandler = this.onClick.bind(this);

    render(): ReactNode {
        return (
            <FontAwesomeButton
                style={this.props.style}
                onClickAction={this.onClickHandler}
                caption={this.props.caption && this.props.caption.status == ValueStatus.Available ? this.props.caption.value : ""}
                iconName={this.props.iconName}
                iconPrefix={this.props.iconNamePrefix}
            />
        );
    }

    private onClick(): void {
        if (this.props.onClickAction && this.props.onClickAction.canExecute && !this.props.onClickAction.isExecuting) {
            this.props.onClickAction.execute();
        }
    }
}
