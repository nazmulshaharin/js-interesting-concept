// global scope
//local scope
//block scope [let, const]
function add(first, second){
  const result = first + second;
  console.log(result);
  return result
}
const sum = add(25, 5);