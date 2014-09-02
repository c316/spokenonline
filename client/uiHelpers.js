UI.registerHelper('sidebarContents', function(context, options) {
	console.log(this.checkpoint);
		switch (this.checkpoint) {
			case 1:
				return '<h3>Case 1</h3>';
				break;
			case 2:
				return '<h3>Case 2</h3>';
				break;
			default:
				return '<h3>Default</h3>';
				break;
		}
});