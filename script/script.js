// alert
//     ("enter something")
//     console.log("this is really fun")

// for (let i = 2; i <= 1024; i = i * 2){
//     console.log(i)
//   }

// let i = 1;
// while (i < 1024){
//     i = i * 2;
//     console.log(i);
//   }

// let input = ""

// do{
//     input = prompt("What is your name?: ")}
//     while(Number(input) || input == 0);

// alert(`Welcome ${input}`);

// let fruits = ['Apple', 'Banana'];

// fruits.push("Oranges");
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// fruits.unshift("Mango");
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// const person ={
//     name: ['bob', 'smith'],
//     age: 32,
//     gender: 'male',
//     interests: ['music', 'skiing'],
// }

// console.log(`My name is ${person.name[0]} ${person.name[1]} i am interested in ${person.interests[0]} and ${person.interests[1]}`)
// for (let prop in person){
//     console.log(person[prop])
// }

let student1 = {
  ID: "A00022",
  GPA: 3.0,
  program: "CIT",
};

let student2 = {
  ID: "A01000",
  GPA: 3.1,
  program: "CST",
};

let student3 = {
  ID: "A00114",
  GPA: 3.2,
  program: "CIT",
};
let students = [student1, student2, student3];
let counter = 0;

for (let student of students) {
  if (student.program == "CIT" && student.GPA > 3) {
    counter++;
    console.log(student)
  }
}
console.log(counter);
