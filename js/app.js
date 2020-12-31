const spoilerP = $('.spoiler');
const spoilerSpan = $('.spoiler span');

// Create the 'Reveal button' and prepend to spoilerP
const $spoilerBtn = $('<button>Reveal Spoiler</button>');
spoilerP.prepend($spoilerBtn);

// Hide the spoiler text
spoilerSpan.hide();

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

$(spoilerP).on('click', 'button', (event) => {
    // console.log(event.target);
    spoilerSpan.show();
    $(event.target).hide();
});

    




