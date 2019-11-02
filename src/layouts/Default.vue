<template>
  <div class="layout">
        <nav class="menu container mx-auto">
        <ul class="menu_links">
            <li><g-link to="/about/">About us</g-link></li>
            <li><g-link to="/blog/">Blog</g-link></li>
            <li><g-link to="/blogdetail/">Blog Detail</g-link></li>
            <li><g-link to="/job_detail/">Job Detail</g-link></li>
            <li><g-link to="/contact/">Contact</g-link></li>
        </ul>
        <div class="slide_section">
            <div class="related">
                <p>Related posts</p>
                <hr>
            </div>
            <div class="slider">
                <div>
                    <g-image src="/assets/img/post_1.png" class="" alt="" immediate="false" />
                   
                    <div>
                        <p>BRANDING</p>
                        <p>Bix consulting</p>
                    </div>
                </div>
                <div>
                    <g-image src="/assets/img/post_1.png" class="" alt="" immediate="false" />
                    <div>
                        <p>WEB DESIGN</p>
                        <p>Sans agency</p>
                    </div>
                </div>
                <div>
                    <g-image src="/assets/img/post_1.png" class="" alt="" immediate="false" />
                    <div>
                        <p>IOS DESIGN</p>
                        <p>BP&XO Consulting</p>
                    </div>
                </div>
                <div>
                    <g-image src="/assets/img/post_1.png" class="" alt="" immediate="false" />
                    <div>
                        <p>BRANDING</p>
                        <p>Bix consulting</p>
                    </div>
                </div>
                <div>
                    <g-image src="/assets/img/post_1.png" class="" alt="" immediate="false" />
                    <div>
                        <p>BRANDING</p>
                        <p>Bix consulting</p>
                    </div>
                </div>
            </div>
        </div>
      </nav>
    <slot/>
  </div>
</template>
<script>
window.$ = window.jQuery = require('jquery');
import jqueryModal  from 'jquery-modal';
import Slick from 'vue-slick';

export default {
  mounted(){

    //Slick Slider
function startSlider (n) {
    $('.slider').slick({
        arrows: true,
        lazyLoad: 'ondemand',
        slidesToShow: n,
        slidesToScroll: 1,
        slickNext: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="/assets/img/prevArrow.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="/assets/img/nextArrow.svg"</button>'
    });
}

if($(window).width() < 768) {
    startSlider (1);
} else if($(window).width() > 768) {
    startSlider (3);
} else {
    startSlider (2);
}

      $('#fp-nav ul li a span').css("background-color", "#db919f");
      $('#fp-nav ul li a.active span').css("background-color", "white");
      $('.hid').show();

      //Burger menu
    $(".menu_icon").on("click", () => {
        console.log(fullpage_api.getActiveSection().index);
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

//Modal upload optimization
$(".btn_play").on("click", (e) => {
    let iframeLink = e.target.href.split('#')[1];
    let src = $("#" + iframeLink).data("src");
    $("#" + iframeLink).children( "iframe" ).attr("src", src);
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
    // var scriptTagJQ = document.createElement("script")
    // scriptTagJQ.src = "/assets/js/jquery-3.4.1.min.js"
    // document.getElementsByTagName('head')[0].appendChild(scriptTagJQ)
    
  }
   
}
</script>