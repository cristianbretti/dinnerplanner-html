/** DishDetailsController Object constructor
 * 
 * @param {Object} dishDetailsView - the dishDetailsView object
 * @param {Object} app - the general state controller
 */ 
var DishDetailsController = function (dishDetailsView, app) {
    dishDetailsView.backToSearchBtn.click(function() {
        app.showDishSearchScreen();
    })
}
 
