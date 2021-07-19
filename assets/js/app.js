$( document ).ready(function() {

    //table filtering
    $('.filter-tabs ul li').on('click', function() {
        var table = $(this).data('table');
        $('.filter-tabs ul li').removeClass('active');
        $(this).addClass('active');
        if (table == 'all') {
            $('.filter-table').removeClass('filtering');
            $('.data-item').removeClass('show');
        } else {
            $('.filter-table').addClass('filtering');
        }
        $('.data-item').each(function() {
            $(this).removeClass('show');
            if ($(this).data('tableitems') == table) {
                $(this).addClass('show');
            }
        });
    });

    //sticky header
    $(window).scroll(function(){
        var scrollShowTime = $(window).scrollTop();

        if ( scrollShowTime > 300 ) {
            $(".header .navbar").addClass("sticky");
        }
        else {
            $(".header .navbar").removeClass("sticky");
        }
    });

    //page scrolling
    $.scrollIt({
        activeClass: 'active', // class given to the active nav element
        topOffset: -90
    });

    //mobile menu close when click an item
    $(".menu ul li a").click(function(){
        $(".navbar .menu").removeClass("show");
    });

    //carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        nav: false,
        mouseDrag: true,
        autoplayTimeout: 3000,
        responsive:{
            0:{
                items:1
            },
            767: {
                items: 2
            },
            991: {
                items:3
            }
        }

    })
    
});