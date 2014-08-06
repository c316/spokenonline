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
  this.route('landing', {path: '/spokenonline',
  });
  this.route('watch', {path: '/spokenonline/watch',
  data: function () {
        return $("#DateCountdown").TimeCircles();
    }
  });
  this.route('attend', {path: '/spokenonline/attend',
  data: function () {
        return $("#DateCountdown").TimeCircles();
    }
  });
});
