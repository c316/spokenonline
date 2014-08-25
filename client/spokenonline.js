function fillForm() {
  console.log("Filled form");
  $('#email').val("support@trashmountain.com");
  $('#fname').val("Test");
  $('#lname').val("Person");
}

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
    'submit form': function (e, tmpl) {
      
      //prevent the default form action on this form
      e.preventDefault();
      console.log($(this));
      var has_empty = false;

   $(this).find( 'input[type!="hidden"]' ).each(function () {

      if ( ! $(this).val() ) { has_empty = true; return false; }
   });

   if ( has_empty ) { return false; }

      //put form data into variable
      //for after cutoff date we only need email,
      //fname, lname
      var form;
      form = {
      "email":      $('#email').val(),
      "fname":      $('#fname').val(),
      "lname":      $('#lname').val(),
	  "address":    $('#address').val(),
      "created_at": new Date().getTime()
      }

	    Meteor.call("subscribe", form, function(error, result) {
		    if (result) {
			    //Insert ID into the modal
			    $('#modalContent').text("You rock! Check your email for more info from us. Please share with your friends.");
			    $('.centerContents').show();

			    //Log the ID to the console
			    console.log(result);
		    } else {
			    //Log the ID to the console
			    console.log(error);
		    }
	    });

      //Reset the form
      $('#signupForm')[0].reset();
      $('#fname').hide(400);
      $('#lname').hide(600);
	  $('#address').hide(800);
      $('#email').appendTo("#moveTo").animate(800);
      $('#email').prop('disabled', true);
      $('#email').attr("placeholder", 'We got it.');
    },
    //keypress input detection for autofilling form with test data
    'keypress input': function(e) {
      if(e.which === 17) { //17 is ctrl + q
        fillForm();
      }
    },
    //Show the other form fields, animate them too
	'keyup #email': function(e,templ) {
	$('#fname').show(400, function () {
	  $('#fname').css("marginTop", "5px")
	});
	$('#lname').show(600, function () {
	  $('#lname').css("marginTop", "5px")
	});
	$('#address').show(800, function () {
	    $('#address').css("marginTop", "5px")
	});
      //Move the registerNow button to the bottom so users know what this is
      //for (to submit the form)
      $('[name=registerNow]').appendTo("#moveTo").animate(800, function () {
	      $('#moveTo').css("marginTop", "10px")
      });
    },
    //Show more info about the event, move the screen down too.
    'click [name=learnMore]': function(e,tmpl) {
      Session.set("showLearnMore", true);      
      log(Session.get("showLearnMore"));
    },
    //Show the Video, move the screen to top.
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
	//$('.centerContents').hide();
};
