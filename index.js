// Program 1:
alert((Number(prompt("Number to check"))%2==0)?"input is even":"input is odd")

// Program 2:
let first_number = Number(prompt("Number 1:"))
let second_number = Number(prompt("Number 2:"))

if (first_number > second_number){
	alert(String(first_number) + " is greater than " + String(second_number))
} else if (first_number < second_number) {
	alert(String(first_number) + " is less than " + String(second_number))
} else {
	alert(String(first_number) + " is equal too " + String(second_number))
}

// Program 3:
let numbers = []
for (let i = 1; i <= 4; i++) {
	numbers.push(Number(prompt("Number "+i+":")));
}

numbers.sort();
numbers.reverse();

alert("The largest number is: " + String(numbers[0]));


// Program 4:
let sides = [];
for (i=1; i<=3; i++){
	sides.push(Number(prompt("Side "+i+":")));
}

if (sides[0] == sides[1] && sides[0] == sides[2]) {
	alert("Equilateral")
} else if (sides[0] == sides[1] || sides[1] == sides[2] || sides[2] == sides[0]) {
	alert("Isosceles")
} else {
	alert("Scalene")
}


// Program 5:
let operations = {
	"add": (a, b) => {return a+b;},
	"subtract": (a, b) => {return a-b;},
	"multiply": (a, b) => {return a*b},
	"divide": (a,b) => {return a/b},
	"modulus": (a,b) => {return a%b}
}

let num_1 = Number(prompt("num 1:"));
let num_2 = Number(prompt("num 2:"));
let operator = prompt("operator:");

if (operator in operations) {
	alert("The answer is: " + operations[operator](num_1, num_2))
} else {
	alert("Invalid operation")
}

