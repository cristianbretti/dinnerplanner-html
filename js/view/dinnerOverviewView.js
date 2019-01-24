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
    
    this.printBtn = container.find("#printBtn");

    this.menuDishesContainer = container.find('#menuDishesContainer');
    var menu = model.getFullMenu();
    menu.map(function(dish) {
        var dishItemWithPriceContainer = $('<div/>')
        var dishItemView = new DishItemView(dishItemWithPriceContainer, dish);
        var costOfDish = $('<div/>').attr({'class': 'text-right pr-6'}).html(model.getDishPrice(dish.id) + " SEK")
        dishItemWithPriceContainer.append(costOfDish);
        this.menuDishesContainer.append(dishItemWithPriceContainer)
    }, this)

    var totalPrice = container.find('#totalPrice');
    totalPrice.html(model.getTotalMenuPrice() + ' SEK');
}
 
