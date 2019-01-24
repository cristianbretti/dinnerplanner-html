/** DishSearchController Object constructor
 * 
 * @param {Object} dishSearchView - the dishSearchView object
 * @param {Object} app - the general state controller
 */ 
var DishSearchController = function (dishSearchView, app) {
    dishSearchView.resultViews.map(function(dishItemView) {
        var dishItemController = new DishItemController(dishItemView, app);
    })
}
 
