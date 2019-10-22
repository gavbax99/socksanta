$(document).ready(function() {
  
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

    // METER

    var socks = 77;
    var goal = 100;
    var percent = (socks / goal) * 100;

    $(".progress__right__glass--mid__juice").css("height", `${percent.toFixed(2)}%`)
    $(".progress__right__glass--mid__juice--top").css("bottom", `calc(${percent.toFixed(2)}% - 1px)`)

    var count = socks.toString().split("");

    if (count.length < 3) {
        $(".counter1").text("0");
        $(".counter2").text(count[0]);
        $(".counter3").text(count[1]);
    } else {
        $(".counter1").text(count[0]);
        $(".counter2").text(count[1]);
        $(".counter3").text(count[2]);
    }

});

