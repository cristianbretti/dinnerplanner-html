/** DishSearchController Object constructor
 * 
 * @param {Object} dishSearchView - the dishSearchView object
 * @param {Object} model - the reference to the Dinner Model.
 */ 
var DishSearchController = function (dishSearchView, model) {
    dishSearchView.dishItems.map(function(dishItemView) {
        var dishItemController = new DishItemController(dishItemView, model);
    })

    dishSearchView.searchBtn.click(function() {
        dishSearchView.update();
    });
}
 
