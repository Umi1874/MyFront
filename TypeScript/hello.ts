function sayHello(person: string) {
  return "hello" + person;
}

let user = "Umi";
console.log(sayHello(user));

let isDone: boolean = false;
isDone = Boolean(1);

interface Person {
  name: string;
  age?: number;
}

let tom: Person = {
  name: "Tom",
  //   age: 22
};

enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

class Animal {
  name: string;
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return `My name is ${this.name}`;
  }
}

let a = new Animal("Jack");
console.log(a.sayHi()); // My name is Jack
