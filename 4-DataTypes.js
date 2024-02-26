/**
 * Primitive Data Type - (Reference by Value)
 * string, number, boolean, float, decimal, integer
 * Non-Primitive Data Type - (Reference by address)
 * - Array, Object
 */

// Primitive Data Type
let str = "Ajay";
let num = 10;
let int = 10;
let float = 10.20;
let decimal = 10.20;
let bool = true; // false;

// Non-Primitive Data Type
let array = ["string", 1, 10.20, true, [1, 2], { name: 'Aju' }]; // every value store at particulat index from 0 till the end of the array length
let object = { //  user defined key and value pair
    name: 'Ajay',
    age: 10,
    address: 'GWL'
};

// Primitive Data Type Does not change, you have to reassign the value 
let name = "Ajay";
console.log({ atZero: name[0] })
name[0] = "B";
console.log({ name })

// Non-Primitive Data Type does change when you change it,  you can reassign also the value to change 
let numArr = [1, 3];
console.log({ atZero1: numArr });
numArr[0] = 2;
console.log({ atZero2: numArr });

let objKey = {
    name: "Ajay",
}
objKey['name'] = "Aju";
console.log({ objKey })
objKey.name = "AK"; 
console.log({ objKey })
objKey.name[1] = "P"; // This will not work as it's NonPrimitve value
console.log({ objKey })





