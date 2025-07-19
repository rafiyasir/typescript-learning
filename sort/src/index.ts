import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./sorter";

const numbersCollection = new NumbersCollection([10, 3, 0, 4]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("Rafi");
// const charactersSorter = new Sorter(charactersCollection);
// charactersSorter.sort();
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(34);
linkedList.add(5);
linkedList.add(-6);
linkedList.add(2);
// const linkedListSorter = new Sorter(linkedList);
// linkedListSorter.sort();
linkedList.sort();
linkedList.print();
