;(function($) {

"use strict";

var $body = $('body');
// var $head = $('head');
// var $mainWrapper = $('#main-wrapper');


$(document).ready(function(){

	$("#header").each(function(){

		var button = $('.toggleMenu');
		var nav_content = $('.navi');
		var has_submenu = nav_content.find('.has-submenu > a');
		var submenu = nav_content.find('.submenu');

		$(button).on('click', function(){
			$(this).toggleClass('active');
			$(nav_content).slideToggle('200');
		});
	});

	$('.tour-section .col-md-6').matchHeight({ remove: false });

	$('.scroll-link').on('click', function(e){
		e.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});

	function scrollToID(id, speed){
		var offSet = 66;
		var targetOffset = $(id).offset().top - offSet;
		var mainNav = $('.navi');
		$('html,body').animate({scrollTop:targetOffset}, speed);
		if (mainNav.hasClass("open")) {
			mainNav.css("height", "1px").removeClass("in").addClass("collapse");
			mainNav.removeClass("open");
		}
	}

	$('.nyroModal').nyroModal();


});


// Mediaqueries
// ---------------------------------------------------------
// var XS = window.matchMedia('(max-width:767px)');
// var SM = window.matchMedia('(min-width:768px) and (max-width:991px)');
// var MD = window.matchMedia('(min-width:992px) and (max-width:1199px)');
// var LG = window.matchMedia('(min-width:1200px)');
// var XXS = window.matchMedia('(max-width:480px)');
// var SM_XS = window.matchMedia('(max-width:991px)');
// var LG_MD = window.matchMedia('(min-width:992px)');



// Touch
// ---------------------------------------------------------
var dragging = false;

$body.on('touchmove', function() {
	dragging = true;
});

$body.on('touchstart', function() {
	dragging = false;
});



}(jQuery));
