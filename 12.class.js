// let u = {
//   name: "",
//   email: "",
//   password: "",
// };

// let u1 = {
//   name: "",
//   email: "",
//   password: "",
// };

// let u2 = {
//   name: "",
//   email: "",
//   password: "",
// };

//! class
// constructor

class User {
  //   name;
  //   email;
  #password;
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.#password = password;
  }

  // * method
  getPassword() {
    return this.#password;
  }

  introduce() {
    console.log("this is user class");
  }
}

const u = new User("John", "john@gmail.com", "12345432");
const u1 = new User("John", "john@gmail.com", "12345432");
u1.introduce();
// console.log(u);
// console.log(u1);
// console.log(u.email);
// console.log(u.getPassword());

//* Student (name ,email,password , faculty , roll , year)
// class Student {
//   #password;
//   constructor(name, email, password, faculty, roll, year) {
//     this.name = name;
//     this.email = email;
//     this.#password = password;
//     this.faculty = faculty;
//     this.roll = roll;
//     this.year = year;
//   }
//   getPassword() {
//     return this.#password;
//   }
// }

//!Inheritance

class Student extends User {
  // super()
  constructor(name, email, password, faculty, roll, year) {
    super(name, email, password);
    this.faculty = faculty;
    this.roll = roll;
    this.year = year;
  }
  introduce() {
    console.log("this is student class");
  }
}
const student = new Student(
  "John",
  "john@gmail.com",
  "12345432",
  "BCT",
  23,
  2017,
);
console.log(student);
console.log(student.getPassword());
student.introduce();

//todo: static method , getter , setter
//todo: this keyword

// class Teacher extends Student {

// }
