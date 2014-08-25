Template.landing.events({
    'mouseover [name=attendPage]': function (e, tmpl) {
    	$('.arrow-right').show();
    },
    'mouseover [name=viewPage]': function (e, tmpl) {
    	$('.arrow-left').show();
    },
    'mouseout [name=attendPage]': function (e, tmpl) {
    	$('.arrow-right').hide();
    },
    'mouseout [name=viewPage]': function (e, tmpl) {
    	$('.arrow-left').hide();
    },
	'click [name=viewPage]': function() {
		console.log("viewPage Clicked");
		Router.go('watch');
	},
	'click [name=attendPage]': function() {
		console.log("attendPage Clicked");
		Router.go('attend');
	}
});

Template.landing.rendered = function () {
	$('.arrow-right').hide();
	$('.arrow-left').hide();
};