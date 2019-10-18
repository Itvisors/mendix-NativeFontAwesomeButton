import { flattenStyles } from '../../util-widgets/dist/styles';
import { unavailable, available } from '../../util-widgets/dist/properties';
import { Component, createElement } from 'react';
import { View, Text } from 'react-native';
import ProgressBar$1 from '../node_modules/react-native-progress/Bar';
import '../node_modules/react-native-progress/Circle';
import '../node_modules/react-native-progress/CircleSnail';
import '../node_modules/react-native-progress/Pie';
import { defaultProgressBarStyle } from './ui/Styles';

class ProgressBar extends Component {
    constructor() {
        super(...arguments);
        this.styles = flattenStyles(defaultProgressBarStyle, this.props.style);
    }
    render() {
        const validationMessages = this.validate();
        const progress = validationMessages.length === 0 ? this.calculateProgress() : 0;
        return (createElement(View, { style: this.styles.container },
            createElement(ProgressBar$1, { height: Number(this.styles.bar.height), width: null, progress: progress, color: this.styles.fill.backgroundColor, borderWidth: this.styles.bar.borderWidth, style: this.styles.bar }),
            validationMessages.length > 0 && (createElement(Text, { style: this.styles.validationMessage }, validationMessages.join("\n")))));
    }
    validate() {
        const messages = [];
        const { minimumValue, maximumValue, progressValue } = this.props;
        if (unavailable(minimumValue)) {
            messages.push("No minimum value provided.");
        }
        if (unavailable(maximumValue)) {
            messages.push("No maximum value provided.");
        }
        if (unavailable(progressValue)) {
            messages.push("No current value provided.");
        }
        if (available(minimumValue) && available(maximumValue) && available(progressValue)) {
            if (minimumValue.value.gte(maximumValue.value)) {
                messages.push("The minimum value must be equal or less than the maximum value.");
            }
            else {
                if (progressValue.value.lt(minimumValue.value)) {
                    messages.push("The current value must be equal or greater than the minimum value.");
                }
                if (progressValue.value.gt(maximumValue.value)) {
                    messages.push("The current value must be equal or less than the maximum value.");
                }
            }
        }
        return messages;
    }
    calculateProgress() {
        const { minimumValue, maximumValue, progressValue } = this.props;
        if (!available(minimumValue) || !available(maximumValue) || !available(progressValue)) {
            return 0;
        }
        const numerator = progressValue.value.minus(minimumValue.value);
        const denominator = maximumValue.value.minus(minimumValue.value);
        return Number(numerator.div(denominator));
    }
}

export { ProgressBar };
