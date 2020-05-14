// https://blog.fullstacktraining.com/adapter-pattern-in-typescript/
import { GeocodingAdapter } from './adapter';

const gAdapter = new GeocodingAdapter(51.5074, 0.1278, 'Locator');
const gAdapter2 = new GeocodingAdapter(51.5074, 0.1278, 'GeoCoder');
const locationFromLocator = gAdapter.locate();
const locationFromGeoCoder = gAdapter2.locate();

console.log(locationFromLocator);
console.log(locationFromGeoCoder);