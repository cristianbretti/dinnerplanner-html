/** DinnerPrintoutView Object constructor
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */ 
var DinnerPrintoutView = function (container, model) {
    var menu = model.getFullMenu();
    
    menu.map(function(dish) {
        var dishPrintoutView = new DishPrintoutView(container, dish);
    })
}