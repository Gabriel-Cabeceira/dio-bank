const array: Array<number> = [17, 3, 9, 26, 18, 12, 6, 29, 5, 22, 15, 3, 9, 4, 21, 28, 11, 17, 7, 12, 28, 20, 25, 13, 30, 8, 23, 7, 18, 11, 29, 26, 8, 1, 14, 30, 13, 7, 19, 4, 27
];

const newArray: Array<string> = array.map(num => num.toString())

const findNumber = array.find(num => num === 12);


console.log(findNumber);



