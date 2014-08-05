  Template.main.events({
    
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    },
    'click [name=learnMore]': function(e,tmpl) {
      Session.set("showLearnMore", "true");      
    },
    'click [name=video]': function(e,tmpl) {
      Session.set("showLearnMore", "false");
    }
  });

  Template.main.helpers({
    showVideo: function () {
      var setThis = Session.equals("showVideo");
      console.log(setThis);
      return setThis;
    },
    showLearnMore: function () {
      var setThis = Session.equals("showLearnMore");
      console.log(setThis);
      return setThis;
    },
    log: function () {
      console.log(this);
    },
    insertContent: function () {
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