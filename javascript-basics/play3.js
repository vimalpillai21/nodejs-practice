var name = 'Vimal';
var age = 29;
var hasHobbies = true;

const summarizeUser = function(userName, userAge, userHasHobby){
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: '+
    userHasHobby;
}
console.log(summarizeUser(name,age,hasHobbies));


const summarizeUser = (userName, userAge, userHasHobby) =>{
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: '+
    userHasHobby;
}

const add = (a,b) => {
    return a + b;
}
const add = (a,b) => a+1;
const addOne = a => a + 1;
console.log(add(1,2));

const addRandom = () => 1 + 2;