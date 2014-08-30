/**
 * Created by Josh on 8/29/2014.
 */
Template.calendar.rendered = function () {
	addthisevent.refresh();
	addthisevent.settings({
		license   : "",
		mouse     : false,
		css       : false,
		outlook   : {show:true, text:"Outlook Calendar"},
		google    : {show:true, text:"Google Calendar"},
		yahoo     : {show:true, text:"Yahoo Calendar"},
		hotmail   : {show:true, text:"Hotmail Calendar"},
		ical      : {show:true, text:"iCal Calendar"},
		facebook  : {show:true, text:"Facebook Event"},
		dropdown  : {order:"outlook,google,ical"},
		callback  : ""
	});

	// Redirects the browser back to the /watch page after closing the modal on the /calendar page
	$(document).one('close', '[data-remodal-id=modal_add_to_calendar]', function () {
		Router.go('/spoken/watch');
		Session.equals('cal', 'no');
	});

	if ($.remodal && Session.equals('cal', 'show')) {
		$('.modal').remodal({
			hashTracking: false
		});
		var modalSuccess = $.remodal.lookup[$('[data-remodal-id=modal_add_to_calendar]').data('remodal')];
		modalSuccess.open();

		//Changed the width for the calendar modal only.
		$('[data-remodal-id=modal_add_to_calendar]').css('width', '300px').one();
	}
};