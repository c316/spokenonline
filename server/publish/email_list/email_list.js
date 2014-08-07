/*****************************************************************************/
/* EmailList Publish Functions
/*****************************************************************************/

Meteor.publish('email_list', function (input) {
	 return Email_List.find({_id: input});
});
