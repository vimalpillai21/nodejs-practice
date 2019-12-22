const hobbies = ['sports','cooking'];
hobbies.push('Programming');
console.log(hobbies); 
// const copiedArray = hobbies.slice();
const copiedArray = [...hobbies];
console.log(copiedArray);
const person = {
    name: 'Vimal',
    age: 23,
    greet(){
        console.log('Hi, I am '+ this.name);
    }
}
// spread operator
const copiedPerson = {...person}
console.log(copiedPerson);

// rest operator

const toArray = (...args) =>{
    return args;
}
console.log(toArray(1,2,3,4));