/** DishDetailsController Object constructor
 * 
 * @param {Object} dishDetailsView - the dishDetailsView object
 * @param {Object} model - the reference to the Dinner Model.
 */ 
var DishDetailsController = function (dishDetailsView, model, gc) {
    dishDetailsView.backToSearchBtn.click(function() {
        gc.showScreen('search');
    });
    dishDetailsView.addToMenuBtn.click(function() {
        model.addDishToMenu(dishDetailsView.selectedDish);
    });
}
 
