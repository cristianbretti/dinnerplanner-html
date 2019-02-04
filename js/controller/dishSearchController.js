/** DishSearchController Object constructor
 * 
 * @param {Object} dishSearchView - the dishSearchView object
 * @param {Object} model - the reference to the Dinner Model.
 */ 
var DishSearchController = function (dishSearchView, model, gc) {
    dishSearchView.searchBtn.click(function() {
        dishSearchView.update();
    });
}
 
