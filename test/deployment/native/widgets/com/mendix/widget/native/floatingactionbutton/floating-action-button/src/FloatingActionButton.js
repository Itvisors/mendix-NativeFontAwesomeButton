import { flattenStyles } from '../../util-widgets/dist/styles';
import { Icon } from 'mendix/components/native/Icon';
import { Component, createElement } from 'react';
import { View } from 'react-native';
import ActionButton from '../node_modules/react-native-action-button/ActionButton';
import { defaultFloatingActionButtonStyle } from './ui/styles';

const defaultIconSource = { type: "glyph", iconClass: "glyphicon-plus" };
const defaultActiveIconSource = { type: "glyph", iconClass: "glyphicon-remove" };
class FloatingActionButton extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            active: false
        };
        this.styles = flattenStyles(defaultFloatingActionButtonStyle, this.props.style);
        this.onPressHandler = this.onPress.bind(this);
        this.renderIconHandler = this.renderIcon.bind(this);
    }
    render() {
        const buttonStyle = Object.assign({}, this.styles.button, { backgroundColor: "transparent" });
        delete buttonStyle.rippleColor;
        return (createElement(ActionButton, { size: this.styles.button.size, style: this.styles.container, shadowStyle: buttonStyle, buttonColor: this.styles.button.backgroundColor, nativeFeedbackRippleColor: this.styles.button.rippleColor, position: this.props.horizontalPosition, verticalOrientation: this.verticalOrientation, renderIcon: this.renderIconHandler, degrees: this.props.secondaryButtons.length > 0 ? 180 : 0, onPress: this.onPressHandler, fixNativeFeedbackRadius: true, backgroundTappable: true, activeOpacity: 0.2, offsetX: 0, offsetY: 0 }, this.renderButtons()));
    }
    renderIcon() {
        const { icon, iconActive } = this.props;
        const iconSource = icon && icon.value ? icon.value : defaultIconSource;
        const activeIconSource = iconActive && iconActive.value ? iconActive.value : defaultActiveIconSource;
        const isActive = this.state.active && this.props.secondaryButtons.length > 0;
        const source = isActive ? activeIconSource : iconSource;
        const style = isActive ? { transform: [{ rotate: "-180deg" }] } : {};
        return (createElement(View, { style: style },
            createElement(Icon, { icon: source, size: this.styles.buttonIcon.size, color: this.styles.buttonIcon.color })));
    }
    renderButtons() {
        return (this.props.secondaryButtons &&
            this.props.secondaryButtons.map((button, index) => {
                return (createElement(ActionButton.Item, { key: `button${index}`, size: this.styles.secondaryButton.size, title: button.caption && button.caption.value, shadowStyle: this.styles.secondaryButton, buttonColor: this.styles.secondaryButton.backgroundColor, nativeFeedbackRippleColor: "transparent", textStyle: this.styles.secondaryButtonCaption, textContainerStyle: this.styles.secondaryButtonCaptionContainer, 
                    // tslint:disable-next-line:jsx-no-lambda
                    onPress: () => {
                        this.setState({ active: false });
                        executeAction(button.onClick);
                    }, activeOpacity: 0.2, spaceBetween: 0 }, button.icon.value && (createElement(Icon, { icon: button.icon.value, size: this.styles.secondaryButtonIcon.size, color: this.styles.secondaryButtonIcon.color }))));
            }));
    }
    get verticalOrientation() {
        switch (this.props.verticalPosition) {
            case "bottom":
                return "up";
            case "top":
                return "down";
        }
    }
    onPress() {
        if (this.props.secondaryButtons && this.props.secondaryButtons.length > 0) {
            this.setState({ active: !this.state.active });
            return;
        }
        executeAction(this.props.onClick);
    }
}
function executeAction(action) {
    if (action && action.canExecute) {
        action.execute();
    }
}

export { FloatingActionButton };
