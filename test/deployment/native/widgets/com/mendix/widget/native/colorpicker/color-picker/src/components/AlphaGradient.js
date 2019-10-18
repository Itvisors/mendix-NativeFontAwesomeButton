import { Component, createElement } from 'react';
import Gradient from '../../node_modules/react-native-color/src/gradients/Gradient';
import tinycolor from '../../node_modules/tinycolor2/tinycolor';
import '../../node_modules/react-native-color/src/gradients/HueGradient';
import '../../node_modules/react-native-color/src/gradients/SaturationGradient';
import '../../node_modules/react-native-color/src/gradients/LightnessGradient';
import '../../node_modules/react-native-color/src/sliders/GradientSlider';
import '../../node_modules/react-native-color/src/sliders/HueSlider';
import '../../node_modules/react-native-color/src/sliders/SaturationSlider';
import '../../node_modules/react-native-color/src/sliders/LightnessSlider';
import '../../node_modules/react-native-color/src/pickers/SlidersColorPicker';

class AlphaGradient extends Component {
    constructor() {
        super(...arguments);
        this.getStepColor = (i) => tinycolor(Object.assign({}, this.props.color, { a: i })).toHslString();
    }
    shouldComponentUpdate(nextProps) {
        const current = this.props.color;
        const next = nextProps.color;
        return current.h !== next.h || current.s !== next.s || current.l !== next.l;
    }
    render() {
        const { style, gradientSteps } = this.props;
        return (createElement(Gradient, { style: style, gradientSteps: gradientSteps, getStepColor: this.getStepColor, maximumValue: 1 }));
    }
}

export { AlphaGradient };
