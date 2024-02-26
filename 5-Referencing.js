
/**
 * Primitive Data Type - Pass by value
 * Non Primitive Data Type - Pass by reference
 */



/**
 * Pass by value
 * When primitive data variable value assign to another varible, it pass their whole value not the reference
 * So, chaging the new variable value, doesn't affect the parent variable value
 */

// Pass by value, so name doesn't change even lname change
let name = "Ajay";
let lname = name;

// `name` and `lname` have same value
console.log({ name, lname }); 
lname = "Vijay";

// `lname` changed as we assign new value but it doesn't affect the `name` value
console.log({ name, lname }); 


/**
 * Pass by reference
 * Whene non-primitive data variable value assign to another variable, it pass their reference instead of value.
 * So, changing the new variable value, will affect the parent variable values also
 */

let arr = ["Ajay", "Aju"];
let newArr = arr;
console.log({ newArr, arr });
newArr[1] = "NS";
console.log({ newArr, arr });

/**
 * But it doesn't change the same value
 */
newArr[1][1] = "A"; // NS will not change to AS becaise NS is a non-primitive data, you can reasign the variable value to change it.
console.log({ newArr, arr });


let obj = {
    name: "Ajay",
    age: 10
};

let newObj = obj; // pass by reference
console.log({ newObj, obj });
newObj.name = "Dubey"; // chaging name to dubey will also change name in obj
console.log({ newObj, obj });
newObj.age = 12; // chaging age to 12 will also change age in obj
console.log({ newObj, obj });


newObj.name[0] = "A"; // dubey will not change to aubey, as it's primitive data type
console.log({ newObj, obj }); // unaffect by above change as it useless
