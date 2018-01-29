
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
            let next = old.next('.slide');

            const handler = function () {
                removeVisibleClass(old);
                next.off('transitionend', handler);
            };

            next
                .addClass('slide-visible')
                .on('transitionend', handler);
        }
    }

    function run() {
        $('.questao').each(function(idx, el) {
            $(el).attr('data-count', idx+1);
        });
        $('slide').eq(0).addClass('visible');
        $('.nav-buttons .up')
            .on('click', () => {
                this.next()
            });
        
    }

    function removeVisibleClass(el) {
        el.removeClass('slide-visible');
    }

})(window, jQuery)