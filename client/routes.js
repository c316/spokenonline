/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading'/*,
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase'*/
});

Router.map(function () {
  this.route('landing', {path: '/spoken',
  });
	this.route('welcome', {path: '/spoken/welcome',
		data: function () {
			return $("#DateCountdown").TimeCircles();
		}
	});
	this.route('base', {path: '/spoken/watch',
    data: function () {
		Session.set('page', 'watch');
          return $("#DateCountdown").TimeCircles();
      }
    });
	this.route('base', {path: '/spoken/attend',
		data: function () {
			Session.set('page', 'attend');
			return $("#DateCountdown").TimeCircles();
		}
	});
	// TODO: Need to add a way to know if a user is logged in right now. Then if they are mark that in the database and use this area to show them that the ID is already in use
	this.route('base', {path: '/spoken/live/:_id',
		waitOn: function() {
			Meteor.call('doesExist', this.params._id, function(error, result){
				if (result){
					console.log(result);
					return Meteor.subscribe('email_list', this.params._id);
				}
				else {
					console.log(result);
					Router.go('/spoken/watch');
				}
			});

		},
		data: function () {
			Session.set('page', 'live');
			return Email_List.findOne(this.params._id);
		}
	});
});
