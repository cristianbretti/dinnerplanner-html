/** SidebarController Object constructor
 * 
 * @param {Object} sidebarView - the SidebarView object
 * @param {Object} model - the reference to the Dinner Model.
 */ 
var SidebarController = function (sidebarView, model) {
    sidebarView.confirmDinnerBtn.click(function() {
        showDinnerOverviewScreen();
    });

    sidebarView.numberOfGuestsInput.change(function(event) {
        model.setNumberOfGuests(event.target.value);
    });
}
 
