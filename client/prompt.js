/**
 * Created by Josh on 8/29/2014.
 */

Template.prompt.events({
	'submit form': function(e,tmpl) {
		e.preventDefault();
		alert("Got to submit form area");
		var form = {
			number: $('#numberWithYou').val(),
			email: $('#email').val()
		};

		console.log(form.number + " " + form.email);
		Meteor.call('storeNumber', form, function(error, result) {
			console.log(result);
			if(result != false){
				console.log(result);
				Router.go('/spoken/live/' + result);
			} else {
				alert("That didn't work");
			}
		});
	}

});
Template.prompt.rendered = function () {
	if ($.remodal && Session.equals('page', 'prompt')) {
		$('.modal').remodal({
			hashTracking: false
		});
		var modalSuccess = $.remodal.lookup[$('[data-remodal-id=entryRemodal]').data('remodal')];
		modalSuccess.open();
	}
	$('.remodal-overlay').unbind('click.remodal');
	$(document).unbind('keyup.remodal');
	$('.remodal-close').removeClass("remodal-close");
	$('#entryForm').parsley();
};
