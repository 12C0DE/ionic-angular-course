import { Injectable } from '@angular/core';
import { Place } from './offers/place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhan',
      'Ny ',
      'https://cdn.pixabay.com/photo/2021/11/11/20/49/sauerland-6787215_960_720.jpg',
      50
    ),
    new Place(
      'p2',
      'Paris',
      'Tx ',
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg',
      540
    ),
    new Place(
      'p3',
      'Rett',
      'Georgia',
      'https://cdn.pixabay.com/photo/2021/01/12/15/46/winter-5911787_960_720.jpg',
      40
    ),
  ];

  get places() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._places];
  }
  constructor() {}
}
