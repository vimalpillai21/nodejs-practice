let  name = 'Vimal';
const age = 29;
var hasHobbies = true;
// age = 45;
// function summarizeUser(userName,userAge, userHasHobby){
//     return (
//         'Name is ' +
//         userName +
//         ', age is ' +
//         userAge +
//         ' and the user has hobbies: ' +
//         userHasHobby
//     )
// }

const summarizeUser = (userName,userAge,userHasHobby) => {
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    )
}

const add = (a,b) => a + b;
const addOne = a => a + 1;
const addRandom = () => 1 + 2;
console.log(add(1,2));
console.log(addOne(2));
console.log(addRandom());
console.log(summarizeUser(name,age,hasHobbies));