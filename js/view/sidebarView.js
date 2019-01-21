 /** SidebarView Object constructor
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model.
 */ 
var SidebarView = function (container, model) {  
    //Number of guests input on left panel
    numberOfGuestsInput = container.find('#numberOfGuestsInput');
    numberOfGuestsInput.attr('value', model.getNumberOfGuests());

    //Temporary add dishes to the menu TODO: remove
    model.addDishToMenu(1);
    model.addDishToMenu(101);

    //Selected dishes in left panel
    var selectedDishesNameAndPriceContainer = container.find('#selectedDishesNameAndPriceContainer');
    var selectedDishes = model.getFullMenu();

    selectedDishes.map(function(dish) {
        var oneSelectedDishContainer = $('<div/>').attr({
            'class': 'flex flex-row justify-between bg-primary margin-2',
        })

        var nameOfDish = $('<div/>').attr('class', "padding-2 flex-1").html(dish.name)
        var priceOfDish = $('<div/>').attr('class', "padding-2 flex-1 text-right").html(model.getDishPrice(dish.id))

        oneSelectedDishContainer.append(nameOfDish, priceOfDish);
        selectedDishesNameAndPriceContainer.append(oneSelectedDishContainer);
    });

    //Total price on left panel
    var totalPriceContainer = $('<div/>').attr({
        'class': 'flex flex-row justify-between margin-2',
    })
    var totalPrice =  $('<div/>').attr('class', "padding-2 flex-1").html(model.getTotalMenuPrice());
    totalPriceContainer.append(totalPrice);
    selectedDishesNameAndPriceContainer.append(totalPriceContainer);

}