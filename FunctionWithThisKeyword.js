// In javascript value of this keyword is decided at the time of execution
// Below are the ways in which we can call a function/method in javascript
// method: when we define a function inside an object (1)
// const obj =   {
//     name: "Vishal",
//     setName: function(){
//         console.log("My name is Vishal Baliyan")
//     }
// }

// function: A Normal function in javascript  (2)
// function setName(){
//     console.log("Name is ")
// }

//  as a constructor (3)

// const number = new Number("3");
// console.log(number);

// using inCall/bind/call  (4)

// function example(arg1 , arg2){
//     return arg1 + arg2;
// };

// console.log(example.call(undefined , 10,20));

// behaviour of this when envoked in normal function

// function example(){
//     console.log(this === global); // return true as this function is without any object;
// }
// example(); // true;

// function example() {
//   this.blog = "Learning javascript";
//   this.setBlog = function(blog) {
//     console.log(blog);
//   };
// };

// //example();
// console.log("blog is " , this.blog); // Learning Javascript
// this.setBlog("Learning Blog"); // Learning Blog

// In strict mode this refer to undefined

// function example(){
//     "use strict"
//     console.log(this === undefined);
// }
// example(); // true;

// function example(){
//     "use strict"
//     // in strict mode this refers to undefined
//     console.log(this === undefined);
//     // inner function
//     function inner(){
//       // in strict mode this refers to undefined
//       console.log("inside inner function" , this === undefined);
//   }
//     // invoke the inner function
//   inner(); }
//   example();
//   // true
//   // true

// IIFE( Immediately invoke function) when we invoke ant function IIFE it behave
//similar to above as it is a normal function

// When a function is declared inside an object the value of
// this inside that function will refer to the object it is declared in.

// context is et at the time of invocation

const example = {
  blog: "learnersbucket",
  displayBlog: function () {
    // this refers to the current object
    console.log(this === example);
    console.log(this.blog);
  },
};
example.blog = "MDN";
example.displayBlog();
// true
// "MDN"
