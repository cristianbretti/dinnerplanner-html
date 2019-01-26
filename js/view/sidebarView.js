 /** SidebarView Object constructor
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model.
 */ 
var SidebarView = function (container, model) {  
    // Subscribe to model changes;
    model.addObserver(this);

    // Find interactive elements
    this.confirmDinnerBtn = container.find("#confirmDinnerBtn");
    container.find("#hamburgerToggle").click(function() {
        container.find('#sidebarContent').toggle();
    });
    this.numberOfGuestsInput = container.find('#numberOfGuestsInput');
    this.selectedDishesNameAndPriceContainer = container.find('#selectedDishesNameAndPriceContainer');
    this.totalPriceContainer = container.find("#totalCost");
    this.sidebarItems = [];
    this.sidebarItemControllers = [];
    
    this.update = function() {
        console.log("sidebarUpdate")
        this.numberOfGuestsInput.attr('value', model.getNumberOfGuests());

        this.selectedDishesNameAndPriceContainer.empty();
        var selectedDishes = model.getFullMenu();
        this.sidebarItems = [];
        this.sidebarItemControllers = [];
        selectedDishes.map(function(dish) {
            var price = model.getDishPrice(dish.id);
            var sidebarItem = new SidebarItemView(this.selectedDishesNameAndPriceContainer, dish, price);
            var sidebarItemController = new SidebarItemController(sidebarItem, model);
            this.sidebarItems.push(sidebarItem);
            this.sidebarItemControllers.push(sidebarItemController);
        }, this);    
        this.totalPriceContainer.html("SEK " + model.getTotalMenuPrice());
    }
    this.update();
}