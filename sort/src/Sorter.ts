interface Sortable {
  swap(i: number, j: number): void;
  compare(i: number, j: number): boolean;
  length: number;
}

export abstract class Sorter implements Sortable {
  abstract swap(i: number, j: number): void;
  abstract compare(i: number, j: number): boolean;
  abstract length: number;

  sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
