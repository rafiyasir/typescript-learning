"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const NumbersCollection_1 = require("./NumbersCollection");
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, 0, 4]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
numbersCollection.sort();
console.log(numbersCollection.data);
const charactersCollection = new CharactersCollection_1.CharactersCollection("Rafi");
// const charactersSorter = new Sorter(charactersCollection);
// charactersSorter.sort();
charactersCollection.sort();
console.log(charactersCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(34);
linkedList.add(5);
linkedList.add(-6);
linkedList.add(2);
// const linkedListSorter = new Sorter(linkedList);
// linkedListSorter.sort();
linkedList.sort();
linkedList.print();
