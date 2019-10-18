import { __awaiter } from '../../../node_modules/tslib/tslib.es6';
import { flattenStyles } from '../../util-widgets/dist/styles';
import { Icon } from 'mendix/components/native/Icon';
import { Component, createRef, createElement } from 'react';
import { View, ActivityIndicator, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { defaultMapsStyle } from './ui/Styles';
import { CachedGeocoder } from './util/CachedGeocoder';

class Maps extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            status: "loadingMarkers" /* LoadingMarkers */
        };
        this.onMapReadyHandler = this.onMapReady.bind(this);
        this.onRegionChangeCompleteHandler = this.onRegionChangeComplete.bind(this);
        this.styles = flattenStyles(defaultMapsStyle, this.props.style);
        this.mapViewRef = createRef();
        this.geocoder = new CachedGeocoder();
    }
    componentDidMount() {
        this.parseMarkers();
    }
    componentDidUpdate() {
        if (this.state.status === "loadingMarkers" /* LoadingMarkers */) {
            this.parseMarkers();
        }
    }
    componentWillReceiveProps() {
        if (this.state.status === "cameraReady" /* CameraReady */) {
            this.parseMarkers();
        }
    }
    render() {
        return (createElement(View, { style: this.styles.container },
            this.state.status !== "loadingMarkers" /* LoadingMarkers */ && (createElement(MapView, { ref: this.mapViewRef, provider: this.props.provider === "default" ? null : this.props.provider, mapType: this.props.mapType, showsUserLocation: this.props.showsUserLocation, showsMyLocationButton: this.props.showsUserLocation, showsTraffic: false, minZoomLevel: toZoomValue(this.props.minZoomLevel), maxZoomLevel: toZoomValue(this.props.maxZoomLevel), rotateEnabled: this.props.interactive, scrollEnabled: this.props.interactive, pitchEnabled: false, zoomEnabled: this.props.interactive, style: { flex: 1, alignSelf: "stretch" }, liteMode: !this.props.interactive, cacheEnabled: !this.props.interactive, showsPointsOfInterest: false, mapPadding: { top: 40, right: 20, bottom: 20, left: 20 }, onMapReady: this.onMapReadyHandler, onRegionChangeComplete: this.onRegionChangeCompleteHandler }, this.state.markers && this.state.markers.map(marker => this.renderMarker(marker)))),
            (this.state.status === "loadingMarkers" /* LoadingMarkers */ || this.state.status === "loadingMap" /* LoadingMap */) && (createElement(View, { style: this.styles.loadingOverlay },
                createElement(ActivityIndicator, { color: this.styles.loadingIndicator.color, size: "large" })))));
    }
    renderMarker({ key, props, coordinate }) {
        return (createElement(Marker, { key: key, coordinate: coordinate, title: this.props.interactive ? props.title && props.title.value : "", description: this.props.interactive ? props.description && props.description.value : "", onPress: this.props.interactive ? () => onMarkerPress(props.onClick) : undefined, pinColor: props.color || this.styles.marker.color, opacity: this.styles.marker.opacity }, props.icon && props.icon.value && (createElement(Icon, { icon: props.icon.value, color: props.color || this.styles.marker.color, size: props.iconSize }))));
    }
    onMapReady() {
        if (Platform.OS === "android") {
            this.updateCamera(false);
            this.setState({ status: this.props.interactive ? "mapReady" /* MapReady */ : "cameraReady" /* CameraReady */ });
        }
        this.onRegionChangeComplete();
    }
    onRegionChangeComplete() {
        if (Platform.OS === "android" && this.state.status === "mapReady" /* MapReady */) {
            this.setState({ status: "cameraReady" /* CameraReady */ });
        }
        if (Platform.OS === "ios") {
            switch (this.state.status) {
                case "loadingMap" /* LoadingMap */:
                    this.setState({ status: "mapReady" /* MapReady */ });
                    this.updateCamera(false);
                    break;
                case "mapReady" /* MapReady */:
                    this.setState({
                        status: this.props.provider === "default" ? "cameraAlmostReady" /* CameraAlmostReady */ : "cameraReady" /* CameraReady */
                    });
                    break;
                case "cameraAlmostReady" /* CameraAlmostReady */:
                    this.setState({ status: "cameraReady" /* CameraReady */ });
            }
        }
    }
    parseMarkers() {
        return __awaiter(this, void 0, void 0, function* () {
            const parsedMarkers = yield Promise.all(this.props.markers.map((marker, index) => __awaiter(this, void 0, void 0, function* () {
                return ({
                    key: `map_marker_${index}`,
                    props: marker,
                    coordinate: yield this.parseCoordinate(marker.latitude, marker.longitude, marker.address)
                });
            })));
            if (parsedMarkers.some(marker => marker.coordinate == null)) {
                return;
            }
            this.setState({
                status: this.state.status === "loadingMarkers" /* LoadingMarkers */ ? "loadingMap" /* LoadingMap */ : this.state.status,
                markers: parsedMarkers
            }, () => {
                if (this.state.status === "cameraReady" /* CameraReady */) {
                    this.updateCamera(true);
                }
            });
        });
    }
    updateCamera(animate) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.mapViewRef.current) {
                return;
            }
            if (this.props.fitToMarkers && this.props.markers.length > 1) {
                this.mapViewRef.current.fitToElements(animate);
                return;
            }
            const camera = {
                center: yield this.getCenter(),
                zoom: toZoomValue(this.props.defaultZoomLevel),
                altitude: toAltitude(this.props.defaultZoomLevel)
            };
            if (animate) {
                this.mapViewRef.current.animateCamera(camera);
            }
            else {
                this.mapViewRef.current.setCamera(camera);
            }
        });
    }
    getCenter() {
        return __awaiter(this, void 0, void 0, function* () {
            const center = this.props.markers.length === 1 && this.props.fitToMarkers
                ? yield this.parseCoordinate(this.props.markers[0].latitude, this.props.markers[0].longitude, this.props.markers[0].address)
                : yield this.parseCoordinate(this.props.centerLatitude, this.props.centerLongitude, this.props.centerAddress);
            return center || { latitude: 51.9066346, longitude: 4.4861703 };
        });
    }
    parseCoordinate(latitudeProp, longitudeProp, addressProp) {
        if (latitudeProp && latitudeProp.value && longitudeProp && longitudeProp.value) {
            const latitude = Number(latitudeProp.value);
            const longitude = Number(longitudeProp.value);
            if (!isValidLatitude(latitude) || !isValidLongitude(longitude)) {
                throw new Error(`Invalid coordinate provided: (${latitude}, ${longitude})`);
            }
            return Promise.resolve({ latitude, longitude });
        }
        if (addressProp && addressProp.value) {
            return this.geocoder.geocode(addressProp.value);
        }
        return Promise.resolve(null);
    }
}
function isValidLatitude(latitude) {
    return !isNaN(latitude) && latitude <= 90 && latitude >= -90;
}
function isValidLongitude(longitude) {
    return !isNaN(longitude) && longitude <= 180 && longitude >= -180;
}
function onMarkerPress(action) {
    if (action && action.canExecute) {
        action.execute();
    }
}
function toZoomValue(level) {
    switch (level) {
        case "world":
            return 3;
        case "continent":
            return 5;
        case "country":
            return 7;
        case "city":
            return 10;
        case "town":
            return 12;
        case "streets":
            return 15;
        case "building":
            return 20;
    }
}
function toAltitude(level) {
    switch (level) {
        case "world":
            return 16026161;
        case "continent":
            return 4006540;
        case "country":
            return 1001635;
        case "city":
            return 125204;
        case "town":
            return 31301;
        case "streets":
            return 3914;
        case "building":
            return 122;
    }
}

export { Maps };
