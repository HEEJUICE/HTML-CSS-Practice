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
