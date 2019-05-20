// switch statement in non doc ready


// variable  of dog name
const dogName = $('.dog-name');

function sortDog() {
    //variable for dog girth
    const dogCategory = $('select.dog-sorter').val();
    switch (dogCategory) {
        case '1':

            $('.landing-pad').empty()
            $('.landing-pad').append(`<h2 class="dog-answer">${dogName.val()} is a Pupperino!</h2>`)
            break;
        case '2':

            $('.landing-pad').empty()
            $('.landing-pad').append(`<h2 class="dog-answer">${dogName.val()} is a Bean!</h2>`)
            break;
        case '3':

            $('.landing-pad').empty()
            $('.landing-pad').append(`<h2 class="dog-answer">${dogName.val()} is a Puppo!</h2>`)
            break;
        case '4':
            $('.landing-pad').empty()
            $('.landing-pad').append(`<h2 class="dog-answer">${dogName.val()} is a Pupper!</h2>`)
            break;
        case '5':
            $('.landing-pad').empty()
            $('.landing-pad').append(`<h2 class="dog-answer">${dogName.val()} is a Woofer!</h2>`)
            break;
        case '6':
            $('.landing-pad').empty()
            $('.landing-pad').append(`<h2 class="dog-answer">${dogName.val()} is a  Boofer!</h2>`)
            break;
        case '7':
            $('.landing-pad').empty()
            $('.landing-pad').append(`<h2 class="dog-answer">${dogName.val()} is a Big Boofer!</h2>`)
            break;
        default:
            $('.landing-pad').empty()
            $('.landing-pad').append('<h2class="dog-answer">Ruh Roh! Try Again!</h2>')
    }

}

         // Easter Egg
         
             let keys = [];
             let konami = '38,38,40,40,37,39,37,39,66,65';
             $(document).keydown(function (e) {
                 keys.push(e.keyCode);
                 if (keys.toString().indexOf(konami) >= 0) {
                     keys = [];
                     //add awesome music in background
                     $('body').css('background', 'pink').append('<iframe width="0" height="0" src="https://www.youtube.com/embed/v83eOYu9Ad8?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
                 }
             });
         





$(function () {
    $('form').on('submit', function (event) {
        event.preventDefault();

        if (dogName.val().length > 0) {
            sortDog();
        } else {
            alert(`Please Include Your Dog's name!`)
        };


    });
});





