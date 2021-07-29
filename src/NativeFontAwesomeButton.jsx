import { Component, createElement } from "react";
import { FontAwesomeButton } from "./components/FontAwesomeButton";
import { View } from "react-native";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

export class NativeFontAwesomeButton extends Component {
    constructor(props) {
        super(props);

        this.onClickHandler = this.onClick.bind(this);
    }

    render() {
        if (this.props.widgetAction === "initialize") {
            // Customize this (and the imports) where applicable.
            // If you have a Pro license, don't just import everything! That would make your app way too large.
            library.add(fab, fal, far, fas);

            const onLibraryLoadedAction = this.props.onLibraryLoadedAction;
            setTimeout(() => {
                if (onLibraryLoadedAction) {
                    onLibraryLoadedAction.execute();
                }
            }, 0);
            return <View />;
        }

        const caption = this.props.caption && this.props.caption.value ? this.props.caption.value : "";
        return (
            <FontAwesomeButton
                style={this.props.style}
                onClickAction={this.onClickHandler}
                caption={caption}
                iconName={this.props.iconName}
                iconNamePrefix={this.props.iconNamePrefix}
            />
        );
    }

    onClick() {
        if (this.props.onClickAction) {
            this.props.onClickAction.execute();
        }
    }
}
