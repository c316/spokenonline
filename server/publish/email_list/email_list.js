/*****************************************************************************/
/* EmailList Publish Functions
/*****************************************************************************/

Meteor.publish('email_list', function (input) {
	if (Email_List.find({_id: input})) {
		return Email_List.find({_id: input});
	}
	else {
		return false;
	}

});
