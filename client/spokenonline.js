function log() {
  console.log(this);
}

function setupDate() {
  if (Session.get('showTime')) {
    $("#DateCountdown").TimeCircles(/*{
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
    }*/);
  } else {
    $('#DateCountdown').hide();
  }
}
  Template.watch.events({
    'click [name=learnMore]': function(e,tmpl) {
      Session.set("showLearnMore", true);      
      log(Session.get("showLearnMore"));
    },
    'click [name=video]': function(e,tmpl) {
      Session.set("showVideo", true);
      log(Session.get("showVideo"));
    },
    'click [name=timeHeading]': function(e,tmpl) {
      if (Session.get('showTime')) {
        Session.set('showTime', false);
        setupDate();
      } else {
          Session.set('showTime', true);
          setTimeout(function () {
        setupDate(); //call the same function twice, 
        setupDate(); //ugly hack to fix the box not appearing when switching between check and card
      }, 20);
      }
    }
  });

  Template.watch.helpers({
    showVideo: function () {
      return Session.get("showVideo");
    },
    showLearnMore: function () {
      return Session.get("showLearnMore");
    },
    showTime: function () {
      return Session.get("showTime");
    },
    insertContent: function () {
    }
});

Template.watch.created = function () {
//Session.set("showVideo", "false");  
};
Template.watch.rendered = function () {
   
};
Template.landing.events({
  'click [name=viewPage]': function() {
      console.log("viewPage Clicked");
      Router.go('watch');
    },
    'click [name=attendPage]': function() {
      console.log("attendPage Clicked");
      Router.go('attend');
    }
  });