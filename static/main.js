//hideanchorlinkurl and smoothscrooll//
$('.backhome').click(function (e) {
    e.preventDefault();

    $('.wrap').animate({
        scrollTop: $("#homedevicecont").offset().top - 0
    }, 600);
});

$('.aboutdevice').click(function (e) {
    e.preventDefault();

    $('.wrap').animate({
        scrollTop: $("#aboutdevicecont").offset().top - 0
    }, 600);
});

$('.worksdevice').click(function (e) {
    e.preventDefault();

    $('.wrap').animate({
        scrollTop: $("#workdevicecont").offset().top - 0
    }, 600);
});

$('.contactdevice').click(function (e) {
    e.preventDefault();

    $('.wrap').animate({
        scrollTop: $("#contactdevicecont").offset().top - 0
    }, 600);
});
