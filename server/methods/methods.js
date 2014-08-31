/**
 * Created by Josh on 8/25/2014.
 */
//var Fiber = Meteor.npmRequire('fibers');

function mailchimpSubscribe (form) {
	console.log("I made it to the top....of mailchimpSubscribe");
	console.log(form._id);
	HTTP.call("POST", "https://us3-api-mailchimp-com-iswbdbcku2lx.runscope.net/2.0/lists/subscribe.format",
		{data:{
			"apikey": Meteor.settings.mailchimpkey,
			"id": "94e2b8146f",
			"email": {
				"email": form.email
			},
			"email_address": "info@trashmountain.com",
			"merge_vars": {
				"FNAME": form.fname,
				"LNAME": form.lname,
				"ID": form._id,
				"ADDRESS": {
					"addr1": form.address,
					"city": form.city,
					"state": form.state,
					"zip": form.zip
				},

			},
			"double_optin": false,
			"update_existing": true
		}},
		function (error, result) {
			if (!error) {
				console.log("It worked");
			}
			else{
				console.log(error);
			}
		});
}

Meteor.methods({
	subscribe: function (form) {
		//insert the form data into the mongo collection
		if (!Email_List.findOne({email: form.email})) {
			form._id = Email_List.insert(form);
			console.log(form);
			mailchimpSubscribe(form);
			return form._id;
		}else {
			return 'duplicate';
		}
	},
	 storeNumber: function(form) {
			if (Email_List.findOne({email: form.email}) !== undefined) {
				var id = Email_List.findOne({email: form.email})._id;
				console.log(form.email + " " + form.number);
				Email_List.update(id, {$inc: {number: form.number}});
				return (Email_List.findOne({email: form.email})._id);
			} else {
				console.log("false");
				return false;
			}
	}
});