/** BackAndEditController Object constructor
 * 
 * @param {Object} backAndEditView - the backAndEditView object
 * @param {Object} model - the reference to the Dinner Model.
 */ 
var BackAndEditController = function (backAndEditView, model) {
    backAndEditView.backAndEditBtn.click(function() {
        showDishSearchScreen();
    });
}
 
