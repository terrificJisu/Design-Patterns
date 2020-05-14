interface ILocator {
  geocode(): string;
}

export class Locator implements ILocator {
  private latitude: number;
  private longitude: number;

  constructor(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
  
  public geocode(): string {
    // do geolookup
    return `The specified location (${this.latitude}, ${this.longitude}) returns London.`;
  }
}