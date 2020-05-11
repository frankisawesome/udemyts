import axios, { AxiosPromise } from 'axios';

interface Identifiable {
  id?: number;
}

export class Sync<T extends Identifiable> {
  constructor(public rootUrl: string) {}
  public fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  public save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      console.log(id);
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}
