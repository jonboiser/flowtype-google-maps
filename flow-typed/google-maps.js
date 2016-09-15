/* @flow */
// fitBounds(bounds:LatLngBounds|LatLngBoundsLiteral)

declare class goog$LatLngBounds {

}

declare class goog$LatLng {

}

declare type goog$MapTypeId = 'HYBRID' | 'ROADMAP' | 'SATELLITE' | 'TERRAIN';

declare type goog$LatLngBoundsLiteral = {
  lat: number,
  lng: number
}

declare type goog$LatLngLiteral = {
  lat: number,
  lng: number
}

declare class goog$Map {
  fitBounds(bounds: goog$LatLngBounds | goog$LatLngBoundsLiteral): void;
  getBounds(): goog$LatLngBounds;
  getCenter(): goog$LatLng;
  getClickableIcons(): boolean;
  getDiv(): HTMLElement;
  getHeading(): number;
  getMapTypeId(): goog$MapTypeId | string;
  getProjection(): any;
  getStreetView(): any;
  getTilt(): number;
  getZoom(): number;
  panBy(x: number, y: number): void;
  panTo(latLng: goog$LatLng | goog$LatLngLiteral): void;
  panToBounds(latLng: goog$LatLng | goog$LatLngLiteral): void;
  setCenter(latLng: goog$LatLng | goog$LatLngLiteral): void;
  setClickableIcons(value: boolean): void;
  setHeading(heading: number): void;
  setMapTypeId(mapTypeId: goog$MapTypeId | string): void;
  setOptions(options: Object): void;
  setStreetView(panorama: Object): void;
  setTilt(tilt:number): void;
  setZoom(zoom:number): void;
  controls: Array<any>;
  data: Object;
  mapTypes: any;
  overlayMapTypes: Array<any>;
}

// TODO map events

declare class GoogleMaps {
  Map: Class<goog$Map>;
}

declare var google: {
  maps: GoogleMaps;
}
