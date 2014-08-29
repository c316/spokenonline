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

	    Meteor.call("mailchimpSubscribe", form, function(error, result) {
		    if (result) {
			    //Log the results to the console
			    console.log(result);
		    } else {
			    //Log the error to the console
			    console.log(error);
		    }
	    });

	    //Call the subscribe function to write this to the local database
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
		$('#city').hide(1000);
		$('#state').hide(1200);
		$('#zip').hide(1400);
		$('#email').appendTo("#moveTo").animate(800);
		$('#email').prop('disabled', true);
		$('#email').attr("placeholder", 'We got it.');
	    $('#email').removeClass('smaller-width');
	    $('.moveButtonDown').css("paddingTop", "101px");
	    $('html, body').animate({
		    scrollTop: $("#topCol").offset().top
	    }, 2000);
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
	$('#lname').show(500, function () {
	  $('#lname').css("marginTop", "5px")
	});
	$('#address').show(600, function () {
	    $('#address').css("marginTop", "5px")
	});
	$('#city').show(700, function () {
		$('#city').css("marginTop", "5px")
	});
	$('#state').show(800, function () {
		$('#state').css("marginTop", "5px")
	});
	$('#zip').show(900, function () {
		$('#zip').css("marginTop", "5px")
	});
      //Move the registerNow button to the bottom so users know what this is
      //for (to submit the form)
      $('[name=registerNow]').appendTo("#moveTo").animate(800, function () {
	      $('#moveTo').css("marginTop", "10px")
      });
		$('html, body').animate({
			scrollTop: $("#email").offset().top
		}, 2000);
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
	'click [name=q_a]': function(e,tmpl) {
		  if ($.remodal) {
			  $('.modal').remodal({
				  hashTracking: false
			  });
			  var modalSuccess = $.remodal.lookup[$('[data-remodal-id=modal_live_stream_q_a]').data('remodal')];
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
    }
  });

  Template.base.helpers({
    showTime: function () {
      return Session.get("showTime");
    },
	showWatch: function () {
		return Session.equals('page', 'watch');
	},
	//TODO: Show the live video stream if the page is 'live' and the id from the URL is not logged in.
	showLive: function () {
		if (Session.equals('page', 'live') && (Email_List.find({_id: Session.get('params._id')}).fetch() != false)) {
			console.log(true);
			return true;
		}else {
			return false;
	  }
	},
	showPrompt: function () {
		if (Email_List.find({_id: Session.get('params._id')}).fetch() == false) {
			return true;
		} else{
			return false;
		}
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

}
