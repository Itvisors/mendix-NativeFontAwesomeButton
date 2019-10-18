import { flattenStyles } from '../../util-widgets/dist/styles';
import { toNumber, unavailable, available } from '../../util-widgets/dist/properties';
import { Component, createElement } from 'react';
import { View, Text } from 'react-native';
import MultiSlider from '../node_modules/@ptomasroos/react-native-multi-slider/MultiSlider';
import { Marker } from './Marker';
import { defaultRangeSliderStyle } from './ui/Styles';

class RangeSlider extends Component {
    constructor() {
        super(...arguments);
        this.state = {};
        this.onLayoutHandler = this.onLayout.bind(this);
        this.onSlideHandler = this.onSlide.bind(this);
        this.onChangeHandler = this.onChange.bind(this);
        this.styles = flattenStyles(defaultRangeSliderStyle, this.props.style);
        this.lastLowerValue = toNumber(this.props.lowerValueAttribute);
        this.lastUpperValue = toNumber(this.props.upperValueAttribute);
    }
    render() {
        const lowerValue = toNumber(this.props.lowerValueAttribute);
        const upperValue = toNumber(this.props.upperValueAttribute);
        const validationMessages = this.validate();
        const validProps = validationMessages.length === 0;
        const editable = this.props.editable !== "never" && validProps;
        const enabledOne = editable && lowerValue != null && !this.props.lowerValueAttribute.readOnly;
        const enabledTwo = editable && upperValue != null && !this.props.upperValueAttribute.readOnly;
        const customMarker = (markerEnabled) => (props) => (createElement(Marker, Object.assign({}, props, { markerStyle: markerEnabled ? props.markerStyle : this.styles.markerDisabled })));
        return (createElement(View, { onLayout: this.onLayoutHandler, style: this.styles.container },
            createElement(MultiSlider, { values: lowerValue != null && upperValue != null ? [lowerValue, upperValue] : undefined, min: validProps ? toNumber(this.props.minimumValue) : undefined, max: validProps ? toNumber(this.props.maximumValue) : undefined, step: validProps ? toNumber(this.props.stepSize) : undefined, enabledOne: enabledOne, enabledTwo: enabledTwo, markerStyle: this.styles.marker, trackStyle: enabledOne || enabledTwo ? this.styles.track : this.styles.trackDisabled, selectedStyle: enabledOne || enabledTwo ? this.styles.highlight : this.styles.highlightDisabled, pressedMarkerStyle: this.styles.markerActive, onValuesChange: this.onSlideHandler, onValuesChangeFinish: this.onChangeHandler, sliderLength: this.state.width, isMarkersSeparated: true, customMarkerLeft: customMarker(enabledOne), customMarkerRight: customMarker(enabledTwo) }),
            this.props.lowerValueAttribute.validation && (createElement(Text, { style: this.styles.validationMessage }, this.props.lowerValueAttribute.validation)),
            this.props.upperValueAttribute.validation && (createElement(Text, { style: this.styles.validationMessage }, this.props.upperValueAttribute.validation)),
            validationMessages.length > 0 && (createElement(Text, { style: this.styles.validationMessage }, validationMessages.join("\n")))));
    }
    onLayout(event) {
        this.setState({
            width: event.nativeEvent.layout.width
        });
    }
    onSlide(values) {
        this.props.lowerValueAttribute.setTextValue(String(values[0]));
        this.props.upperValueAttribute.setTextValue(String(values[1]));
    }
    onChange(values) {
        if (this.lastLowerValue === values[0] && this.lastUpperValue === values[1]) {
            return;
        }
        this.lastLowerValue = values[0];
        this.lastUpperValue = values[1];
        this.props.lowerValueAttribute.setTextValue(String(values[0]));
        this.props.upperValueAttribute.setTextValue(String(values[1]));
        if (this.props.onChange && this.props.onChange.canExecute) {
            this.props.onChange.execute();
        }
    }
    validate() {
        const messages = [];
        const { minimumValue, maximumValue, stepSize, lowerValueAttribute, upperValueAttribute } = this.props;
        if (unavailable(minimumValue)) {
            messages.push("No minimum value provided.");
        }
        if (unavailable(maximumValue)) {
            messages.push("No maximum value provided.");
        }
        if (unavailable(stepSize)) {
            messages.push("No step size provided.");
        }
        if (unavailable(lowerValueAttribute)) {
            messages.push("The lower value attribute is not available.");
        }
        if (unavailable(upperValueAttribute)) {
            messages.push("The upper value attribute is not available.");
        }
        if (available(minimumValue) &&
            available(maximumValue) &&
            available(stepSize) &&
            available(lowerValueAttribute) &&
            available(upperValueAttribute)) {
            if (stepSize.value.lte(0)) {
                messages.push("The step size must be greater than zero.");
            }
            if (minimumValue.value.gt(maximumValue.value)) {
                messages.push("The minimum value must be less than the maximum value.");
            }
            else {
                if (lowerValueAttribute.value.lt(minimumValue.value)) {
                    messages.push("The lower value must be equal or greater than the minimum value.");
                }
                if (lowerValueAttribute.value.gt(maximumValue.value)) {
                    messages.push("The lower value must be less than the maximum value.");
                }
                if (upperValueAttribute.value.lt(minimumValue.value)) {
                    messages.push("The upper value bust be greater than the minimum value.");
                }
                if (upperValueAttribute.value.gt(maximumValue.value)) {
                    messages.push("The upper value must be equal or less than the maximum value.");
                }
            }
        }
        return messages;
    }
}

export { RangeSlider };
