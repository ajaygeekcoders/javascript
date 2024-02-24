// Keywords - var, let, const
// Local Variable, Global Variable, Block Scope Variable

/**
 * const
 * Can i redeclare with same variable name on same scope - No
 * Can i reassign the value in variable - no
 * Global Scope & Functional Scope & Block Scope
 */

const name = 'Ajay';
console.log(name);

//  Cannot redeclare block-scoped variable 'name'.
// Syntax Error - Identifier 'name' has already been declared
// const name = 'Pallavi'; // redeclare variable not possible - Error thrown -
// console.log(name); 

// const address = 'noida';
// address = 'Greater Noida'; // TypeError: Assignment to constant variable.

// console.log(address);

function get(){
    // it's a function scope variable. only available inside function
    const name = 'Nidhi';
    const data = 'Sahay';
}

get();
console.log(name);
// console.log(data); // ReferenceError: data is not defined

// i++ Assignment to constant variable.
// for(const i = 0; i < 2; i++){ // Block Scope
//     console.log({ i })
// }

// var doesn't support block scope
{ // This is called Block Scope
    const age = 10;
    console.log({ age });

    const phone = 10;
    console.log({ phone });
}

// console.log({ phone }); // ReferenceError: phone is not defined

// console.log({ age }) // Cannot access 'age' before initialization
const age = 11;
console.log({ age })