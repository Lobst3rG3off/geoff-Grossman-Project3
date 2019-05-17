// ok steps to accomplish the JS part of this project.
// create switch statement for sorting
// set user form inputs as variables to save the information to push through switch statement
// on submit the users values are printed out on the DOM with the dog being categorized within the output  



// switch statement in non doc ready


// variable  of dog name
const dogName = $('.dogName');

function sortDog() {
    
    console.log('the dog name', dogName.val());
    //variable for dog girth
    const dogCategory = $('select.dogSorter').val();
    switch (dogCategory) {
        case '1':
            console.log(`${dogName.val()} is a Pupperino!`);
            $('.landingPad').empty()
$('.landingPad').append(`<h2>${dogName.val()} is a Pupperino!</h2>`)
            break;
        case '2':
            console.log("Your dog is a Bean!");
            $('.landingPad').empty()
            $('.landingPad').append(`<h2>${dogName.val()} is a Bean!</h2>`)
            break;
        case '3':
            console.log("Your dog is a Puppo!");
            $('.landingPad').empty()
            $('.landingPad').append(`<h2>${dogName.val()} is a Puppo!</h2>`)
            break;
        case '4':
            console.log("Your dog is a Pupper!");
            $('.landingPad').empty()
            $('.landingPad').append(`<h2>${dogName.val()} is a Pupper!</h2>`)
            break;
        case '5':
            console.log("Your dog is a Woofer!");
            $('.landingPad').empty()
            $('.landingPad').append(`<h2>${dogName.val()} is a Woofer!</h2>`)
            break;
        case '6':
            console.log("Your dog is a Boofer!");
            $('.landingPad').empty()
            $('.landingPad').append(`<h2>${dogName.val()} is a  Boofer!</h2>`)
            break;
        case '7':
            console.log("Your dog is a Big Boofer!");
            $('.landingPad').empty()
            $('.landingPad').append(`<h2>${dogName.val()} is a Big Boofer!</h2>`)
            break;
        default:
            console.log("Ruh Roh! Try Again!");
            $('.landingPad').empty()
            $('.landingPad').append('<h2>Ruh Roh! Try Again!</h2>')
    }

}




$(function () {
    $('form').on('submit', function(event) {
        event.preventDefault();

        if (dogName.val().length > 0){
sortDog();
        } else {
            alert(`Please Include Your Dog's name!`)
        };

        


    });
});