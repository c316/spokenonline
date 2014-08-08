  Template.landing.events({
    'mouseover [name=attendPage]': function (e, tmpl) {
    	$('.arrow-right').show(100);
    },
    'mouseover [name=viewPage]': function (e, tmpl) {
    	$('.arrow-left').show(100);	
    },
    'mouseout [name=attendPage]': function (e, tmpl) {
    	$('.arrow-right').hide(400);
    },
    'mouseout [name=viewPage]': function (e, tmpl) {
    	$('.arrow-left').hide(400);	
    }
 });