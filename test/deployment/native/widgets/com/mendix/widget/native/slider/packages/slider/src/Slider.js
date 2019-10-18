import { flattenStyles } from '../../util-widgets/dist/styles';
import { toNumber, unavailable, available } from '../../util-widgets/dist/properties';
import { Component, createElement } from 'react';
import { View, Text } from 'react-native';
import MultiSlider from '../node_modules/@ptomasroos/react-native-multi-slider/MultiSlider';
import { Marker } from './Marker';
import { defaultSliderStyle } from './ui/Styles';

class Slider extends Component {
    constructor() {
        super(...arguments);
        this.state = {};
        this.onLayoutHandler = this.onLayout.bind(this);
        this.onSlideHandler = this.onSlide.bind(this);
        this.onChangeHandler = this.onChange.bind(this);
        this.styles = flattenStyles(defaultSliderStyle, this.props.style);
        this.lastValue = toNumber(this.props.valueAttribute);
    }
    render() {
        const value = toNumber(this.props.valueAttribute);
        const validationMessages = this.validate();
        const validProps = validationMessages.length === 0;
        const editable = this.props.editable !== "never" && !this.props.valueAttribute.readOnly && validProps;
        return (createElement(View, { onLayout: this.onLayoutHandler, style: this.styles.container },
            createElement(MultiSlider, { values: value != null ? [value] : undefined, min: validProps ? toNumber(this.props.minimumValue) : undefined, max: validProps ? toNumber(this.props.maximumValue) : undefined, step: validProps ? toNumber(this.props.stepSize) : undefined, enabledOne: editable, markerStyle: editable ? this.styles.marker : this.styles.markerDisabled, trackStyle: editable ? this.styles.track : this.styles.trackDisabled, selectedStyle: editable ? this.styles.highlight : this.styles.highlightDisabled, pressedMarkerStyle: this.styles.markerActive, onValuesChange: this.onSlideHandler, onValuesChangeFinish: this.onChangeHandler, sliderLength: this.state.width, allowOverlap: true, customMarker: Marker }),
            !validProps && createElement(Text, { style: this.styles.validationMessage }, validationMessages.join("\n")),
            this.props.valueAttribute.validation && (createElement(Text, { style: this.styles.validationMessage }, this.props.valueAttribute.validation))));
    }
    onLayout(event) {
        this.setState({
            width: event.nativeEvent.layout.width
        });
    }
    onSlide(values) {
        this.props.valueAttribute.setTextValue(String(values[0]));
    }
    onChange(values) {
        if (this.lastValue != null && this.lastValue === values[0]) {
            return;
        }
        this.lastValue = values[0];
        this.props.valueAttribute.setTextValue(String(values[0]));
        if (this.props.onChange && this.props.onChange.canExecute) {
            this.props.onChange.execute();
        }
    }
    validate() {
        const messages = [];
        const { minimumValue, maximumValue, stepSize, valueAttribute } = this.props;
        if (unavailable(minimumValue)) {
            messages.push("No minimum value provided.");
        }
        if (unavailable(maximumValue)) {
            messages.push("No maximum value provided.");
        }
        if (unavailable(stepSize)) {
            messages.push("No step size provided.");
        }
        if (unavailable(valueAttribute)) {
            messages.push("The value attribute is not readable.");
        }
        if (available(minimumValue) && available(maximumValue) && available(stepSize) && available(valueAttribute)) {
            if (stepSize.value.lte(0)) {
                messages.push("The step size can not be zero or less than zero.");
            }
            if (minimumValue.value.gt(maximumValue.value)) {
                messages.push("The minimum value can not be greater than the maximum value.");
            }
            else {
                if (valueAttribute.value.lt(minimumValue.value)) {
                    messages.push("The current value can not be less than the minimum value.");
                }
                if (valueAttribute.value.gt(maximumValue.value)) {
                    messages.push("The current value can not be greater than the maximum value.");
                }
            }
        }
        return messages;
    }
}

export { Slider };
