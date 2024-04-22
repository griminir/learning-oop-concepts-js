//4 pillars of OOP
//Encapsulation is the grouping of variables and functions that work on those variables together
//Abstraction reduces the impact of change, reduces complexity
//Inheritance helps eliminate redundent code
//Polymorphism makes the code prettier (can refactor switch/case statements)

//object literal
const circle = {
  //properties: holds values
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  //method: defines logic having more then 1 function makes the object have behavior
  draw: function () {
    console.log('draw');
  },
};
circle.draw();

//more real world example
let employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + this.overtime * this.rate;
  },
};
console.log(employee.getWage());

//factories used if object have methods to avoid duplicate code and having to fix code multiple places
function createEmployee(baseSalary, overtime, rate) {
  //if the the key and the value is the same you can just name the key
  return {
    baseSalary,
    overtime,
    rate,
    getWage: function () {
      return this.baseSalary + this.overtime * this.rate;
    },
  };
}

//now like a factory we can print object
const sam = createEmployee(50000, 0, 20);

console.log(sam.getWage());

//constructor function always big first letter
function MakeHuman(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.log = function () {
    console.log(this.name, this.age, this.gender);
    //by adding return this you can chain methods
    return this;
  };
  //you dont need to type function since its know its a function and it has a name with the (){}
  this.aging = function () {
    this.age++;
    return this;
  };
}

//the keyword new sets this to point to the empty object you are making
let firstHuman = new MakeHuman('adam', 1000000, 'male');
firstHuman.log().log();
firstHuman.aging().log().aging().log();

//making a class
class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }
  login() {
    console.log(this.email, 'just logged in');
  }
  logout() {
    console.log(this.email, 'just logged out');
  }
  updateScore() {
    this.score++;
    console.log(this.email, 'score is now', this.score);
    return this;
  }
}

const ryu = new User('r@gmail.com', 'ryu');
const hiro = new User('h@gmail.com', 'hiro');

//inheritance admin gets everything from its parent user
class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => {
      return u.email != user.email;
    });
  }
}

//need to put in what you need to make a user and an admin
//think of it as the child becoming more specialized
const master = new Admin('t@gmail.com', 'timmy');

let users = [ryu, hiro, master];

console.log(users);

master.deleteUser(ryu);

console.log(users);
