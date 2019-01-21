/** SelectDishView Object constructor
 * 
 * This object represents the code for one specific view (in this case the SelectDish view). 
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
var SelectDishView = function (container, model) {
    //Search result
    var searchResultContainer = container.find("#searchResultContainer");

    result = model.getAllDishes('starter');
    result.map(function(dish) {
        var image = $('<img />').attr({
            'id': 'myImage'+dish.id,
            'src': 'images/' + dish.image,
            'width': 100
        })

        var imageText = $('<div/>').attr({
            'class': '',
        }).text(dish.name)

        searchResultContainer.append($(
            '<div />', {
            "class": 'col-md-3',
            }).append(image, imageText))
    })

    //Number of guests input on left panel
    numberOfGuestsInput = container.find('#numberOfGuestsInput');
    numberOfGuestsInput.attr('value', model.getNumberOfGuests());

    //Temporary add dishes to the menu
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
 
