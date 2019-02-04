/** DinnerOverviewView Object constructor
 * 
 * This object represents the code for one specific view (in this case the DinnerOverview view). 
 * 
 * It is responsible for:
 * - constructing the view (e.g. if you need to create some HTML elements procedurally) 
 * - populating the view with the data
 * - updating the view when the data changes
 * 
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */ 
var DinnerOverviewView = function (container, model) {
    // Subsribe to model 
    model.addObserver({view: this, id: "DINNER-OVERVIEW"});
    // Find interactive elements
    this.printBtn = container.find("#printBtn");
    this.menuDishesContainer = container.find('#menuDishesContainer');
    this.totalPrice = container.find('#totalPrice');

    this.hide = () => {
        container.hide();
    }
    this.show = () => {
        container.show();
    }

    this.update = function() {
        this.menuDishesContainer.empty();
        var menu = model.getFullMenu();
        this.dishItems = [];
        this.dishItemControllers = [];
        menu.map(function(dish) {
            var dishItemWithPriceContainer = $('<div/>')
            var dishItemView = new DishItemView(dishItemWithPriceContainer, dish);
            var dishItemController = new DishItemController(dishItemView, model);
            this.dishItems.push(dishItemView);
            this.dishItemControllers.push(dishItemController);
            var costOfDish = $('<div/>').attr({'class': 'text-right pr-6'}).html(model.getDishPrice(dish) + " SEK")
            dishItemWithPriceContainer.append(costOfDish);
            this.menuDishesContainer.append(dishItemWithPriceContainer)
        }, this);   
        this.totalPrice.html(model.getTotalMenuPrice() + ' SEK');
    }
    this.update();
}
 
