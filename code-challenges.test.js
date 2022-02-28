// ASSESSMENT 2: Coding Practical Questions with Jest



// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("multThree", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("takes in an array of numbers and returns an array with all the numbers multipled by 3.", () => {

        const numbersArray1 = [6, 7, 8, 9, 10]
        // Expected output: [18, 21, 24, 27, 30]
        const numbersArray2 = [24, 27, 30, 33, 36]
        // Expected output: [72, 81, 90, 99, 108]
  
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(multThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
      expect(multThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    })
  })
// Got two red 


// b) Create the function that makes the test pass.

// create a function named multThree 
// map through the array 
// multiply by 3 for each value 
// return 


const multThree = (array) => {
    return array.map(value => value * 3)
}

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("evenThree", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("takes a number as an argument and decides if the number is evenly divisble by three or not.", () => {

        const num1 = 15
        // Expected output: "15 is divisible by three"
        const num2 = 0
        // Expected output: "0 is divisible by three"
        const num3 = -7
        // Expected output: "-7 is not divisible by three"
  
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(evenThree(num1)).toEqual("15 is divisible by three")
      expect(evenThree(num2)).toEqual("0 is divisible by three")
      expect(evenThree(num3)).toEqual("-7 is not divisible by three")
    })
  })

// Got two red 


// b) Create the function that makes the test pass.

// create a function evenThree with number as an argument
// use conditionals to determine if number is divisible by 3
// return the number is divisible by three using interpolation
// return numbers that are not disvisible by 3

const evenThree = (number) => {
    if (number % 3 === 0){
        return `${number} is divisible by three`
    } else {
        (number  % 3 === 0)
        return `${number} is not divisible by three`
    }
    
}


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("wordsCap", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("takes in an array of words and returns an array with all the words capitalized.", () => {

        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
        
  
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(wordsCap(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(wordsCap(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
  })

  // Got two red


// b) Create the function that makes the test pass.

// create a function wordsCap
// return map through the array 
// locate the index's and have the first letter capital in all values 

const wordsCap = (array) => {
    return array.map(value => value.charAt(0).toUpperCase() + value.substr(1))
}


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.


// a describe method that lists the name of the function OR naming of the particular test.
describe("firstVowel", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("takes in a string and logs the index of the first vowel.", () => {

        const vowelTester1 = "learn"
        // Expected output: 1
        const vowelTester2 = "academy"
        // Expected output: 0
        const vowelTester3 = "challenges"
        // Expected output: 2
        
  
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(firstVowel(vowelTester1)).toEqual(1)
      expect(firstVowel(vowelTester2)).toEqual(0)
      expect(firstVowel(vowelTester3)).toEqual(2)
    })
  })

// Got 2 red 


// b) Create the function that makes the test pass.

// create a function names firstVowel
// search through the string for vowels
// find the first vowel 
// return the index of first vowel 

const firstVowel = (string) => {
    vowels = /[aeiou]/i
    return string.search(vowels)
    }
