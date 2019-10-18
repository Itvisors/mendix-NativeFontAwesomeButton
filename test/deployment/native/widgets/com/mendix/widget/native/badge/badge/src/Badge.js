import { flattenStyles } from '../../util-widgets/dist/styles';
import { Component, createElement } from 'react';
import { Platform, View, TouchableNativeFeedback, TouchableOpacity, Text } from 'react-native';
import { defaultBadgeStyle } from './ui/Styles';

class Badge extends Component {
    constructor() {
        super(...arguments);
        this.onClickHandler = this.onClick.bind(this);
        this.styles = flattenStyles(defaultBadgeStyle, this.props.style);
    }
    render() {
        const isAndroid = Platform.OS === "android";
        return (createElement(View, { style: this.styles.container }, this.props.onClick ? (isAndroid ? (createElement(TouchableNativeFeedback, { background: TouchableNativeFeedback.SelectableBackgroundBorderless(), onPress: this.onClickHandler }, this.renderText())) : (createElement(TouchableOpacity, { onPress: this.onClickHandler }, this.renderText()))) : (this.renderText())));
    }
    renderText() {
        const value = this.props.caption.value || "";
        return createElement(Text, { style: this.styles.caption }, value);
    }
    onClick() {
        if (this.props.onClick && this.props.onClick.canExecute) {
            this.props.onClick.execute();
        }
    }
}

export { Badge };
