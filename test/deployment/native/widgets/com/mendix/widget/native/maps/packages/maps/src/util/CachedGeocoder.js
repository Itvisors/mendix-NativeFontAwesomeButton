import Geocoder from 'react-native-geocoder';
import { PromiseQueue } from './PromiseQueue';

class CachedGeocoder {
    constructor() {
        this.queue = new PromiseQueue();
        this.cache = {};
    }
    geocode(address) {
        const cachedValue = this.cache[address];
        if (cachedValue) {
            return Promise.resolve(cachedValue);
        }
        return this.queuedGeocode(address).then(coordinate => {
            this.cache = Object.assign({}, this.cache, { [address]: coordinate });
            return coordinate;
        });
    }
    queuedGeocode(address) {
        return this.queue
            .add(() => Geocoder.geocodeAddress(address).catch(() => {
            throw new Error(`Failed to retrieve a location for the provided address: ${address}`);
        }))
            .then(results => {
            if (results.length === 0) {
                throw new Error(`No location found for the provided address: ${address}`);
            }
            return {
                latitude: results[0].position.lat,
                longitude: results[0].position.lng
            };
        });
    }
}

export { CachedGeocoder };
