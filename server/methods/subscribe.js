/**
 * Created by Josh on 8/25/2014.
 */

Meteor.methods({
	subscribe: function (form) {
		//insert the form data into the mongo collection
		form._id = Email_List.insert(form);
		return form._id;
	}
});