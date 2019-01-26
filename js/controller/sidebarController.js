/** SidebarController Object constructor
 * 
 * @param {Object} sidebarView - the SidebarView object
 * @param {Object} app - the general state controller
 */ 
var SidebarController = function (sidebarView, model, app) {
    sidebarView.confirmDinnerBtn.click(function() {
        app.showDinnerOverviewScreen();
    });

    sidebarView.numberOfGuestsInput.change(function(event) {
        model.setNumberOfGuests(event.target.value);
    });

    sidebarView.sidebarItems.map(function(item) {
        var sidebarItemController = new SidebarItemController(item, model, app);
    });
}
 
