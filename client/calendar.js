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

	$(document).on('close', '.remodal', function () {
		Router.go('/spoken/watch');
	});

	if ($.remodal && Session.equals('cal', 'show')) {
		$('.modal').remodal({
			hashTracking: false
		});
		var modalSuccess = $.remodal.lookup[$('[data-remodal-id=modal_add_to_calendar]').data('remodal')];
		modalSuccess.open();
		$('.remodal').css('width', '300px');
	}
};