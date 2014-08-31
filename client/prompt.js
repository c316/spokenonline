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
		Meteor.call('storeNumber', form, function(error, result) {
			if(result !== false){
				Router.go('/spoken/live/' + result);
			} else {
				alert("That didn't work, please try again. If you still can't get through you'll need to register." +
					" To register, click the register link below the button on this page.");
				$('#registerLink').show();
			}
		});
	}
});
Template.prompt.rendered = function () {
	$('#entryForm').parsley();
};
