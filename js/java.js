$(function(){
   'use strict';
   $(window).on('scroll' , function(){
    var navbar = $('.navbar');
    if($(window).scrollTop() >= navbar.height()){
        navbar.addClass('scrolled');
    } else {
        navbar.removeClass('scrolled');
    }
   });
   // tab section
   $('.tab-switch li').on('click' , function(){
      $(this).addClass('selected').siblings().removeClass('selected');
      $('.tab-section .tab-content > div').hide();
      $('.' + $(this).data('class')).show(); 
   });
});