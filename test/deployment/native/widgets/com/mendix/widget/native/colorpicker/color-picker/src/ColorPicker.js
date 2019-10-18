import { flattenStyles } from '../../util-widgets/dist/styles';
import { Component, createElement } from 'react';
import { View } from 'react-native';
import '../node_modules/react-native-color/src/gradients/Gradient';
import tinycolor from '../node_modules/tinycolor2/tinycolor';
import HueGradient from '../node_modules/react-native-color/src/gradients/HueGradient';
import SaturationGradient from '../node_modules/react-native-color/src/gradients/SaturationGradient';
import LightnessGradient from '../node_modules/react-native-color/src/gradients/LightnessGradient';
import '../node_modules/react-native-color/src/sliders/GradientSlider';
import '../node_modules/react-native-color/src/sliders/HueSlider';
import '../node_modules/react-native-color/src/sliders/SaturationSlider';
import '../node_modules/react-native-color/src/sliders/LightnessSlider';
import '../node_modules/react-native-color/src/pickers/SlidersColorPicker';
import { AlphaGradient } from './components/AlphaGradient';
import { PickerSlider } from './components/PickerSlider';
import { defaultColorPickerStyle } from './ui/Styles';

class ColorPicker extends Component {
    constructor() {
        super(...arguments);
        this.onChangeHueHandler = this.onChangeHue.bind(this);
        this.onChangeSaturationHandler = this.onChangeSaturation.bind(this);
        this.onChangeLightnessHandler = this.onChangeLightness.bind(this);
        this.onChangeAlphaHandler = this.onChangeAlpha.bind(this);
        this.onChangeCompleteHandler = this.onChangeComplete.bind(this);
        this.styles = flattenStyles(defaultColorPickerStyle, this.props.style);
        this.defaultSteps = 80;
        this.state = {
            color: undefined
        };
        this.getThumbStyle = (color) => ({
            borderWidth: 1,
            borderColor: tinycolor(color).toHexString()
        });
    }
    render() {
        if (!this.props.color || this.props.color.status !== "available" /* Available */ || !this.props.color.value) {
            return null;
        }
        const colorHex = this.state.color ? this.getColor() : this.props.color.value;
        const color = tinycolor(colorHex).toHsl();
        return (createElement(View, { style: this.styles.container },
            this.renderPreview(),
            this.renderHue(color),
            this.renderSaturation(color),
            this.renderLightness(color),
            this.props.format !== "hex" && this.renderAlpha(color)));
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.color.value !== prevProps.color.value && this.state.color === prevState.color) {
            this.setState({ color: undefined });
        }
    }
    onChangeHue(value) {
        const color = tinycolor(this.props.color.value).toHsl();
        color.h = value;
        this.setState({ color });
    }
    onChangeSaturation(value) {
        const color = tinycolor(this.props.color.value).toHsl();
        color.s = value;
        this.setState({ color });
    }
    onChangeLightness(value) {
        const color = tinycolor(this.props.color.value).toHsl();
        color.l = value;
        this.setState({ color });
    }
    onChangeAlpha(value) {
        const color = tinycolor(this.props.color.value).toHsl();
        color.a = value;
        this.setState({ color });
    }
    onChangeComplete() {
        if (this.state.color && this.props.color.value !== this.getColor()) {
            this.setColor();
        }
        if (this.props.onChange && this.props.onChange.canExecute) {
            this.props.onChange.execute();
        }
    }
    setColor() {
        const color = tinycolor(this.state.color);
        switch (this.props.format) {
            case "hex":
                this.props.color.setValue(color.toHexString());
                break;
            case "hsl":
                this.props.color.setValue(color.toHslString());
                break;
            case "hsv":
                this.props.color.setValue(color.toHsvString());
                break;
            case "rgb":
                this.props.color.setValue(color.toRgbString());
                break;
        }
    }
    getColor() {
        const color = tinycolor(this.state.color);
        switch (this.props.format) {
            case "hex":
                return color.toHexString();
            case "hsl":
                return color.toHslString();
            case "hsv":
                return color.toHsvString();
            case "rgb":
                return color.toRgbString();
        }
        return "";
    }
    renderPreview() {
        return createElement(View, { style: [this.styles.preview, { backgroundColor: this.props.color.value }] });
    }
    renderHue(color) {
        return (createElement(PickerSlider, { value: color.h, onValueChange: this.onChangeHueHandler, onValueChangeComplete: this.onChangeCompleteHandler, step: 1, maximumValue: 359, component: createElement(HueGradient, { gradientSteps: this.defaultSteps }), thumbTintColor: tinycolor(color).toHslString(), thumbStyle: this.getThumbStyle(color) }));
    }
    renderSaturation(color) {
        return (createElement(PickerSlider, { value: color.s, onValueChange: this.onChangeSaturationHandler, onValueChangeComplete: this.onChangeCompleteHandler, step: 0.01, component: createElement(SaturationGradient, { color: color, gradientSteps: this.defaultSteps }), thumbTintColor: tinycolor(color).toHslString(), thumbStyle: this.getThumbStyle(color) }));
    }
    renderLightness(color) {
        return (createElement(PickerSlider, { value: color.l, onValueChange: this.onChangeLightnessHandler, onValueChangeComplete: this.onChangeCompleteHandler, step: 0.01, component: createElement(LightnessGradient, { color: color, gradientSteps: this.defaultSteps }), thumbTintColor: tinycolor(color).toHslString(), thumbStyle: this.getThumbStyle(color) }));
    }
    renderAlpha(color) {
        return (createElement(PickerSlider, { value: color.a, onValueChange: this.onChangeAlphaHandler, onValueChangeComplete: this.onChangeCompleteHandler, step: 0.01, component: createElement(AlphaGradient, { color: color, gradientSteps: this.defaultSteps }), thumbTintColor: tinycolor(color).toHslString(), thumbStyle: this.getThumbStyle(color) }));
    }
}

export { ColorPicker };
