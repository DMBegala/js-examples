
console.log("JavaScript is awesome")


let colors = ["green", "blue", "red"]

// "post" is an object

let post =  {
    title: "Interstellar",
    description: "Time and space travel",
    genre: "science fiction",
    lenght: 155,
    comments: ["extraordanairy", "Excellent", "piace of art"]
};

console.log(colors);
console.log(post);

let age = 16;

if (age >= 18) {
    console.log("You're an adult!");
} else {
    console.log("You're a kid!");
}


let printValues = (array) => {
         let arrayLength = array.length
         for (let i = 0; i < arrayLength; i++) {
             console.log(array[i]);
       }
  }
    
  printValues([0, 3, 6, 7, 9]);
  

console.log("The journey just begins");