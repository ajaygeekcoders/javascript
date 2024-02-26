// Keywords - var, let, const
// Local Variable, Global Variable, Block Scope Variable

/**
 * var
 * Can i redeclare with same variable name on same scope - Right
 * Can i reassign the value in variable - Right
 * Global Scope & Functional Scope
 */

var name = 'Ajay';
console.log(name);

var name = 'Anshul'; // redeclare variable
console.log(name); 

var address = 'noida';
address = 'Greater Noida'; // reassigment value

console.log(address);

lastname = 'Dubey'

console.log(lastname);

function get(){
    // it's a function scope variable. only available inside function
    var name = 'Anshul';
    var data = 'Dubey';
}

get();
console.log(name);
// console.log(data); // ReferenceError: data is not defined


for(var i = 0; i < 2; i++){
    console.log({ i })
}

// var doesn't support block scope
{
    var age = 10;
}
console.log(i);
console.log({ age })