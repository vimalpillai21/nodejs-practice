// const person = {
//     name: "VImal",
//     age: 20,
//     greet: () => {
//         console.log("Hi, I am " + this.name);
//     }
    // refers to global node runtime env
// }
// const person = {
//     name: "VImal",
//     age: 20,
//     greet: function() {
//         console.log("Hi, I am " + this.name);
//     }
// }
const person = {
    name: "VImal",
    age: 20,
    greet() {
        console.log("Hi, I am " + this.name);
    }
}
console.log(person);
console.log(person.greet())
// setTimeout(() => {
//     person.greet()
// },2000);