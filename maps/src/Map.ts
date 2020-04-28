import { IMarkable } from './IMarkable';

export class Map {
  private googleMap: google.maps.Map;

  constructor(id: string) {
    this.googleMap = new google.maps.Map(document.getElementById(id), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(markerObject: IMarkable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: markerObject.location,
      title: markerObject.name,
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: markerObject.name,
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
