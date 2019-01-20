/** DishDetailsView Object constructor
 * 
 * This object represents the code for one specific view (in this case the DishDetails view). 
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
var DishDetailsView = function (container, model) {
    var selectedDish = model.getDish(1)
    var numberOfGuests = model.getNumberOfGuests();

    //Set name
    var nameOfDish = container.find("#dishName");
    nameOfDish.html(selectedDish.name);

    //Set image
    var dishImage = container.find('#dishImage');
    dishImage.attr("src", "images/" +  selectedDish.image);

    //Set description
    var dishDescription = container.find('#dishDescription');
    dishDescription.html(selectedDish.description);

    //Set Ingredients
    var dishRecipe = container.find('#dishRecipeContainer');
    dishRecipe.append('<div>Ingredients for ' + numberOfGuests + ' people</div>')
    selectedDish.ingredients.map(function(ingredient) {

        var oneIngredientContainer = $('<div/>').attr({
            'class': 'flex flex-row ',
        })

        var quantity = $('<div/>').html(ingredient.quantity)
        var unit = $('<div/>').html(ingredient.unit)
        var name = $('<div/>').html(ingredient.name)
        var nameAndQuantityContainer = $('<div/>').attr({
            'class': 'flex flex-row justify-around flex-2',
        }).append(quantity, unit, name)

        var price = $('<div/>').html(ingredient.price)
        var currency = $('<div/>').html("SEK")
        var priceAndCurrencyContainer = $('<div/>').attr({
            'class': 'flex flex-row justify-around flex-1',
        }).append(price, currency)

        oneIngredientContainer.append(nameAndQuantityContainer, priceAndCurrencyContainer)
        
        dishRecipe.append(oneIngredientContainer);

    })

	
}
 
