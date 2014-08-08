function setupDate() {
    $("#DateCountdown").TimeCircles({
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
  }

Template.welcome.events({
    'focus input': function() {
      $('#viewerNumber').css({
        'border-color': '#1abc9c',
        'border-size': '20px',
        'outline': '0',
        '-webkit-box-shadow': 'none',
        'box-shadow': 'none',
        'border': '4px solid #bdc3c7'
      });
      $('#email').css({
        'border-color': '#1abc9c',
        'border-size': '20px',
        'outline': '0',
        '-webkit-box-shadow': 'none',
        'box-shadow': 'none',
        'border': '4px solid #bdc3c7'
      });
      console.log("Focused on #email");
    }
});

Template.welcome.helpers({
});

Template.welcome.rendered = function () {
  setupDate();
};