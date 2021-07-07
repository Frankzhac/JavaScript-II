// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function ditBonjour() {
  const name = "Elohim";
  function greet() {
    console.log("Bonjour " + name)
    }
    greet();
  }
console.log(ditBonjour());

// Another method to write closure
function daGod() {
  const king = "Elohim";
  console.log(`Hello from Earth! How are you ${Elohim}`)

  function planet() {
    const name = "Yashua";
    console.log(`Hello from above! Have you prayed to ${king}`)
  }
  planet();
}
console.log(daGod());
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
// const counter = () => {
//   // Return a function that when invoked increments and returns a counter variable.
// };
const counter = () => {
  let count = 0;

  return () => (++count);
  };
// // Example usage: const newCounter = counter();
// // newCounter(); // 1
// // newCounter(); // 2
//
// // ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// const counterFactory = () => {
//   // Return an object that has two methods called `increment` and `decrement`.
//   // `increment` should increment a counter variable in closure scope and return it.
//   // `decrement` should decrement the counter variable and return it.
// };
