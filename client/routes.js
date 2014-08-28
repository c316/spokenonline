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
  this.route('watch', {path: '/spoken/watch',
    data: function () {
          return $("#DateCountdown").TimeCircles();
      }
  });
  this.route('attend', {path: '/spoken/attend',
    data: function () {
          return $("#DateCountdown").TimeCircles();
      }
  });
  this.route('welcome', {path: '/spoken/welcome',
    data: function () {
          return $("#DateCountdown").TimeCircles();
      }
  });
  this.route('live', {path: '/spoken/live/:_id',
    waitOn: function() { return Meteor.subscribe('email_list', this.params._id)},
    data: function () {
      return Email_List.findOne(this.params._id);
    }
  });
});
