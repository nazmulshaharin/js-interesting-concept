/* 
data type:
  *primitive
1.number
2.string
3.boolean
4.undefined
5.null
6.symbol

  *non-primitive
  7.object
*/

let a = 'hello';
let b = a;
console.log(a, b);

a = 'gello';
console.log(a, b);


//
const x = {job: 'web developer'}
const y = x;
console.log(x, y);

y.job = 'front end develoer';
console.log(x, y);