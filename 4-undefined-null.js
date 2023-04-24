/* 
1. variable value not assigned
2.function but didn't write return anything
3. just wrote return but didn't return anything
4.parameter that isn't passed
*/

let first;
//console.log(first);

function second(x, y){
const sum = x + y;
return sum;
}

const total = second(5, 5);
console.log(total);