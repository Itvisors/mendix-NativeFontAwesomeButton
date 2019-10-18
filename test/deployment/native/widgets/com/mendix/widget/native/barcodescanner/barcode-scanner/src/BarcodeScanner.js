import { flattenStyles } from '../../util-widgets/dist/styles';
import { Component, createElement } from 'react';
import { View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { defaultBarcodeScannerStyle } from './ui/styles';

class BarcodeScanner extends Component {
    constructor() {
        super(...arguments);
        this.styles = flattenStyles(defaultBarcodeScannerStyle, this.props.style);
        this.onBarCodeReadHandler = this.onBarCodeRead.bind(this);
    }
    render() {
        return (createElement(View, { style: this.styles.container },
            createElement(RNCamera, { style: { flex: 1, justifyContent: "center", alignItems: "center" }, captureAudio: false, onBarCodeRead: this.onBarCodeReadHandler })));
    }
    onBarCodeRead(event) {
        if (this.props.barcode.status !== "available" /* Available */ || event.data === this.props.barcode.value) {
            return;
        }
        this.props.barcode.setValue(event.data);
        if (this.props.onDetect && this.props.onDetect.canExecute) {
            this.props.onDetect.execute();
        }
    }
}

export { BarcodeScanner };
