/* @flow */
declare class goog$LatLngBounds {

}

declare class goog$LatLng {

}

declare type goog$LatLngBoundsLiteral = {
  lat: number,
  lng: number
}

declare type goog$LatLngLiteral = {
  lat: number,
  lng: number
}

declare class goog$MVCObject {
  addListener(event: string, handler: Function): any;
  get(key: string): any;
  notify(key: string): void;
  set(key: string, value: any): void;
  setValues(values?: Object): void;
  unbind(key: string): void;
  unbindAll(): void;
}

declare interface foo {
  bar: number,
  baz: string,
}

declare type goog$MapOptions = {
  backgroundColor?: string;
  center?: goog$LatLng | goog$LatLngLiteral;
  disableDefaultUI?: boolean;
  clickableIcons?: boolean;
  disableDoubleClickZoom?: boolean;
  draggable?: boolean;
  draggableCursor?: string;
  draggingCursor?: string;
  heading?: number;
  keyboardShortcuts?: boolean;
  mapMaker?: boolean;
  mapTypeControl?: boolean;
  mapTypeControlOptions?: MapTypeControlOptions;
  mapTypeId?: MapTypeId;
  maxZoom?: number;
  minZoom?: number;
  noClear?: boolean;
  overviewMapControl?: boolean;
  overviewMapControlOptions?: OverviewMapControlOptions;
  panControl?: boolean;
  panControlOptions?: PanControlOptions;
  rotateControl?: boolean;
  rotateControlOptions?: RotateControlOptions;
  scaleControl?: boolean;
  scaleControlOptions?: ScaleControlOptions;
  scrollwheel?: boolean;
  streetView?: StreetViewPanorama;
  streetViewControl?: boolean;
  streetViewControlOptions?: StreetViewControlOptions;
  styles?: MapTypeStyle[];
  tilt?: number;
  zoom?: number;
  zoomControl?: boolean;
  zoomControlOptions?: ZoomControlOptions;
}

declare class goog$Map extends goog$MVCObject {
  constructor(mapDiv: Element, opts?: Object): void;
  fitBounds(bounds: goog$LatLngBounds | goog$LatLngBoundsLiteral): void;
  getBounds(): goog$LatLngBounds;
  getCenter(): goog$LatLng;
  getClickableIcons(): boolean;
  getDiv(): HTMLElement;
  getHeading(): number;
  getMapTypeId(): string;
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
  setMapTypeId(mapTypeId: string): void;
  setOptions(options: goog$MapOptions): void;
  setStreetView(panorama: Object): void;
  setTilt(tilt: number): void;
  setZoom(zoom: number): void;
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
