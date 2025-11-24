// a
const username="Shruti";
const course="Full Stack Web Development";
console.log(`Hello ${username}, welcome to the ${course} course!`);

//b
const studentname = "Sam";
const age = 21;
const student = {
  studentname,
  age,
  greet() {
    console.log("Hello");
  }
};

//c
const getFullName=(first,last) =>`${first} ${last}`;