
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


// if statements

let age = 16;

if (age >= 18) {
    console.log("You're an adult!");
} else {
    console.log("You're a kid!");
}


// For Loop section

for (let i = 0;  i < 10; i++) {
    console.log(i);
}


console.log("This was a for-loop");

console.log("This is another for-loop");

let printValues = (array) => {
         let arrayLength = array.length
         for (let i = 0; i < arrayLength; i++) {
             console.log(array[i]);
       }
  }
    
  printValues([0, 3, 6, 7, 9]);
  

// ez egy function
colors.forEach(color =>  {
    console.log(color);
});

// ez egy másik function, első része az input/paraméter 
// f(x) = x * x
let myFunction = x =>  {
    console.log(x);
};

let greeter = name  => {
    console.log(`Hello, ${name}`);
    if (name === "Adam") {
        console.log("He is an adult");
    }
}
greeter("Adam");
greeter("Daniel");
greeter("Mark");
greeter("Marcell");
greeter("Judith");



console.log("This is the end of code. See you in the matrix");