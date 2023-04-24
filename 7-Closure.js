function stopWatch(){
  let counter = 0;
  return function(){
    counter++;
    return counter;
  }
}
let clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());

function watch(){
  let start = 5;
  return function(){
    start++;
    return start;
  }
}
let clock = watch();
console.log(clock());
console.log(clock());
console.log(clock());


//interview question
//1. what is closure