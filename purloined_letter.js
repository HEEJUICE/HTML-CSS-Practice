/*global $ */
$(function () {
    'use strict';

    $('#letter').click(function () {
        $('#content').addClass('opened');
    });


    $('#content').click(function () {
        $('#content').removeClass('opened');
    });

    $('#letter').click(function () {
        $('#fill').addClass('open');
    });

    $('#content').click(function () {
        $('#fill').removeClass('open');
    });

});

$(document).ready(function () {
    $('.right').after('<p class="clear">&nbsp</p>');
});

$(window).scroll(function () {
    var scrolltop = $(window).scrollTop();
    if (scrolltop == $(document).height() - $(window).height()) {
        $('#content').addClass('opened');
        $('#fill').addClass('open');
    }
});