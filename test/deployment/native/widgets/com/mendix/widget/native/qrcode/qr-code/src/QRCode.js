import { flattenStyles } from '../../util-widgets/dist/styles';
import { Component, createElement } from 'react';
import { View } from 'react-native';
import QRCode$1 from '../node_modules/react-native-qrcode-svg/src/index';
import { defaultQRCodeStyle } from './ui/Styles';

class QRCode extends Component {
    constructor() {
        super(...arguments);
        this.styles = flattenStyles(defaultQRCodeStyle, this.props.style);
    }
    render() {
        return (createElement(View, { style: this.styles.container }, this.props.value.value ? (createElement(QRCode$1, { value: this.props.value.value, size: this.styles.qrcode.size, color: this.styles.qrcode.color, backgroundColor: this.styles.qrcode.backgroundColor })) : null));
    }
}

export { QRCode };
