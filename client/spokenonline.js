function fillForm() {
	console.log("Filled form");
	$('#email').val("support@trashmountain.com");
	$('#fname').val("Test");
	$('#lname').val("Person");
	$('#address').val("Address");
	$('#city').val("City");
	$('#state').val("State");
	$('#zip').val("Zip");
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
  Template.base.events({

    'submit form': function (e, tmpl) {
	    //prevent the default form action on this form
	    e.preventDefault();

	    //put form data into variable
	    //for after cutoff date we only need email, fname and lname
	    var form;
	    form = {
		    "email":      $('#email').val(),
		    "fname":      $('#fname').val(),
		    "lname":      $('#lname').val(),
		    "address":    $('#address').val(),
		    "city":       $('#city').val(),
		    "state":      $('#state').val(),
		    "zip":        $('#zip').val(),
		    "created_at": new Date().getTime()
	    }

	    //Call the subscribe function to write this to the local database
	    Meteor.call("subscribe", form, function(error, result) {
		    if (result && result !== 'duplicate') {
			    $('.centerContents').show();

			    //Log the ID to the console
			    console.log(result);
		    } else {
			    $('.form-group').hide();
			    location.reload();
			    alert("Seems there was a problem with the email you entered. Please try again. If you continue to see this" +
				    " message then the email address you are using has probably already been used.");

		    }
	    });

		//Reset the form
		$('#signupForm')[0].reset();
		$('#fname').hide(100);
		$('#lname').hide(150);
		$('#address').hide(200);
		$('#city').hide(250);
		$('#state').hide(300);
		$('#zip').hide(350);
		$('#email').appendTo("#moveTo").animate(400);
		$('#email').prop('disabled', true);
		$('#email').attr("placeholder", "You're In! Check Your Email.");
	    $('#email').removeClass('smaller-width');
	    $('.moveAfterSubmit').css("paddingTop", "4px");
	    $('html, body').animate({
		    scrollTop: $("#topCol").offset().top
	    }, 600);
    },
    //keypress input detection for autofilling form with test data
    'keypress input': function(e) {
      if(e.which === 17) { //17 is ctrl + q
        fillForm();
      }
    },
    //Show the other form fields, animate them too
	'keyup #email': function(e,templ) {
	$('#fname').show(150, function () {
	  $('#fname').css("marginTop", "5px")
	});
	$('#lname').show(200, function () {
	  $('#lname').css("marginTop", "5px")
	});
	$('#address').show(250, function () {
	    $('#address').css("marginTop", "5px")
	});
	$('#city').show(300, function () {
		$('#city').css("marginTop", "5px")
	});
	$('#state').show(350, function () {
		$('#state').css("marginTop", "5px")
	});
	$('#zip').show(400, function () {
		$('#zip').css("marginTop", "5px")
	});
      //Move the registerNow button to the bottom so users know what this is
      //for (to submit the form)
      $('[name=registerNow]').appendTo("#moveTo").animate(800, function () {
	      $('#moveTo').css("marginTop", "10px")
      });
		$('html, body').animate({
			scrollTop: $("#email").offset().top
		}, 600);
    },
	'click [name=learnMore]': function(e,tmpl) {
		  if ($.remodal) {
			  $('.modal').remodal({
				  hashTracking: false
			  });
			  var modalSuccess = $.remodal.lookup[$('[data-remodal-id=modal_live_stream]').data('remodal')];
			  modalSuccess.open();
		  }
	},
	'click [name=learnMore_attend]': function(e,tmpl) {
		if ($.remodal) {
			$('.modal').remodal({
				hashTracking: false
			});
			var modalSuccess = $.remodal.lookup[$('[data-remodal-id=modal_learn_more_attend]').data('remodal')];
			modalSuccess.open();
		}
	},
	'click [name=q_a]': function(e,tmpl) {
		  if ($.remodal) {
			  $('.modal').remodal({
				  hashTracking: false
			  });
			  var modalSuccess = $.remodal.lookup[$('[data-remodal-id=modal_live_stream_q_a]').data('remodal')];
			  modalSuccess.open();
		  }
	  },
	  'click [name=q_a_attend]': function(e,tmpl) {
		  if ($.remodal) {
			  $('.modal').remodal({
				  hashTracking: false
			  });
			  var modalSuccess = $.remodal.lookup[$('[data-remodal-id=modal_q_a_attend]').data('remodal')];
			  modalSuccess.open();
		  }
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
    },
	'click #attendButton': function () {
		Router.go('/spoken/attend/register');
	},
	'click [name=give]': function() {
		window.open('https://trashmountain.com/give');
		$('[name=give]').css('')
	}
  });

  Template.base.helpers({
	headerText: function () {
		if (Session.equals('page', 'watch') || Session.equals('page', 'live')) {
			return "Live On";
		}else {
			return "Join Us On";
		}
	},
	showVideo: function () {
		if(Session.equals('page', 'watch') || Session.equals('page', 'attend')) {
			return true;
		} else {
			return false;
		}
	},
    showTime: function () {
      return Session.get("showTime");
    },
	showWatch: function () {
		return Session.equals('page', 'watch');
	},
	showWatchButtons: function () {
	  if (Session.equals('page', 'watch') || Session.equals('page', 'live')) {
		  return true;
	  } else {
		  return false;
	  }
	},
	//TODO: Show the live video stream if the page is 'live' and the id from the URL is not logged in.
	showLive: function () {
		if (Session.equals('page', 'live') && (Email_List.findOne({_id: Session.get('params._id')}) !== undefined)) {
			return true;
		}else {
			return false;
	  }
	},
	showPrompt: function () {
		if (Session.equals('page', 'live') && Email_List.find({_id: Session.get('params._id')}).fetch() === false) {
			return true;
		} else{
			return false;
		}
	},
	showCal: function () {
		return Session.equals('cal', 'show');
	},
    insertContent: function () {
    }
});

Template.base.created = function () {
};
Template.base.rendered = function () {
	$('.centerContents').hide();
	$('#signupForm').parsley();
	//Session.set('page', 'watch');
};

Template.stream.rendered = function() {
	$('#email').remove();
	$('#registerNow').remove();
	$('[name=give]').show();
	$('#livePageEdits').addClass('equalBottomMarginLive');
	$('[name=give]').show();$('.noBottomPadding').css('marginTop', '60px');
}