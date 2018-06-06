//fulpage.js
$('#fullpage').fullpage();
$.fn.fullpage.setScrollingSpeed(1500);

//on Button menu
$('#on-click-menu').on('click', () => {
    if ( $('.nav-menu').css('width') == '0px' ) {
        $('.nav-menu').animate({
            width:"80%",  
        }, 800, () => { $('.nav-menu').css('width', '80%') });
    } else {
        $('.nav-menu').animate({
            width:"0%",  
        }, 800, () => { $('.nav-menu').css('width', '0%') });
    }
});

//on Click scroll 

$('.scroll-button').mouseenter(function(){
    $('.scroll-line').animate({
        width: '150px',
        margin: '0 0 0 20px'
    }, 1000)
});

$('.scroll-button').mouseleave(function(){
    $('.scroll-line').animate({
        width: '50px',
        margin: '0 0 0 50px'
    }, 1000)
});

//About section
$('#bio-life-text').hide();
$('#bio-skills-text').hide();
$('#bio-work-text').hide();

$('.bio-work').on('click', function() {
    $('#bio-work-text').toggle();
    $('#bio-skills-text').hide();
    $('#bio-life-text').hide();
});

$('.bio-skills').on('click', function() {
    $('#bio-work-text').hide();
    $('#bio-skills-text').toggle();
    $('#bio-life-text').hide();
});

$('.bio-life').on('click', function() {
    $('#bio-work-text').hide();
    $('#bio-skills-text').hide();
    $('#bio-life-text').toggle();
});

