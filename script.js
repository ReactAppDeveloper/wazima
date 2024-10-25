$(document).ready(function(){
    $(".client_slider").slick({
        dots: false,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 6.5,
        slidesToScroll: 1.5,
    });
    $(".certified_slider_1").slick({
        dots: false,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
    });
    $(".certified_slider_2").slick({
        dots: false,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
    });
    $(".testimonial_slider").slick({
        dots: false,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: false,
    });
    $(".team_slider").slick({
        dots: false,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: false,
    });
    (function () {
        'use strict'
        var forms = document.querySelectorAll('.needs-validation')
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }
                    form.classList.add('was-validated')
                }, false)
            })
    })()
});