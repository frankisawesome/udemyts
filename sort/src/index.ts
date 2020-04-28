import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const sorter = new NumbersCollection([-5, 10, -8, 4]);
const sorter2 = new CharactersCollection('sdfSDxldSDFas');

const linkedList = new LinkedList();
linkedList.add(-5);
linkedList.add(10);
linkedList.add(-3);
sorter.sort();
sorter2.sort();
linkedList.sort();
console.log(sorter);
console.log(sorter2);
linkedList.print();
