if (Meteor.isClient) {


  Template.main.events({
    
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    },
    'click [name=learnMore]': function(e,tmpl) {
      Session.set("showVideo", "false");
      Session.set("showRegisterNow", "false");
      Session.set("showLearnMore", "true");      
    },
    'click [name=registerNow]': function(e,tmpl) {
      Session.set("showLearnMore", "false");
      Session.set("showVideo", "false");
      Session.set("showRegisterNow", "true");
    },
    'click [name=promoVideo]': function(e,tmpl) {
      Session.set("showLearnMore", "false");
      Session.set("showRegisterNow", "false");
      Session.set("showVideo", "true");
    }
  });

  Template.main.helpers({
    greeting: function () {
      return "Welcome to spokenonline.";
    }
});

Template.main.created = function () {

};
Template.main.rendered = function () {
   return $("#DateCountdown").TimeCircles({
    "animation": "smooth",
    "bg_width": 1,
    "fg_width": 0.04,
    "circle_bg_color": "#ededed",
    "time": {
        "Days": {
            "text": "Days",
            "color": "#CCCCCC",
            "show": true
        },
        "Hours": {
            "text": "Hours",
            "color": "#CCCCCC",
            "show": true
        },
        "Minutes": {
            "text": "Minutes",
            "color": "#CCCCCC",
            "show": true
        },
        "Seconds": {
            "text": "Seconds",
            "color": "#CCCCCC",
            "show": true
        }
      }
    });
};


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
