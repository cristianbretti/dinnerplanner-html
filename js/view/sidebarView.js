 /** SidebarView Object constructor
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model.
 */ 
var SidebarView = function (container, model) {  

    // Add functionality to hamburger
    var listener = function() {
        container.find('#sidebarContent').toggle();
    }
    container.find("#hamburgerToggle").click(listener);

    //Number of guests input on left panel
    numberOfGuestsInput = container.find('#numberOfGuestsInput');
    numberOfGuestsInput.attr('value', model.getNumberOfGuests());

    //Selected dishes in left panel
    var selectedDishesNameAndPriceContainer = container.find('#selectedDishesNameAndPriceContainer');
    var selectedDishes = model.getFullMenu();

    selectedDishes.map(function(dish) {
        var oneSelectedDishContainer = $('<div/>').attr({
            'class': 'flex justify-between bg-orange m-1 p-1 border border-black',
        })

        var nameOfDish = $('<div/>').attr('class', "").html(dish.name)
        var priceOfDish = $('<div/>').attr('class', "").html(model.getDishPrice(dish.id))

        oneSelectedDishContainer.append(nameOfDish, priceOfDish);
        selectedDishesNameAndPriceContainer.append(oneSelectedDishContainer);
    });

    //Total price on left panel
    var totalPriceContainer = container.find("#totalCost");
    totalPriceContainer.html("SEK " + model.getTotalMenuPrice());

}