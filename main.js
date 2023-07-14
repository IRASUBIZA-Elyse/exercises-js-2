
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((names) => names.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]



// second way

// function lCat(cat) {
//   return cat.startsWith("L");
// }

// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// const filtered = cats.filter(lCat);

// console.log(filtered);
// // [ "Leopard", "Lion" ]

