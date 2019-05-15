// ok steps to accomplish the JS part of this project.
// create switch statement for sorting
// set user form inputs as variables to save the information to push through switch statement
// on submit the users values are printed out on the DOM with the dog being categorized within the output  



// switch statement in non doc ready


// value 
const dogCategory = $('input[value=""]');

switch (dogCategory) {
    case 1:
        console.log("Your dog is a Pupperino!");
        break;
    case 2:
        console.log("Your dog is a Bean!");
        break;
    case 3:
        console.log("Your dog is a Puppo!");
        break;
    case 4:
        console.log("Your dog is a Pupper!");
        break;
    case 5:
        console.log("Your dog is a Woofer!");
        break;
    case 6:
        console.log("Your dog is a Boofer!");
        break;
    case 7:
        console.log("Your dog is a Big Boofer!");
        break;
    default:
        console.log("Ruh Roh! Try Again!");
}


$(function () {
    $('form').on('submit', function () {
        console.log('woof woof!')
    });
});