import { flattenStyles } from '../../util-widgets/dist/styles';
import { Component, createElement } from 'react';
import { View, Text } from 'react-native';
import { WebView as WebView$1 } from 'react-native-webview';
import { defaultWebViewStyle } from './ui/Styles';

class WebView extends Component {
    constructor() {
        super(...arguments);
        this.onLoadHandler = this.onLoad.bind(this);
        this.onErrorHandler = this.onError.bind(this);
        this.styles = flattenStyles(defaultWebViewStyle, this.props.style);
    }
    render() {
        const uri = this.props.url && this.props.url.value;
        const html = this.props.content && this.props.content.value;
        if (!uri && !html) {
            return (createElement(View, { style: this.styles.errorContainer },
                createElement(Text, { style: this.styles.errorText }, "No URL or content was provided.")));
        }
        return (createElement(View, { style: this.styles.container },
            createElement(WebView$1, { source: html ? { html } : { uri: uri }, style: {
                    width: "100%",
                    height: "100%"
                }, onLoad: this.onLoadHandler, onError: this.onErrorHandler, userAgent: this.props.userAgent, useWebKit: true })));
    }
    onLoad() {
        if (this.props.onLoad && this.props.onLoad.canExecute) {
            this.props.onLoad.execute();
        }
    }
    onError() {
        if (this.props.onError && this.props.onError.canExecute) {
            this.props.onError.execute();
        }
    }
}

export { WebView };
