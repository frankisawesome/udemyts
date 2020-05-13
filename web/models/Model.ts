import { AxiosPromise, AxiosResponse } from 'axios';

interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];

  set(value: T): void;

  getAll(): T;
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;

  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;

  trigger(eventName: string): void;
}

interface Identifiable {
  id?: number;
}

export class Model<T extends Identifiable> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {
    this.on('change', () => this.save());
  }

  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;

  set(updates: T): void {
    this.attributes.set(updates);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id).then((res: AxiosResponse): void => {
      this.set(res.data);
    });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  }
}
