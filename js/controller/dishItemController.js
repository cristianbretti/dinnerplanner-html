/** DishItemController Object constructor
 * 
 * @param {Object} dishItemView - the dishItemView object
 * @param {Object} app - the general state controller
 */ 
var DishItemController = function (dishItemView, model, app) {
    dishItemView.item.click(function() {
        model.setDetailedDinner(dishItemView.dishId);
        app.showDishDetailsScreen();
    })
}
 
