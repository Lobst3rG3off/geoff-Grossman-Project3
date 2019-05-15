// ok steps to accomplish the JS part of this project.
// create switch statement for sorting
// set user form inputs as variables to save the information to push through switch statement
// on submit the users values are printed out on the DOM with the dog being categorized within the output  



// switch statement in non doc ready


// variable  of dog name

function sortDog() {
    const dogName = $('.dogName').value();
    console.log('the dog name', dogName);
    //variable for dog girth
    const dogCategory = $('select.dogSorter').val();
    console.log('the dog category', dogCategory);
    console.log(typeof dogCategory);
    switch (dogCategory) {
        case '1':
            console.log("Your dog is a Pupperino!");
            $('.landingPad').empty()
$('.landingPad').append('<p>Your dog is a Pupperino!</p>')
            break;
        case '2':
            console.log("Your dog is a Bean!");
            $('.landingPad').append('<p>Your dog is a Pupperino!</p>')
            break;
        case '3':
            console.log("Your dog is a Puppo!");
            $('.landingPad').append('<p>Your dog is a Puppo!</p>')
            break;
        case '4':
            console.log("Your dog is a Pupper!");
            $('.landingPad').append('<p>Your dog is a  Pupper!</p>')
            break;
        case '5':
            console.log("Your dog is a Woofer!");
            $('.landingPad').append('<p>Your dog is a Woofer!</p>')
            break;
        case '6':
            console.log("Your dog is a Boofer!");
            $('.landingPad').append('<p>Your dog is a Boofer!</p>')
            break;
        case '7':
            console.log("Your dog is a Big Boofer!");
            $('.landingPad').append('<p>Your dog is a Big Boofer!</p>')
            break;
        default:
            console.log("Ruh Roh! Try Again!");
            $('.landingPad').append('<p>Ruh Roh! Try Again!</p>')
    }

}


$(function () {
    $('form').on('submit', function(event) {
        event.preventDefault();
        sortDog();
        console.log('woof woof!')


    });
});