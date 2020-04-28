import { User } from './User';
import { Company } from './Company';
import { Map } from './Map';
import { IMarkable } from './IMarkable';

const map = new Map('map');

const markables: IMarkable[] = [];

for (let i = 0; i < 5; i++) {
  markables.push(new User());
  markables.push(new Company());
}

for (const markable of markables) {
  map.addMarker(markable);
}
