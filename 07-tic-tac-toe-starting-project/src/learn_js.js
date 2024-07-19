const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];


// const updated=[...initialGameBoard];
const updated=[...initialGameBoard.map(inner=> [...inner])];
console.log(updated)