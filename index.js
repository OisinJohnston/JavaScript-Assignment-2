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

let numbers = [for (i of ["1","2","3"]) Number(prompt("Number " + i + ":"))];
numbers.sort();
numbers.reverse();

alert("The largest number is: " + String(numbers[0]))

