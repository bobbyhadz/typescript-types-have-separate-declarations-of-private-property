export { };

// Types have separate declarations of a private property in TS

// EXAMPLE 1 - Remove the private visibility modifier from the properties in the child class

class Person {
  constructor(private name: string, private age: number) { }
}

class Developer extends Person {
  // ✅ removed private modifiers
  constructor(name: string, age: number) {
    super(name, age);
  }
}

// ---------------------------------------------------

// // EXAMPLE 2 - Using `protected` visibility instead

// class Person {
//   // 👇️ protected (accessible from subclasses)
//   constructor(protected name: string, protected age: number) { }
// }

// class Developer extends Person {
//   constructor(name: string, age: number) {
//     super(name, age);

//     // 👇️ can access protected members
//     console.log(this.name);
//     console.log(this.age);
//   }
// }

// const dev = new Developer('Bobby Hadz', 30);
// console.log(dev);

// ---------------------------------------------------

// // Property is private in type 'X' but not in type 'Y' in TS

// // EXAMPLE 3 - Remove the `public` identifier to solve the error

// class Person {
//   constructor(private name: string, private age: number) { }
// }

// class Developer extends Person {
//   constructor(name: string, age: number) {
//     super(name, age);
//   }
// }

// ---------------------------------------------------

// // EXAMPLE 4 - Changing visibility to protected

// class Person {
//   // 👇️ protected (accessible in subclasses)
//   constructor(protected name: string, protected age: number) { }
// }

// class Developer extends Person {
//   constructor(name: string, age: number) {
//     super(name, age);
//   }

//   logProps() {
//     console.log(this.name);
//     console.log(this.age);
//   }
// }

// ---------------------------------------------------

// // EXAMPLE 5 - Using readonly modifier

// interface Employee {
//   salary: number;
// }

// class Tester implements Employee {
//   // 👇️ is readonly
//   readonly salary = 0;
// }

// const tester = new Tester();

// console.log(tester.salary); // 👉️ 0

// ---------------------------------------------------

// // EXAMPLE 6 - Using a setter and a getter to solve the error

// interface Employee {
//   salary: number;
// }

// class Tester implements Employee {
//   // 👇️ private (only accessible in this class)
//   private _salary = 0;

//   // 👇️ accessible from outside
//   get salary() {
//     // 👉️ your implementation
//     return this._salary;
//   }

//   // 👇️ protected (can access in subclass)
//   protected set salary(num: number) {
//     this._salary = num;
//   }
// }

// const tester = new Tester();
// console.log(tester.salary); // 👉️ 0