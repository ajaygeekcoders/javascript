/**
 * ReferenceError
 * SyntaxError
 * TypeError
 */

// Case - 0
// console.log(lastname); // ReferenceError: lastname is not defined

// Case - 1
// name;
// console.log({ name }); // ReferenceError: name is not defined

// Case - 2
// console.log({ name }); // ReferenceError: name is not defined

// Case - 3
// console.log({ name }); // ReferenceError: name is not defined
// name = 'Ajay';


// Case - 3
// console.log({ name }); // { name: undefined }
// name = 'Ajay';
// var name;

// Case - 1
// var name;
// console.log({ name }); // { name: undefined }

// Case - 2
// console.log({ name }); // { name: undefined }
// var name;

// Case - 1
// var name = 'Ajay';
// console.log({ name }); // { name: 'Ajay' }

// Case - 2
// console.log({ name }); // { name: undefined }
// var name = 'Ajay';


/**
 * LET
 */

// Case - 1
// let name = 'Ajay';
// console.log({ name }); // { name: 'Ajay' }

// Case - 1
// let name;
// console.log({ name }); // { name: undefined }

// Case - 2
// console.log({ name }); // ReferenceError: Cannot access 'name' before initialization
// let name = 'Ajay';

// Case - 2
// let name = 'Ajay';
// let name = 'Ajay'; // SyntaxError: Identifier 'name' has already been declared

/**
 * CONST
 */

// Case - 1
// const name = 'Ajay';
// console.log({ name }); // { name: 'Ajay' }

// Case - 2 // const need to be declare and assignment together
// const name; // SyntaxError: Missing initializer in const declaration


// Case - 3
// console.log({ name }); // ReferenceError: Cannot access 'name' before initialization
// const name = 'Ajay';

// Case - 4
// const name = 'Ajay';
// const name = 'Ajay'; // SyntaxError: Identifier 'name' has already been declared


// Case - 5
const name = 'Ajay';
name = 'Anshul'; // TypeError: Assignment to constant variable.
