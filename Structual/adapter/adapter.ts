// adatper.ts
import { IGeoCoder, GeoCoder } from './impl-class';
import { Locator } from './new-class';

export class GeocodingAdapter implements IGeoCoder {
  private latitude: number;
  private longitude: number;
  private type: string;
  
  constructor(latitude, longitude, type) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.type = type;
  }

  locate(): string {
    if (this.type === 'GeoCoder') {
      const geocoder = new GeoCoder(this.latitude, this.longitude);
      return geocoder.locate();

    } else if (this.type === 'Locator') {
      const locator = new Locator(this.latitude, this.longitude);
      return locator.geocode();
    } else {
      throw new Error('Please use either GeoCoder or Locator');
    }
  }
}