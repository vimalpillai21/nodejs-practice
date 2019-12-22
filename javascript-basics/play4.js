const person = {
    name: 'Vimal',
    age: 29,
    // greet: function(){
    greet(){    
        console.log('Hi, I am '+ this.name);
    }
}

person.greet();