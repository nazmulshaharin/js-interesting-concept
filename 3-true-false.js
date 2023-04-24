
/* 
any number positive or negative is truthy
but 0 = false vale

any string is truthy

'' is falsy
' ' is truthy
'0' is truthy
"false" is truthy
undefined is falsy
null  is falsy
NaN is falsy
[] is truthy
{} is truthy
*/
const x = parseInt('Hello');
console.log(x)
if(x){
  console.log('variable is truthy')
}
else{
  console.log('variable is falsy')
}


//
let y;
console.log('value of', y)
if(y){
  console.log('variable is truthy')
}
else{
  console.log('variable is falsy')
}