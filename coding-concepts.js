// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Alpha 2022"
// console.log(cohort.split(""))

// a) Your answer: ["A", "l", "p", "h", "a", "2", "0", "2", "2"]
// b) Verify and explain: 
// [
//   'A', 'l', 'p', 'h',
//   'a', ' ', '2', '0',
//   '2', '2'
// ]
// .split("") will seperate each character from a string and and turn it to an array.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: answer: undefined There was no return 


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: Answer: [ 8, 10, 12, 14, 16 ] .map iterates through the array and the value is being mulitplied by 2


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [ 11, 13, 15]
// b) Verify and explain: answer: [ 11, 13, 15 ] .filter loops through the array and returns a new array. the % 2 !== 0 is searching for odd numbers. the return will only be an array of odd numbers from the original array.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: ["JavaScript"]
// b) Verify and explain: Answer: JavaScript. inside myCodingSkills there is 4 keys. one key is languages. Languages is holding value pairs which were ["JavaScript", "Ruby"], and we are calling on languages at 0 index which would be JavaScript. Just returns JavaScript not an array.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Alpha",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: [George, "Alpha", 2022]
// b) Verify and explain: Answer: Learn { student: 'George', cohort: 'Alpha', year: 2022 }. new Learn is entering the string "George" into the object and will output the information with the new input added.


