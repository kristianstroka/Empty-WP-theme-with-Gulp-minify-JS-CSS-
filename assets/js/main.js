/* global jQuery */
(function ($, root) {

	'use strict';
	
	/* ****************************************************************** */
	/* Prepare main object
	/* ****************************************************************** */
	
		var PROJECT = window.PROJECT || {};
		PROJECT.ready = {};
		
	/* ****************************************************************** */
	/* PAGE LOADED
	/* ****************************************************************** */

		$(window).on('load', function() {
			$('html').addClass('page-loaded');
		});
		
	
	/* ****************************************************************** */
	/* EXAMPLE FUNCTION
	/* ****************************************************************** */
		
		PROJECT.ready.example_function = function() {
			
			console.log('some example function')
		
		};
		
	/* ****************************************************************** */
	/* HAMBURGER
	/* ****************************************************************** */
	
		PROJECT.ready.hamburger = function() {
			
			$('.hamburger').click(function(){
				$(this).toggleClass('is-active');
				
				$('#site-nav').toggle();
				
			})
		
		};
	
	/* ****************************************************************** */
	/* Run functions on ready
	/* ****************************************************************** */
	
		$( document ).ready(function() {
			
			for (var function_name in PROJECT.ready) {
				if (PROJECT.ready.hasOwnProperty(function_name)) {
			        PROJECT.ready[function_name]();
			    }
			}
		});

})(jQuery, this);
