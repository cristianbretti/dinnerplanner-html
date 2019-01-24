/** SidebarController Object constructor
 * 
 * @param {Object} sidebarView - the SidebarView object
 * @param {Object} app - the general state controller
 */ 
var SidebarController = function (sidebarView, model, app) {
    sidebarView.confirmDinnerBtn.click(function() {
        app.showDinnerOverviewScreen();
    });
}
 
