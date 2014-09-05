UI.registerHelper('sidebarContents', function (context, options) {
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

UI.registerHelper('learnMoreStream', function () {
        return "<div class='text-left'>\
            <h1>Spoken Live Stream</h1>\
            <p>For the first time in TMP history we will be live streaming the event around the world.\
            This is a great opportunity for everyone to be a part of the night and Spoken 2014 promises to\
            be an evening you will not want to miss! Throughout the event, you will experience the heart\
            and vision of Trash Mountain Project with all-new videos, live music, testimonials, and\
            international speakers. We greatly value your time and promise the event will last no longer\
            than 90 minutes.</p>\
        </div>";
    });

UI.registerHelper('learnMoreAttend', function () {
    return "<div class='text-left'>\
        <h1>Shawnee Ballroom</h1>\
        <p>Join us in the Shawnee Ballroom at Capitol Plaza in Topeka, KS for a brand new Spoken experience.\
    This event will be theater style and will include the live stream from the Sunflower Ballroom, as well as\
     new TMP videos, live music, speakers, dessert and coffee. This is a great opportunity for everyone to be a\
      part of the night and experience all the exhibits, meet international leaders, and learn more about the TMP \
      vision. We greatly value your time and promise the event will last no longer than 90 minutes.  \
      Did we mention it is free! </p>\
    </div>";
});

UI.registerHelper('promoVideoLink', function () {
    return '';
});