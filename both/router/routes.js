/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'/*,
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
	    Session.set('cal', 'no');
          return $("#DateCountdown").TimeCircles();
      }
    });
	this.route('base', {path: '/spoken/watch/calendar',
		data: function () {
			Session.set('page', 'watch');
			Session.set('cal', 'show');
			return $("#DateCountdown").TimeCircles();
		}
	});
	this.route('base', {path: '/spoken/attend',
		data: function () {
			Session.set('page', 'attend');
			return $("#DateCountdown").TimeCircles();
		}
	});
	// TODO: Setup Modal so the page can redirect to the correct :_id page and then be subscribed.
	this.route('prompt', {path: '/spoken/live',
		data: function() {
			Session.set('page', 'prompt');
		}
	});
	this.route('base', {path: '/spoken/live/:_id',
		waitOn: function() {
			Meteor.subscribe('email_list', this.params._id);
		},
		data: function () {
			Session.set('page', 'live');
			Session.set('params._id', this.params._id);
		}
	});
	this.route('calendar', {path: '/spoken/calendar',
		data: function() {
			Session.set('page', 'calendar');
		}
	});
});
