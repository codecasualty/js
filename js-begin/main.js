// //  js is not statically type meaning we dont to specify type of variable to assign value
// // alert is function of window object
// // alert(1);
// // console.log('hello world');
// // console.error('this is an error');
// // console.warn('this is an error');

// // three type for variables 
// // var for global scope
// //let we can reassing value has block scope
// //const which cannot be changed

// // const age = 20;
// // // age = 2;not allowed to change const value
// // console.log(age);

// // let score = 212;
// // console.log(score);

// // various datatypes in js
// // String , Numbers , Boolean , null , undefined
// // for string we can use single '' of double quotes ""
// // but its good to use single quotes ''
// const name = 'subodh';
// //for numbers therer are no decimal or floating or integers they are just numbers
// // remember js is interpreted language
// const age = 23;
// const rating = 3.3;
// //for boolean we just assing value to variable as true or false
// const isOk = false;
// //for is like the value of referece but the return type of the variable which
// // holds null is object which is bogus
// const ref = null;
// //the undefined means the value is not assigned
// //by doing this even though value was not assigned to val
// //still it wont give error else the statement like const val;
// //would give error as const val is not initialized
// const val = undefined;
// // the above value is same as the below one
// let newval;

// // console.log(typeof name);//string
// // console.log(typeof age);//number
// // console.log(typeof rating);//number
// // console.log(typeof isOk);//boolean
// // console.log(typeof ref);//object
// // console.log(typeof val);//undefined
// // console.log(typeof newval);//undefined

// // console.log(name);//subodh
// // console.log(age);//23
// // console.log(rating);//3.3
// // console.log(isOk);//false
// // console.log(ref);//null
// // console.log(val);//undefined
// // console.log(newval);//undefined


// // //concatenation of strings
// // //old method also use in jave string concatenation
// // console.log('my name is '+name+' my age is '+age);
// // //the better way is to use template string just like bash
// // const appendedstring = `my name is ${name} and my age is ${age}`
// // console.log(appendedstring);


// // const s = 'hello world';
// // //whenever we use property of variable or object we dont use paranthese () 
// // // for example 
// // console.log(s.length);
// // // but for functions we use parantheses
// // console.log(s.toUpperCase());
// // console.log(s.toLowerCase);
// // // [0,5)
// // console.log(s.substring(0,5));
// // // to split string we use split(character by which we want to split)
// // this will split it on each character and return character array
// // console.log(s.split(''));
// // console.log(s.split('n'));

// //arrays
// const number = new Array(1,2,3,4,'hello');
// console.log(number);

// const values = ['apples' , 'oranges' , 33 , false];
// // we can add element at any index in cont array but can't use
// // values = [] this kind of reassignment is not allowed
// // console.log(values);
// values[0] = 'hell'
// //we know the last index of array then we can  use below method
// values[4] = 'hello';
// //but if we dont know last index of array
// values.push('last element');
// //add to first index
// values.unshift('first element');
// // console.log(values);

// //removing last element 
// values.pop();
// console.log(values);
// //to check if some value is array or not the parameter
// //the below line returns true as this is array
// console.log(Array.isArray(values))
// // the below line returns false as it is not array
// console.log(Array.isArray('hellow'));

// // to find the index of element in array we use indexOf method
// console.log(values.indexOf('hell'));

// objects literals are like KV pairs
const person = {
    firstName : 'subodh',
    lastName : 'latkar',
    Address : {
        street_name : 'phc road',
        village : 'shahapur'
    },
    contact : 90909090,
    cgpa : 8.58
}
// console.log(person , person.Address.village);
// we can also add properties like
person.email = 'hello@gmail.com';
person.Address.city = 'bhandara';
// console.log(person);

// arrays of object

const todos = [

    {
        id : 1,
        task : 'coding',
        done : false
    },
    {
        id : 2,
        task : 'watching series',
        done : true
    },
    {
        id : 3,
        task : 'exercise',
        done : false
    }

]

// console.log(todos[1].task ,  todos[1].done);

// json is dataformat for sending and receiving data to and from server and similar to objects literals
// to convert our todos array in JSON format we can use method stringify

// const todosJSON = JSON.stringify(todos);
// console.log(todosJSON);

// // loops
// // for loops

// for(let i = 0;i <= 10;i++){
//     console.log(`in for loop the value of i is ${i}`);
// }

// let i =0;
// while(i <= 10){
//     console.log(`in while loop the value of i is ${i}`    );
//     i++;
// }

// for(let i = 0;i < todos.length;i++){
//     console.log(`the value of text in ${i} iteration is ${todos[i].task}`);
// }

// // there are different kind of loops like forEach(just loops through them) , map (which return a new array itself ), filter (it return array element based on some specific condition)

// // 1
// // this syntax is easier to remember as it literally means get me ele of todos
// for(ele of todos){
//     console.log(ele.id);
// }
// // forEach is highorder array method which take parameter as function() and the parameter to function is the name throught which you will refer to each
// // element of array
// todos.forEach(function(todo){
//     console.log(todo.task);
// } )

// const newTodos = todos.map(function(todo){
//     return todo.id;
// })

// console.log(newTodos);

// const filterTodos = todos.filter( function(todo){
//     return todo.done === true; 
//     // todo.done ; this is also correct
// } 
// )

// console.log(filterTodos);

// // we can also apply two higherfunction one onto another
// const higherOrder = todos.filter(
//         function(todo){
//             return !todo.done;
//         }
// ).map(function(todo){
//     return todo.id;
// });

// console.log(higherOrder);

// difference between == and ====
// == is used to check if values are equals
// === is used to check if data and values both are same

let x = '3';
if( x === 3){
    console.log('they are same');
}
// its better to use === as it checks the data and type both

// here to declare a funtion we use a keyword called as function and
// if the default values are not assigned then call to funtion addNums with addNums() will return NaN
// thus to avoid these errors we use num1 = 1 , num2 = 1 basically assigning some default values to function parameter

// function addNums(num1 = 1 , num2 = 2){
//     return num1 + num2;
// }

// console.log(addNums(3,3));


// Constructor function
// But in these function the getBirthYear instance variable get displayed in the object itself
// but we want them to be able to be seen in prototype for that we follow next method

// function Person(firstName , lastName , dob){
//     // these three lines are to assign the values which we get from the parameters
//     this.firstName= firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);

//     // the below function is to get year of dob
//     this.getBirthYear = function(){
//         return this.dob.getFullYear();
//     }

//     // the below function gets fullname and set it variable getFUllName
//     this.getFullName = function(){
//         return `this persons full name is ${firstName} ${lastName}`; 
//     }

// }


// const person1 = new Person('hello' , 'world' , 2-3-2002);
// const person2 = new Person('helsfsffsdflo' , 'wfsdld' , 3-6-1970);

// console.log(person1);
// console.log(person2.getBirthYear());
// es5
// function Person(firstName , lastName , dob){
//     // these three lines are to assign the values which we get from the parameters
//     this.firstName= firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);

// }

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }

// Person.getFullName = function(){
//     return `this persons full name is ${firstName} ${lastName}`; 
// }

// const person1 = new Person('hello' , 'world' , 2-3-2002);
// const person2 = new Person('helsfsffsdflo' , 'wfsdld' , 3-6-1970);

// console.log(person1);
// console.log(person2.getBirthYear());

// from es6 or es2015 which adds classes also knows as syntactic sugar
// this one is same as in java with some modification in return type as
// here we don't have return types but in java we do have

class Person{
    constructor(firstName , lastName , dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getFullName(){
        return this.firstName+''+this.lastName;
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
}

const person1 = new Person('hello' , 'world' , 2-3-2002);
const person2 = new Person('helsfsffsdflo' , 'wfsdld' , 3-6-1970);

console.log(person1);
console.log(person2.getBirthYear());