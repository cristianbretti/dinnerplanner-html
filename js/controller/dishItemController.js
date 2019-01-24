/** DishItemController Object constructor
 * 
 * @param {Object} dishItemView - the dishItemView object
 * @param {Object} app - the general state controller
 */ 
var DishItemController = function (dishItemView, app) {
    dishItemView.item.click(function() {
        console.log(dishItemView.dishId);
        app.showDishDetailsScreen(dishItemView.dishId);
    })
}
 
