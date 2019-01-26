/** DinnerPrintoutView Object constructor
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */ 
var DinnerPrintoutView = function (container, model) {
    // Subscribe to model
    model.addObserver(this);

    this.update = function() {
        container.empty();
        var menu = model.getFullMenu();
    
        menu.map(function(dish) {
            var dishPrintoutView = new DishPrintoutView(container, dish);
        })
    }
    this.update();
}