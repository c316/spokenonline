/*****************************************************************************/
/* EmailList Publish Functions
/*****************************************************************************/

Meteor.publish('email_list', function (input) {
	var storeSearch = Email_List.find({_id: input});
	console.log(storeSearch);
	return storeSearch;
});
