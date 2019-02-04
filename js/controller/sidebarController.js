/** SidebarController Object constructor
 * 
 * @param {Object} sidebarView - the SidebarView object
 * @param {Object} model - the reference to the Dinner Model.
 */ 
var SidebarController = function (sidebarView, model, gc) {
    sidebarView.confirmDinnerBtn.click(function() {
        gc.showScreen('overview');
    });

    sidebarView.numberOfGuestsInput.change(function(event) {
        model.setNumberOfGuests(event.target.value);
    });

    sidebarView.hamburgerToggle.click(function() {
        sidebarView.sidebarContent.toggle();
    })
}
 
