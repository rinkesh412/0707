/* Template: 0707.agency
   Author: macsmel
   Version: 1.0.0
   Created: July 2019
   Description: Custom JS file
*/

"use strict";

if(document.getElementById('fullpage') !== null) {
    new fullpage('#fullpage', {
        //Scroll option
        autoScrolling:true,
        scrollHorizontally: true,
        fitToSection: true,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 10,
        scrollingSpeed: 400,
        fitToSection: true,
        css3: true,
        fitToSectionDelay: 700,
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        navigation: true,
        navigationPosition: 'right',
        showActiveTooltip: true,
        slidesNavigation: true,
        onLeave: function (origin, destination, direction) {
            if (destination.index == 0) {
                $('#fp-nav ul li a span').css("background-color", "#db919f");
                $('.related p').css('color', 'white');
                $('.related hr').css('background', 'white');
                $('.slider p').css('color', 'white');
            } else if (destination.index == 1 && window.innerWidth <= 768 || destination.index == 1 && window.innerWidth == 1024 && window.innerHeight >= 1200)  {
                $('#fp-nav ul li a span').css("background-color", "#6496f9");
                $('.related p').css('color', 'white');
                $('.related hr').css('background', 'white');
                $('.slider p').css('color', 'white');
                $('.menu a').css("color", "white");
            } else if (destination.index == 1 && window.innerWidth >= 768) {
                $('#fp-nav ul li a span').css("background-color", "#bcd1fc");
                $('.related p').css('color', 'white');
                $('.related hr').css('background', 'white');
                $('.slider p').css('color', 'white');
                $('.menu a').css("color", "white");
            } else if (destination.index == 2) {
                $('.related p').css('color', '#2269f6');
                $('.related hr').css('background', '#2269f6');
                $('.slider p').css('color', '#2269f6');
                $('#fp-nav ul li a span').css("background-color", "#bcd1fc");
                $('.menu a').css("color", "rgb(34, 105, 246)");
            } else if (destination.index == 3) {
                $('#fp-nav ul li a span').css("background-color", "#539894");
                $('.related p').css('color', 'white');
                $('.related hr').css('background', 'white');
                $('.slider p').css('color', 'white');
                $('.menu a').css("color", "white");
            } else if (destination.index == 4) {
                $('#fp-nav ul li a span').css("background-color", "#adcecc");
                $('.related p').css('color', '#086B65');
                $('.related hr').css('background', '#086B65');
                $('.slider p').css('color', '#086B65');
                $('.menu a').css("color", "#086b65");
            } else {
                $('#fp-nav ul li a span').css("background-color", "#4d4d4d");
                $('.related p').css('color', 'white');
                $('.related hr').css('background', 'white');
                $('.slider p').css('color', 'white');
                $('.menu a').css("color", "white");
            }
        },
        afterLoad: function (origin, destination, direction) {
            if (destination.index == 0 || destination.index == 3) {
                $('#fp-nav ul li a.active span').css("background-color", "white");
            } else if (destination.index == 1 && window.innerWidth <= 768 || destination.index == 1 && window.innerWidth == 1024 && window.innerHeight >= 1200) {
                $('#fp-nav ul li a.active span').css("background-color", "white");
            } else if (destination.index == 1 || destination.index == 2) {
                $('#fp-nav ul li a.active span').css("background-color", "#2269f6");
            } else if (destination.index == 4) {
                $('#fp-nav ul li a.active span').css("background-color", "#086b65");
            } else {
                $('#fp-nav ul li a.active span').css("background-color", "#ffffff");
            }
        }
    });
    //methods
    fullpage_api.setAllowScrolling(true);
}


$(document).ready(function() {
    $('#fp-nav ul li a span').css("background-color", "#db919f");
    $('#fp-nav ul li a.active span').css("background-color", "white");
    $('.hid').show();
});

//Modal upload optimization
$(".btn_play").on("click", (e) => {
    let iframeLink = e.target.href.split('#')[1];
    let src = $("#" + iframeLink).data("src");
    $("#" + iframeLink).children( "iframe" ).attr("src", src);
});

//Burger menu
$(".menu_icon").on("click", () => {
    switch (fullpage_api.getActiveSection().index) {
        case 0:
            $(".menu").css("background", "#B71E3A");
            break;
        case 1:
            $(".menu").css("background", "#2269f6");
            break;
        case 2:
            $(".menu").css("background", "#F8FAFF");
            break;
        case 3:
            $(".menu").css("background", "#086B65");
            break;
        case 4:
            $(".menu").css("background", "#f5f9f9");
            break;
        case 5:
            $(".menu").css("background", "black");
            break;
        default:
            $("main").fadeOut(200);
        }
    if($('.menu').css("display") == "none") {
        $(window).trigger('resize');
        $(".menu_icon").removeClass("menu_but").addClass("menu_close");
        $(".menu").show("slide", { direction: "left" }, 1000);
        $('.menu_links').fadeIn(1800);
        $(".slide_section").fadeIn(1800);
        // $("main").fadeOut(200);
        $('#fp-nav').fadeOut();
        backCleaner(true);
        fullpage_api.setAllowScrolling(false);
        fullpage_api.setKeyboardScrolling(false);
    } else {
        $(".menu_icon").removeClass("menu_close").addClass("menu_but");
        $(".menu").hide("slide", { direction: "left" }, 1000);
        $(".slide_section").fadeOut(1200);
        $('.menu_links').fadeOut(1200);
        // $("main").fadeIn(1300);
        $('#fp-nav').fadeIn();
        backCleaner(false);
        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);
    }
});




//Menu animation
$(".menu_links li").on({
    mouseenter: function (e) {
        $('.menu_links').children().css('opacity', '0.7');
        $(this).css('opacity', '1');
    },
    mouseleave: function () {
        $('.menu_links').children().css('opacity', '1');
    }
});

//Logo navigation
$('.logo').on("click", () => {
    fullpage_api.moveTo(1);
});

//Background clear
function backCleaner(status) {
    if (status == true) {
        for(let i=0; i<=6; i++) {
            let cl = ".view_" + i;
            $(cl).addClass('clear');
        }
        $('.view_2').addClass('blueClear');
    } else {
        $('.layout').removeClass('clear');
        $('.view_2').removeClass('blueClear');
    }
}

//Remove lines if custom resolution
window.onresize = function (event) {
    if (window.innerWidth > 991) {
        if (window.innerWidth !== 1024 && window.innerWidth !== 1280 && window.innerWidth !== 1366 && window.innerWidth !== 1440 && window.innerWidth !== 1536 && window.innerWidth !== 1600 && window.innerWidth !== 1680 && window.innerWidth !== 1920 && window.innerWidth !== 2560 && window.innerWidth !== 3840){
            $('.layout').css('background-image', 'none');
            $('.view_2').css('background', 'linear-gradient(90deg, #2269f6 60%, white 40%)');
        } else {
            $('.layout').css('background-image', '');
        }
    } else {
        $('.layout').css('background-image', '');
    }
};