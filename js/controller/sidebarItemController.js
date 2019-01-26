/** SidebarItemController Object constructor
 * 
 * @param {Object} sidebarItemView - the SidebarItemView object
 * @param {Object} model - the reference to the Dinner Model.
 */ 
var SidebarItemController = function (sidebarItemView, model) {
    sidebarItemView.deleteDishBtn.click(function() {
        model.removeDishFromMenu(sidebarItemView.dishId);
    });
}
 
