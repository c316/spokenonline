/*****************************************************************************/
/* Control Panel Publish Functions
 /*****************************************************************************/

Meteor.publish('control_panel', function (input) {
	return Control_Panel.find({_id: input});
});
