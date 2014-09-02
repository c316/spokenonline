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
	this.route('attend', {path: '/spoken/attend/register',
		data: function () {
			Session.set('page', 'register');
		}
	});
	this.route('prompt', {path: '/spoken/live',
		data: function() {
			Session.set('page', 'prompt');
		}
	});
	this.route('live', {path: '/spoken/live/:_id',
		waitOn: function() {
			Meteor.subscribe('control_panel', 'RwL6DMxwwmnH2sGTw');
			Meteor.subscribe('email_list', this.params._id);
		},
		data: function () {
			Session.set('removeTime', false);
			Session.set('page', 'live');
			Session.set('params._id', this.params._id);
			Email_List.findOne(this.params._id);
			$("#DateCountdown").TimeCircles();
			return Control_Panel.findOne('RwL6DMxwwmnH2sGTw');
		}
	});
	this.route('calendar', {path: '/spoken/calendar',
		data: function() {
			Session.set('page', 'calendar');
		}
	});
});
