/** SidebarItemController Object constructor
 * 
 * @param {Object} sidebarItemView - the SidebarItemView object
 * @param {Object} app - the general state controller
 */ 
var SidebarItemController = function (sidebarItemView, model, app) {
    sidebarItemView.deleteDishBtn.click(function() {
        model.removeDishFromMenu(sidebarItemView.dishId);
    });
}
 
