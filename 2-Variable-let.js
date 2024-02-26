// Keywords - var, let, const
// Local Variable, Global Variable, Block Scope Variable

/**
 * let
 * Can i redeclare with same variable name on same scope - No
 * Can i reassign the value in variable - Right
 * Global Scope & Functional Scope & Block Scope
 */

let name = 'Ajay';
console.log(name);

//  Cannot redeclare block-scoped variable 'name'.
// Syntax Error - Identifier 'name' has already been declared
// let name = 'Anshul'; // redeclare variable not possible - Error thrown -
// console.log(name); 

let address = 'noida';
address = 'Greater Noida'; // reassigment value

console.log(address);

function get(){
    // it's a function scope variable. only available inside function
    let name = 'Anshul';
    let data = 'Dubey';
}

get();
console.log(name);
// console.log(data); // ReferenceError: data is not defined


for(let i = 0; i < 2; i++){ // Block Scope
    console.log({ i })
}
// console.log(i); // ReferenceError: i is not defined
// var doesn't support block scope
{ // This is called Block Scope
    let age = 10;
    console.log({ age });

    let phone = 10;
    console.log({ phone });
}

// console.log({ phone }); // ReferenceError: phone is not defined

// console.log({ age }) // Cannot access 'age' before initialization

let age = 11;
console.log({ age })