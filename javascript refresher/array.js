// const alpha=[1,2,3,4,2];

// console.log(alpha.findIndex((item)=>{
//     return item===2;
// }));



const beta=['a','b','c','d']

beta.forEach((item)=>{
    console.log(item+'z')
})
// console.log(beta)
let returned=beta.map((item)=>{
    return item+'cd';
})
console.log(returned)
// console.log(beta)



// let ftar=[1,[2,3],[4,[5,[6]]]]
// console.log(ftar.flat(0))