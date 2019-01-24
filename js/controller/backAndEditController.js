/** BackAndEditController Object constructor
 * 
 * @param {Object} backAndEditView - the backAndEditView object
 * @param {Object} app - the general state controller
 */ 
var BackAndEditController = function (backAndEditView, app) {
    backAndEditView.backAndEditBtn.click(function() {
        app.showDishSearchScreen();
    });
}
 
