/*****************************************************************************/
/* EmailList Publish Functions
/*****************************************************************************/

Meteor.publish('email_list', function (input) {
	 return email_list.find({_id: input});
});
