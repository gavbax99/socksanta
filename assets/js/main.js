$(document).ready(function() {

    // window.onscroll = function () { stickyScroll() };

    // function stickyScroll() {
    //     var checkIfStuck = $(".header-nav").hasClass("header-nav--scrolled");

    //     if (window.pageYOffset >= 55 && !checkIfStuck) {
    //         $(".header-logo--lite").addClass("hider");
    //         $(".header-logo--dark").removeClass("hider");
    //         $(".header-contact").addClass("header-contact--scrolled");
    //         $(".header").addClass("header--scrolled");
    //         $(".header-nav").addClass("header-nav--scrolled");
    //         $(".header-nav__sublist--display").addClass("header-nav__sublist--display--scrolled");
    //         $(".header-hamburger-nav").addClass("header-hamburger-nav--scrolled");
    //         $(".header-hamburger__contact").addClass("header-hamburger__contact--scrolled");
    //     } else if (window.pageYOffset < 55 && checkIfStuck) {
    //         $(".header-logo--lite").removeClass("hider");
    //         $(".header-logo--dark").addClass("hider");
    //         $(".header-contact").removeClass("header-contact--scrolled");
    //         $(".header").removeClass("header--scrolled");
    //         $(".header-nav").removeClass("header-nav--scrolled");
    //         $(".header-nav__sublist--display").removeClass("header-nav__sublist--display--scrolled");
    //         $(".header-hamburger-nav").removeClass("header-hamburger-nav--scrolled");
    //         $(".header-hamburger__contact").removeClass("header-hamburger__contact--scrolled");
    //     }
    // };

    // function stickyInit() {
    //     if (window.pageYOffset >= 55) {
    //         $(".header-logo--lite").addClass("hider");
    //         $(".header-logo--dark").removeClass("hider");
    //         $(".header-contact").addClass("header-contact--scrolled");
    //         $(".header").addClass("header--scrolled");
    //         $(".header-nav").addClass("header-nav--scrolled");
    //         $(".header-nav__sublist--display").addClass("header-nav__sublist--display--scrolled");
    //         $(".header-hamburger-nav").addClass("header-hamburger-nav--scrolled");
    //         $(".header-hamburger__contact").addClass("header-hamburger__contact--scrolled");
    //     }
    // };

    // stickyInit();

    // SCROLL BUTTONS

    $(".header__logo--scroll").on("click", function () {
        $('html,body').animate({ scrollTop: 0 }, 400);
    });

    $(".header-nav__scroll").on("click", function () {
        var data = $(this).attr("data-name");
        $('html,body').animate({ scrollTop: $(`#${data}`).offset().top - 55 }, 400);
    });

    // HAMBURGER

    $(".header-hamburger").on("click", function () {
        $(this).toggleClass("hamburger-change");
        $(".header-hamburger-nav").toggleClass("header-hamburger-nav--show");
        $(".header-hamburger__blackout").toggleClass("header-hamburger__blackout--show")
    });

    $(".header-nav__scroll").on("click", function () {
        $(".header-hamburger").removeClass("hamburger-change");
        $(".header-hamburger-nav").removeClass("header-hamburger-nav--show");
        $(".header-hamburger__blackout").removeClass("header-hamburger__blackout--show")
    });

    $(".header-hamburger--expand").on("click", function () {
        $(this).toggleClass("header-hamburger--carat-flip");
        $(".header-hamburger__list__nested").toggleClass("hider");
    });

});


// $(window).on("load", function() {
//     console.log("removes preloader")
// });