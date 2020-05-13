import { Eventing } from './Eventing';
import Axios from 'axios';

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialise: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    Axios.get(this.rootUrl).then((res) => {
      this.models = res.data.map((item: K) => this.deserialise(item));
    });
    this.trigger('change');
  }
}
