import { Component, createRef, createElement } from 'react';
import { StyleSheet, Platform, TouchableWithoutFeedback, View } from 'react-native';
import Slider from '../../node_modules/react-native-slider/lib/Slider';

class PickerSlider extends Component {
    constructor() {
        super(...arguments);
        this.onTapHandler = this.onTap.bind(this);
        this.onChangeHandler = this.onChange.bind(this);
        this.onSlidingCompleteHandler = this.onSlidingComplete.bind(this);
        this.viewRef = createRef();
        this.isSliding = false;
        this.roundToMultiple = (value, multiple) => Math.round(value / multiple) * multiple;
    }
    render() {
        return (createElement(TouchableWithoutFeedback, { onPressIn: this.onTapHandler },
            createElement(View, { style: [styles.container], ref: this.viewRef },
                createElement(View, { style: styles.gradient }, this.props.component),
                createElement(Slider, { value: this.props.value, step: this.props.step, animateTransitions: false, thumbTouchSize: { width: 48, height: 48 }, minimumValue: this.props.minimumValue, maximumValue: this.props.maximumValue, onValueChange: this.onChangeHandler, onSlidingComplete: this.onSlidingCompleteHandler, minimumTrackTintColor: "transparent", maximumTrackTintColor: "transparent", trackStyle: this.props.trackStyle, thumbStyle: [
                        styles.thumb,
                        this.props.thumbStyle,
                        { backgroundColor: this.props.thumbTintColor }
                    ], disabled: this.props.disabled }))));
    }
    onChange(value) {
        this.isSliding = true;
        this.props.onValueChange(value);
    }
    onSlidingComplete() {
        this.isSliding = false;
        this.props.onValueChangeComplete();
    }
    onTap(event) {
        if (!this.viewRef.current || this.props.disabled) {
            return;
        }
        const { step, maximumValue, minimumValue } = this.props;
        this.viewRef.current.measure((_x, _y, width) => {
            if (this.isSliding) {
                return;
            }
            const positionFraction = event.nativeEvent.locationX / width;
            const value = (maximumValue || 1) * positionFraction;
            const roundedValue = this.roundToMultiple(value, step);
            if (roundedValue >= (minimumValue || 0) && roundedValue <= (maximumValue || 1)) {
                this.props.onValueChange(roundedValue);
                this.props.onValueChangeComplete();
            }
        });
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        height: 32
    },
    thumb: Platform.select({
        ios: {
            width: 24,
            height: 24,
            borderRadius: 12
        },
        android: {
            width: 20,
            height: 20,
            borderRadius: 10,
            elevation: 3
        }
    }),
    gradient: {
        position: "absolute",
        left: 0,
        right: 0,
        height: 6
    }
});

export { PickerSlider };
