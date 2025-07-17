"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const sorter_1 = require("./sorter");
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, 0, 4]);
const sorter = new sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
