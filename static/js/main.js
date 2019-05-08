(function(){
    // my code

    // xs toggle
    var pagesidebar = $('.pagesidebar');
    var xsToggle = $('.xs-toggle');

    xsToggle.on('click', function(e){
        e.preventDefault();
        if (pagesidebar.is(':visible')) {
            pagesidebar.hide();
        } else {
            pagesidebar.show();
        }
    });




}());