Template.landing.events({
    'mouseover [name=attendPage]': function (e, tmpl) {
    	$('.arrow-left').show();
    },
    'mouseover [name=viewPage]': function (e, tmpl) {
    	$('.arrow-right').show();
    },
    'mouseout [name=attendPage]': function (e, tmpl) {
    	$('.arrow-left').hide();
    },
    'mouseout [name=viewPage]': function (e, tmpl) {
    	$('.arrow-right').hide();
    },
	'click [name=viewPage]': function() {
		console.log("viewPage Clicked");
		Router.go('/spoken/watch');
	},
	'click [name=attendPage]': function() {
		console.log("attendPage Clicked");
		Router.go('/spoken/attend');
	}
});

Template.landing.rendered = function () {
	$('.arrow-right').hide();
	$('.arrow-left').hide();
};