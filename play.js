let  name = 'Vimal';
const age = 29;
var hasHobbies = true;
// age = 45;
function summarizeUser(userName,userAge, userHasHobby){
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    )
}

console.log(summarizeUser(name,age,hasHobbies));