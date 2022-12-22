var img = document.querySelector('.img-wrapper.child');
var opening = document.querySelector('.txt-container.head');
var flair = document.querySelector('.txt-container.flair');
var copyright = document.querySelector('.cpyrght');
var infoTxt = document.getElementById('INFO');

function revealAll(){
    revealSelf(img);
    revealSelf(opening, 300);
    revealSelf(copyright, 1500);
    revealSelf(flair, 1000);
    revealSelf(infoTxt, 700);
}

/* helper function to reveal an element*/
function revealSelf(target, timing=0) {
    anime({
        targets: target,
        translateY: [10, 0],
        opacity: [0.0, 1.0],
        easing: 'easeInOutQuad',
        duration: 700,
        delay: timing
    })
}