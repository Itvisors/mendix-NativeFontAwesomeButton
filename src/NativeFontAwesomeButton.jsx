import { Component, createElement } from "react";

import { FontAwesomeButton } from "./components/FontAwesomeButton";

export class NativeFontAwesomeButton extends Component {
    constructor(props) {
        super(props);

        this.onClickHandler = this.onClick.bind(this);
    }

    render() {
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
