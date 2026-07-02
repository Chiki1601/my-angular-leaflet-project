// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-map',
//   imports: [],
//   templateUrl: './map.html',
//   styleUrl: './map.scss',
// })
// export class Map {}


import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.html',
  styleUrl: './map.scss'
})
export class MapComponent implements AfterViewInit {

  private map: any;

  async ngAfterViewInit() {

    if (typeof window === 'undefined') {
      return;
    }

    const L = await import('leaflet');

    this.map = L.map('map').setView(
      [23.0225, 72.5714],
      13
    );

    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '© OpenStreetMap contributors'
      }
    ).addTo(this.map);

    L.marker([23.0225,72.5714])
      .addTo(this.map)
      .bindPopup('Ahmedabad')
      .openPopup();
  }
}