(function ($) {
    $(document).ready(function () {
        "use strict";

        // TYPEWRITER
        $("#typewriter").typewriter({
            prefix: "",
            text: ["Please wait", "Still loading", "Almost done"],
            typeDelay: 100,
            waitingTime: 1500,
            blinkSpeed: 800
        });


        // SLIDER
        var swiper = new Swiper('.swiper-slider', {
            speed: 600,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">0' + (index + 1) + '</span>';
                },
            },
        });

        // DATA BACKGROUND IMAGE
        var pageSection = $(".bg-image");
        pageSection.each(function (indx) {
            if ($(this).attr("data-background")) {
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });



        // HAMBURGER MENU
        $('.hamburger').on('click', function (e) {
            if ($(".navigation-menu").hasClass("active")) {
                $(".hamburger").toggleClass("open");
                $("body").toggleClass("overflow");
                $(".navigation-menu").removeClass("active");
                $(".navigation-menu .inner .menu").css("transition-delay", "0s");
                $(".navigation-menu .inner blockquote").css("transition-delay", "0s");
                $(".navigation-menu .bg-layers span").css("transition-delay", "0.3s");
            } else {
                $(".navigation-menu").addClass('active');
                $(".hamburger").toggleClass("open");
                $("body").toggleClass("overflow");
                $(".navigation-menu.active .inner .menu").css("transition-delay", "0.45s");
                $(".navigation-menu.active .inner blockquote").css("transition-delay", "0.50s");
                $(".navigation-menu .bg-layers span").css("transition-delay", "0s");
            }
            $(this).toggleClass("active");
        });

        document.getElementById('instagram-link').addEventListener('click', function (e) {
            e.preventDefault(); // Evita el comportamiento predeterminado
            window.open('https://www.instagram.com/bucleia', '_blank', 'noopener');
        });

        document.getElementById('behance-link').addEventListener('click', function (e) {
            e.preventDefault(); // Evita el comportamiento predeterminado
            window.open('https://www.behance.net/bucleiaestudio', '_blank', 'noopener');
        });

        document.getElementById('linkedin-link').addEventListener('click', function (e) {
            e.preventDefault(); // Evita el comportamiento predeterminado
            window.open('https://www.linkedin.com/in/bucle-ia-estudio-154302332', '_blank', 'noopener');
        });


        // PAGE TRANSITION
        $('body a').on('click', function (e) {

            // Comprobar si es el enlace de la imagen que no debe cambiar el estado del menú
            if ($(this).attr('id') === 'scroll-to-section') {
                // Solo scroll a la sección sin afectar el menú
                var hash = this.getAttribute("href");

                if ($('body ' + hash).length != 0) {
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 1000);
                }
                return;  // Salir sin cambiar el estado del menú
            }

            // Si no es el enlace de la imagen, continuar con la lógica normal
            if (typeof $(this).data('fancybox') == 'undefined') {
                e.preventDefault();
                var url = this.getAttribute("href");
                if (url.indexOf('#') != -1) {
                    var hash = url.substring(url.indexOf('#'));

                    if ($('body ' + hash).length != 0) {
                        $('.transition-overlay').removeClass("active");
                        $(".hamburger").toggleClass("open");
                        $("body").toggleClass("overflow");
                        $(".navigation-menu").removeClass("active");
                        $(".navigation-menu .inner ul").css("transition-delay", "0s");
                        $(".navigation-menu .inner blockquote").css("transition-delay", "0s");
                        $(".navigation-menu .bg-layers span").css("transition-delay", "0.3s");

                        $('html, body').animate({
                            scrollTop: $(hash).offset().top
                        }, 1000);
                    }
                } else {
                    $('.transition-overlay').toggleClass("active");
                    setTimeout(function () {
                        window.location = url;
                    }, 1000);
                }
            }
        });


        // PAGE HEADER FADE
        var divs = $('header');
        $(window).on('scroll', function () {
            var st = $(this).scrollTop();
            divs.css({ 'opacity': (1 - st / 700) });
            divs.css({ 'transition-delay': ("0s") });
            divs.css({ 'transition': ("0.05s ease-in-out") });
        });

    });
    // END JQUERY	


    // WOW ANIMATION 
    wow = new WOW(
        {
            animateClass: 'animated',
            offset: 0
        }
    );
    wow.init();


    // PRELOADER
    $(window).load(function () {
        $("body").addClass("page-loaded");
    });

    // COUNTER
    $(document).scroll(function () {
        $('.odometer').each(function () {
            var parent_section_postion = $(this).closest('section').position();
            var parent_section_top = parent_section_postion.top;
            if ($(document).scrollTop() > parent_section_top - 300) {
                if ($(this).data('status') == 'yes') {
                    $(this).html($(this).data('count'));
                    $(this).data('status', 'no')
                }
            }
        });
    });


    document.querySelectorAll('.faq-question').forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentElement;

            // Toggle la clase 'active' para expandir o contraer la respuesta
            parent.classList.toggle('active');

            // Alternar visibilidad de la respuesta
            const answer = parent.querySelector('.faq-answer');
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });



})(jQuery);	