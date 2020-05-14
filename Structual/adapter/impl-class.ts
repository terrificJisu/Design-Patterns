export interface IGeoCoder {
  locate(): string;
}

export class GeoCoder implements IGeoCoder {
  private latitude: number;
  private longitude: number;

  constructor(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
  
  public locate(): string {
    // do geolookup
    return `${this.latitude} | ${this.longitude} is in London.`
  }
}