import { flattenStyles } from '../../util-widgets/dist/styles';
import { Component, createElement } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import Video from 'react-native-video';
import { defaultVideoStyle } from './ui/Styles';

class VideoPlayer extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            status: "not-ready" /* NOT_READY */
        };
        this.onLoadStartHandler = this.onLoadStart.bind(this);
        this.onLoadHandler = this.onLoad.bind(this);
        this.onErrorHandler = this.onError.bind(this);
        this.styles = flattenStyles(defaultVideoStyle, this.props.style);
    }
    render() {
        const uri = this.props.videoUrl && this.props.videoUrl.value;
        const styles = Object.assign({}, this.styles.container);
        if (this.props.aspectRatio && this.state.aspectRatio) {
            styles.aspectRatio = this.state.aspectRatio;
        }
        return (createElement(View, { style: styles },
            this.state.status === "loading" /* LOADING */ && (createElement(ActivityIndicator, { color: this.styles.indicator.color, size: "large" })),
            this.state.status === "error" /* ERROR */ && (createElement(Text, { style: this.styles.errorMessage }, "The video failed to load :(")),
            createElement(Video, { source: { uri }, paused: !this.props.autoStart, muted: this.props.muted, repeat: this.props.loop, controls: this.props.showControls, onLoadStart: this.onLoadStartHandler, onLoad: this.onLoadHandler, onError: this.onErrorHandler, style: this.state.status !== "ready" /* READY */ ? { height: 0 } : this.styles.video, useTextureView: false, resizeMode: "contain" })));
    }
    onLoadStart() {
        this.setState({ status: "loading" /* LOADING */, aspectRatio: undefined });
    }
    onLoad(data) {
        this.setState({ status: "ready" /* READY */, aspectRatio: data.naturalSize.width / data.naturalSize.height });
    }
    onError() {
        this.setState({ status: "error" /* ERROR */, aspectRatio: undefined });
    }
}

export { VideoPlayer };
