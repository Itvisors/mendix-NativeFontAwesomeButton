import { flattenStyles } from '../../util-widgets/dist/styles';
import { Component, createElement } from 'react';
import { View, Text } from 'react-native';
import SegmentedControlTab from '../node_modules/react-native-segmented-control-tab/src/SegmentedControlTab';
import { defaultToggleButtonsStyle } from './ui/Styles';

class ToggleButtons extends Component {
    constructor() {
        super(...arguments);
        this.onChangeHandler = this.onChange.bind(this);
        this.styles = flattenStyles(defaultToggleButtonsStyle, this.props.style);
    }
    get universe() {
        // As this property can only be an Enum we know that universe is defined
        return this.props.enum.universe;
    }
    render() {
        const selectedIndex = this.universe.indexOf(this.props.enum.value);
        const captions = this.universe.map(name => this.props.enum.formatter.format(name));
        const enabled = this.props.editable !== "never" && !this.props.enum.readOnly;
        return (createElement(View, { style: enabled ? this.styles.container : this.styles.containerDisabled },
            createElement(SegmentedControlTab, { values: captions, selectedIndex: selectedIndex, enabled: enabled, onTabPress: this.onChangeHandler, borderRadius: this.styles.container.borderRadius, tabStyle: this.styles.button, tabTextStyle: this.styles.text, activeTabStyle: this.styles.activeButton, activeTabTextStyle: this.styles.activeButtonText }),
            this.props.enum.validation && (createElement(Text, { style: this.styles.validationMessage }, this.props.enum.validation))));
    }
    onChange(index) {
        const value = this.universe[index];
        this.props.enum.setValue(value);
        if (this.props.onChange && this.props.onChange.canExecute) {
            this.props.onChange.execute();
        }
    }
}

export { ToggleButtons };
