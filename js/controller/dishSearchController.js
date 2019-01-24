/** DishSearchController Object constructor
 * 
 * @param {Object} dishSearchView - the dishSearchView object
 * @param {Object} app - the general state controller
 */ 
var DishSearchController = function (dishSearchView, model, app) {
    dishSearchView.resultViews.map(function(dishItemView) {
        var dishItemController = new DishItemController(dishItemView, model, app);
    })
}
 
