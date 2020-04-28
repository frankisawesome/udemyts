const profile = {
  age: 5,
  name: 'something',
  coords: {
    lat: 5,
    lng: 5
  },
  setAge(age: number) {
    this.age = age;
  }
};

const { age }: { age: number } = profile;

const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;

console.log({ coords: { lat, lng } });
