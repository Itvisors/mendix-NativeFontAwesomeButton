import { flattenStyles } from '../../util-widgets/dist/styles';
import { Component, createElement } from 'react';
import { View, ActivityIndicator as ActivityIndicator$1 } from 'react-native';
import { defaultActivityStyle } from './ui/Styles';

class ActivityIndicator extends Component {
    constructor() {
        super(...arguments);
        this.styles = flattenStyles(defaultActivityStyle, this.props.style);
    }
    render() {
        return (createElement(View, { style: this.styles.container },
            createElement(ActivityIndicator$1, { size: this.styles.indicator.size, color: this.styles.indicator.color })));
    }
}

export { ActivityIndicator };
