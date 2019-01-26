/** DishItemController Object constructor
 * 
 * @param {Object} dishItemView - the dishItemView object
 * @param {Object} model - the reference to the Dinner Model.
 */ 
var DishItemController = function (dishItemView, model) {
    dishItemView.item.click(function() {
        model.setDetailedDinner(dishItemView.dishId);
        showDishDetailsScreen();
    })
}
 
