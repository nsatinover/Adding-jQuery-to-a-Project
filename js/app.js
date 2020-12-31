// const spoilerP = $('.spoiler');
const spoilerSpan = $('.spoiler span');

// Hide the spoiler text
spoilerSpan.hide();

// Create the 'Reveal button' and prepend to spoilerP
const $spoilerBtn = $('<button>Reveal Spoiler</button>');
$('.spoiler').prepend($spoilerBtn);
    
$('.spoiler').on('click', 'button', (event) => {
    $(event.target).next().show();
    $(event.target).hide();
});






// on click: show spoiler, hide spoiler button
// $spoilerBtn.on('click', () => {
//         spoilerSpan.show();
//         $spoilerBtn.hide();
//     });

// $(spoilerP).on('click', 'button', (event) => {
//     console.log(event.target);
//     spoilerSpan.show();
//     $spoilerBtn.hide();
// });

// $(spoilerP).on('click', 'button', (event) => {
//     $(event.target).prev().show();
//     $(event.target).hide();
// });
