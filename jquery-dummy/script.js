// // below is an example of how jquery works
// // $(document).ready(function () {
// //   $(".container")
// //     .click(() => {
// //       console.log("clicked");
// //       alert("header");
// //     })
// //     .addClass("adding-back")
// //     .removeClass("back-drop");
// // });

// // custom jquery
// const myCustomJquery = function (selector) {
//   const elements = document.querySelectorAll(selector);

//   const myObj = {
//     click: function (cb) {
//       elements.forEach((ele) => {
//         ele.addEventListener("click", cb);
//       });
//       return myObj; // method chaining
//     },
//     addClass: function (cls) {
//       elements.forEach((ele) => {
//         ele.classList.add(cls);
//       });
//       return myObj;
//     },
//     removeClass: function (cls) {
//       elements.forEach((ele) => {
//         ele.classList.remove(cls);
//       });
//       return myObj;
//     },
//   };
//   return myObj;
// };

// myCustomJquery(".container")
//   .click(() => {
//     console.log("clicked");
//     alert("header");
//   })
//   .addClass("adding-back")
//   .removeClass("back-drop");
