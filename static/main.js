//hideanchorlinkurl and smoothscrooll//
$('.backhome').click(function (e) {
    e.preventDefault();

    $('.cont').animate({
        scrollTop: $("#homedevicecont").offset().top - 0
    }, 600);
});

$('.aboutdevice').click(function (e) {
    e.preventDefault();

    $('.cont').animate({
        scrollTop: $("#aboutdevicecont").offset().top - 0
    }, 600);
});

$('.worksdevice').click(function (e) {
    e.preventDefault();

    $('.cont').animate({
        scrollTop: $("#workdevicecont").offset().top - 0
    }, 600);
});

$('.contactdevice').click(function (e) {
    e.preventDefault();

    $('.cont').animate({
        scrollTop: $("#contactdevicecont").offset().top - 0
    }, 600);
});

//prevent the softkeyboard to change layout on android//
var meta = document.createElement('meta');
meta.name = 'viewport';
meta.content = 'width=device-width,height='+window.innerHeight+', initial-scale=1.0';
document.getElementsByTagName('head')[0].appendChild(meta);

