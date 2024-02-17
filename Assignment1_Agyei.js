//*Assignment questions covering objects, rest;spread; and ternary operator, map, filter, reduce, for of, for in, functions and this :

//1. Write a function that uses the spread operator to concatenate two arrays.
let SchoolEquip3 = ["school_bus","chalk","desks","computer"]
let ChurchEquip = ["microphone","speaker","pulpit","fm_receiver"]
const CombinedEquip = [...SchoolEquip3,...ChurchEquip]

console.log(CombinedEquip)

//2. Create an object called "person" with properties for name, age, and occupation.
const person = {
    name: "Agyei Darko Kelvin",
    age: 32,
    occupation: "civil engineer"
}
console.log(person.age)

//3. Use the ternary operator to check if a number is even or odd.
let userInput = ("Please input a number")
let outputMessage = userInput % 2===0 ? "Number is even" : "Number is odd"

//4. Implement a function that uses the map function to double each element in an array.

let eachElement = [1,2,3,4]
  let eachElement2 = eachElement.map(x=>x*2)

  console.log(eachElement2)

//5. Write a function that converts the first letter of an array of words into a uppercase letter and return a new array.
let capitalFirst = ["microphone","speaker","pulpit","fm_receiver"]
   let capitalFirstLet=  capitalFirst.map(capitalFirst => capitalFirst.charAt(0).toUpperCase() + capitalFirst.substring(1))

//6. Use the reduce function to find the sum of all elements in an array.
let elements = [525, 600, 585, 1000, 400, 610]

  let elementsSum = elements.reduce((elementsSum, elements) => {
         return elementsSum + elements
      }, 0)

//7. Write a function that uses the rest operator to sum an arbitrary number of arguments.
//8. Implement a function that uses the this keyword to access a property of an object.
let car2 = {
    make : "nissan",
    model : "patrol",
    year: 2020,
    accessProperty: function(){
        return this.make
    },
    accessAllProperties: function(){
        return this.year +''+ this.make + '' + this.model
    }
}

//9. Create an object called "car" with properties for make, model, and year.
let car = {
    make : "nissan",
    model : "patrol",
    year: 2020
    
    }
//10. Use the spread operator to create a copy of an array.
let SchoolEquip = ["school_bus","chalk","desks","computer"]
const copySchool = [...SchoolEquip]
console.log(copySchool)

//11. Write a function that uses the ternary operator to check if a number is positive, negative, or zero.

//12. Implement a function that uses the map function to convert an array of strings to uppercase.
let SchoolEquip6 = ["school_bus","chalk","desks","computer"]
let upperCase = SchoolEquip6.map((str) => str.toUpperCase())

//13. Use the filter function to return only strings that contain a specific substring from an array.
let ChurchEquip2 = ["microphone","speaker","pulpit","fm_receiver"]
let substrbyFiltering = ChurchEquip2.filter((str) => str.includes(substring))

//14. Create a function that uses the reduce function to find the maximum value in an array.
let elements3 = [525, 600, 585, 1000, 400, 610]
let maxValue = elements3.reduce((max , num) => (num > max ? num : max), elements3[0])

//15. Use the for...in loop to iterate over the keys of an object and print each key.
//let object =
let book5 = {
    title3 : "The 7 men",
    author4 : "Eric Metaxas",
    publication_year2: 2015
    }
    for (let key in book5){
        console.log(key)
    }

//16. Write a function that uses the rest operator to concatenate an arbitrary number of strings.
//17. Implement a function that uses the this keyword to call a method of an object.
//18. Create an object called "book" with properties for title, author, and publication year.
 book = {
    title : "The 7 men",
    author : "Eric Metaxas",
    publication_year: 2015
    }

//19. Use the spread operator to merge two objects into a new object.
let bag = {
    books: "science",
    pencils: "nataraj",
    pens: "big",
 }
  
let hall ={
     fridge: "nasco",
     television: "phillips",
     iron: "binatone"
}
    combinedItems = ({...bag, ...hall})


//20. Write a function that uses the ternary operator to check if a string is empty or not.
let checkEmptiness = (str) =>

str===" " ? "empty":"not empty"

//21. Implement a function that uses the map function to calculate the square of each element in an array.
let elements4 = [525, 600, 585, 1000, 400, 610] 

let squaredNumbers = elements4.map(num => num*num)
//22. Use the filter function to return only numbers that are divisible by a specific value from an array.

let elements8 = [525, 600, 585, 1000, 400, 610]

div =  elements8.filter( x => x % 1000 === 0)
console.log(div) 


//23. Create a function that uses the reduce function to find the average value of an array.
let cost =[15,25,35,45,55,65]
let averageValue = cost.reduce ((acc, num) => acc + num, 0) / cost.length
console.log (averageValue)

///24. Use the for...of loop to iterate over the words of a string and print each word.
let freedom = (str) => { 
for (let word of str.split(" ")){
      console.log(word) 
}
}

//25. Write a function that uses the rest operator to find the maximum value in an arbitrary number of arguments.
//26. Implement a function that uses the this keyword to update a property of an object.

let bagofme = {
    books: "science",
    pencils: "nataraj",
    pens: "big",
 }
  let propertyUpdate = function(update){
    this.pencils = update

  }
  let bagofme2 = {pencils: "nataraj", propertyUpdate}
  bagofme2.propertyUpdate("k4lofty")

