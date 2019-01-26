 /** SidebarView Object constructor
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model.
 */ 
var SidebarView = function (container, model) {  

    this.confirmDinnerBtn = container.find("#confirmDinnerBtn");
    // Add functionality to hamburger
    var listener = function() {
        container.find('#sidebarContent').toggle();
    }
    container.find("#hamburgerToggle").click(listener);

    //Number of guests input on left panel
    this.numberOfGuestsInput = container.find('#numberOfGuestsInput');
    this.numberOfGuestsInput.attr('value', model.getNumberOfGuests());

    //Temporary add dishes to the menu TODO: remove
-    model.addDishToMenu(1);
-    model.addDishToMenu(101);

    //Selected dishes in left panel
    this.selectedDishesNameAndPriceContainer = container.find('#selectedDishesNameAndPriceContainer');
    var selectedDishes = model.getFullMenu();

    this.sidebarItems = [];
    selectedDishes.map(function(dish) {
        var price = model.getDishPrice(dish.id);
        var sidebarItem = new SidebarItemView(this.selectedDishesNameAndPriceContainer, dish, price);
        this.sidebarItems.push(sidebarItem);
    }, this);

    //Total price on left panel
    this.totalPriceContainer = container.find("#totalCost");
    this.totalPriceContainer.html("SEK " + model.getTotalMenuPrice());

}