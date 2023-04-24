 function welcomeMessege(name, greetHandler){
  //console.log(greetHandler);
  greetHandler(name);
} 
const names = ['nazmul', 'shaharin', 'rahim', 'karim'];
console.log(names);

function greetAfternoon(name){
  console.log('Good Afternoon', name);
}
welcomeMessege('sakib hax', greetAfternoon);
welcomeMessege('Tom hax', greetAfternoon);
//

function newmessege(namee, address){
  address(namee);
}
function greetMorning(name){
  console.log('Good morning', name)
}

newmessege('Shaharin', greetMorning);

//
function newFunction(name1, name2){
  name2(name1);
}
function goodNight(newName){
  console.log('Good night', newName);
}

newFunction('Nazmul shaharin', goodNight);