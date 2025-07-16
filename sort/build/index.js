"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() { }
}
const sorter = new Sorter([10, 3, 0, 4]);
sorter.sort();
console.log(sorter.collection);
