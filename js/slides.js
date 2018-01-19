
(function (window, jQuery) {
    'use strict';

    var Pesquisa = {
        slides: {
            current: 0,
            length: $('.slide').length
        },
        run: run,
        next: next,
        showSlide: showSlide
    }

    jQuery(function ($) {
        Pesquisa.run();
    })


    function next() {
        if (this.slides.current < this.slides.length - 1) {
            this.slides.current += 1;
            this.showSlide(this.slides.current)
        }
    }

    function showSlide(n) {
        if ($('.slide-visible').length == 0) {
            $('slide').eq(n).addClass('slide-visible');
        } else {
            let old = $('.slide-visible');
            let next = old.next('.slide')
            next
                .addClass('slide-visible')
                .animate({
                    marginTop: '-100%'
                }, 500, function (el) {
                    old.removeClass('slide-visible')
                    old = null;
                    next = null;
                });
        }



    }

    function run() {
        $('slide').eq(0).addClass('visible');
        $('.nav-buttons .up')
            .on('click', () => {
                this.next()
            })
    }

})(window, jQuery)