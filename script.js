/* -------------------------------------------------------------------------- */
/*                                    EASY                                    */
/* -------------------------------------------------------------------------- */
let run = (x) =>{ x == "run" ? console.log(`Today's excersise: running`) : console.log(`Not Valid`)};
let swim = (x) =>{ x == "swim" ? console.log(`Today's excersise: swimming`) : console.log(`Not Valid`)};
run();
swim("swim");

/* -------------------------------------------------------------------------- */
/*                                   MEDIUM                                   */
/* -------------------------------------------------------------------------- */
let pizza = 8;
let cutPizza = (x) => {
    let share = pizza / x 
    console.log(`For ${x} people, each person get ${share} slices.`)
}
cutPizza(4);

/* -------------------------------------------------------------------------- */
/*                                    HARD                                    */
/* -------------------------------------------------------------------------- */
// let pii = {
//     fname: "John",
//     ssn: (x) => {x == 1234 ? console.log(`${pii.fname} is the name and you have access to the SSN!`) : console.log(`${pii.fname} is the name and you don't have access to the SSN!`)}
// };
// pii.ssn(3321)

// let pii = {
//     fname: "Jane",
//     ssn: 123456789,
//     getDetails: (x) => {x == 1234 ? console.log(pii.fname, pii.ssn) : console.log(pii.fname)}
// };
// pii.getDetails(3456);

// THE # IS USED TO MAKE A PROPERTY PRIVATE
class Person {
    name = "Joe";
    #ssn = 1234;
    constructor(name, ssn) {
    this.name = "Joe";
    this.#ssn = 1234;
    }
}
const person1 = new Person();
console.log(person1)
/* -------------------------------------------------------------------------- */
/*                                  VERY HARD                                 */
/* -------------------------------------------------------------------------- */
class Person {
    constructor(name, job, age) {
        this.name = "John";
        this.job = "Coder";
        this.age = 21;
    }
    exercise(){
        console.log(`Running is fun!`);
    }
    fetchJob(){
        console.log(`${this.name} is a ${this.job}`);
    }
}
let nPerson = new Person()
console.log(nPerson)
// DECLARING PROGRAMMER TO INHERIT PROPERTIES FROM PERSON
class Programmer extends Person{
    constructor(languages, busy){
        super();
        this.languages = "Spanish";
        this.busy = true;
    }
    completeTask(){
        this.busy = false;
    }
    acceptNewTask(){
        this.busy = true;
    }
    offerNewTask(){
        (this.busy == true) ? console.log(`Mark can't accept any new tasks right now.`) : console.log(`Mark would love to take on a new responsibility.`);
    }
    learnLanguage(languages){
        this.languages = languages;
    }
    listLanguage(){
        console.log(this.languages)
    }
}
let nProgrammer = new Programmer()
nProgrammer.learnLanguage("English")
nProgrammer.listLanguage()

// // let person = {
// //     fname: "John",
// //     job: "Coder",
// //     age: "21",
// //     MoreDetails: (x) => {
// //         this.exercise = console.log(`${person.fname} like to run!`),
// //         this.fetchJob = console.log(`${person.fname} is a ${person.job}!`)
// //     }
// // }
// // console.log(person)
// Person with property
// let person = {
//     fname: "John",
//     job: "Coder",
//     age: "21",
//     exercise(){
//         person.exercise = "Run"
//         console.log(`${person.fname} likes to run!`)
//     },
//     fetchJob(){
//         console.log(`${this.fname} is a ${this.job}.`)
//     }
// };
// person.exercise();
// console.log(person)
// person.fetchJob();

// let programmer = {
//     languages: "English, Spanish",
//     busy: true
// };
// programmer.__proto__=person;
// console.log(programmer);


