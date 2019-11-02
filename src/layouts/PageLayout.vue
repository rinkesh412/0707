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
    <header>
        <div class="container">
            <div class="flex-item"><button class="btn_img menu_but menu_icon"></button></div>
            <div class="flex-item logo"><g-link to=""><g-image src="/assets/img/black_logo.svg" class="" alt="" immediate="false" /></g-link></div>
            <div class="flex-item"><g-link to="/contact/" class="btn_link">Contact</g-link></div>
        </div>
    </header>
    <slot/>
  </div>
</template>  
<style>
.menu_close {
    background-image: url('/assets/img/close_2.svg');
}
</style>
<script>
window.$ = window.jQuery = require('jquery');
import jqueryModal  from 'jquery-modal';
import Slick from 'vue-slick';
export default {
    mounted(){
        console.log('PageLayout');
        document.body.classList.add('inner_page');

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
        //Burger menu
        $(".menu_icon").on("click", () => {
            $(".menu").css("background", "#086B65");
            if($('.menu').css("display") == "none") {
                $(window).trigger('resize');
                $(".menu_icon").removeClass("menu_but").addClass("menu_close");
                $(".menu").show("slide", { direction: "left" }, 1000);
                $('.menu_links').fadeIn(1800);
                $(".slide_section").fadeIn(1800);
                // $("main").fadeOut(200);
                $('#fp-nav').fadeOut();
            } else {
                $(".menu_icon").removeClass("menu_close").addClass("menu_but");
                $(".menu").hide("slide", { direction: "left" }, 1000);
                $(".slide_section").fadeOut(1200);
                $('.menu_links').fadeOut(1200);
                // $("main").fadeIn(1300);
                $('#fp-nav').fadeIn();
                backCleaner(false);
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

    }
}
</script>