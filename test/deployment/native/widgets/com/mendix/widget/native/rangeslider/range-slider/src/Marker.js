import { Component, createElement } from 'react';
import { StyleSheet, Platform, TouchableHighlight, View } from 'react-native';

class Marker extends Component {
    render() {
        return (createElement(TouchableHighlight, null,
            createElement(View, { style: this.props.enabled
                    ? [
                        styles.markerStyle,
                        this.props.markerStyle,
                        this.props.pressed && styles.pressedMarkerStyle,
                        this.props.pressed && this.props.pressedMarkerStyle
                    ]
                    : [styles.markerStyle, styles.disabled, this.props.markerStyle] })));
    }
}
const styles = StyleSheet.create({
    markerStyle: Object.assign({}, Platform.select({
        ios: {
            height: 30,
            width: 30,
            borderRadius: 30,
            borderWidth: 1,
            borderColor: "#DDDDDD",
            backgroundColor: "#FFFFFF",
            shadowColor: "#000000",
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 1,
            shadowOpacity: 0.2
        },
        android: {
            height: 12,
            width: 12,
            borderRadius: 12,
            backgroundColor: "#0D8675"
        }
    })),
    pressedMarkerStyle: Object.assign({}, Platform.select({
        ios: {},
        android: {
            height: 20,
            width: 20,
            borderRadius: 20
        }
    })),
    disabled: {
        backgroundColor: "#d3d3d3"
    }
});

export { Marker };
