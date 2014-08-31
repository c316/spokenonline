/**
 * Created by Josh on 8/29/2014.
 */
Template.prompt.events({
	'submit form': function(e,tmpl) {
		e.preventDefault();
		var form = {
			number: +($('#numberWithYou').val()),
			email: $('#emailAddress').val()
		};

		console.log(form.number + " " + form.email);
		Meteor.call('storeNumber', form, function(error, result) {

			if(result !== false){
				Router.go('/spoken/live/' + result);
				console.log(result);
			} else {
				alert("That didn't work, please try again. If you still can't get through you'll need to register." +
					" To register, click the register link below the button on this page.");
				$('#registerLink').show();
			}
		});
	}
});
Template.prompt.rendered = function () {
/*	if ($.remodal && Session.equals('page', 'prompt')) {
		$('.modal').remodal({
			hashTracking: false
		});
		var modalSuccess = $.remodal.lookup[$('[data-remodal-id=entryRemodal]').data('remodal')];
		modalSuccess.open();

		$('.remodal-overlay').unbind('click.remodal');
		$(document).one().unbind('keyup.remodal');
		$('.remodal-close').removeClass("remodal-close");
	}*/
	$('#entryForm').parsley();
};
