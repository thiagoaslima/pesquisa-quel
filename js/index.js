'use strict';
(function($) {

    $('form')
        .on('focus', '.questao-numerar input', function(event) {
            $(this).attr('type', 'number');
        })
        .on('blur', '.questao-numerar input', function(event) {
            $(this).attr('type', 'text');
        })

})(jQuery);