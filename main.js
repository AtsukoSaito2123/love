
$(function () {

    $(".openbtn").click(function () {
        $(this).toggleClass('active');
    });

    const swiper = new Swiper(".swiper", {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 5,
        centerMode: true,
        centeredSlides: true,
        initialSlide: 1,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        on: {
            slideChange: function () {
                jQuery('.swiper-slide-content').css('opacity', '0');
                realIndex = this.realIndex + 1;
                jQuery('.swiper-slide-content-' + realIndex).css('opacity', '1');
            },
        },
    });

    $('.slick-area').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0px',
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 1200,
    });

});



