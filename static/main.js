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
