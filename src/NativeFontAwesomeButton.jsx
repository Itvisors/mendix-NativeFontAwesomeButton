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
        this.state = {
            initialized: false
        };
    }

    componentDidMount() {
        if (!this.state.initialized && this.props.widgetAction === "initialize") {
            library.add(fab, fal, far, fas);
            this.setState({ initialized: true });
        }
    }

    componentDidUpdate() {
        const { onLibraryLoadedAction } = this.props;
        if (this.state.initialized && onLibraryLoadedAction && onLibraryLoadedAction.canExecute) {
            onLibraryLoadedAction.execute();
        }
    }

    render() {
        const caption = this.props.caption?.value || "";
        return this.props.widgetAction === "icon" ? (
            <FontAwesomeButton
                style={this.props.style}
                onClickAction={this.onClickHandler}
                caption={caption}
                iconName={this.props.iconName}
                iconNamePrefix={this.props.iconNamePrefix}
            />
        ) : (
            <View />
        );
    }

    onClick() {
        const { onClickAction } = this.props;
        if (onClickAction && onClickAction.canExecute) {
            onClickAction.execute();
        }
    }
}
