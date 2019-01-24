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

    this.backToSearchBtn = container.find("#backToSearchBtn");
    this.addToMenuBth = container.find("#addToMenuBtn");

    var selectedDish = model.getDish(model.getDetailedDinner());
    if (!selectedDish) {
        return;
    }
    var numberOfGuests = model.getNumberOfGuests();

    //Set name
    var nameOfDish = container.find("#dishName");
    nameOfDish.html(selectedDish.name.toUpperCase());

    //Set image
    var dishImage = container.find('#dishImage');
    dishImage.attr("src", "images/" +  selectedDish.image);

    // Set type
    var dishType = container.find('#dishType');
    dishType.html("type: " + selectedDish.type);

    //Set description
    var dishDescription = container.find('#dishDescription');
    dishDescription.html(selectedDish.description);

    //Set Ingredients
    var dishRecipe = container.find('#dishRecipeContainer');
    var header = $('<div />').attr({
        'class': 'text-center font-bold py-2',
    }).html("INGREDIENTS FOR " + numberOfGuests + " PEOPLE");
    dishRecipe.append(header);
    dishRecipe.append($('<div/>').attr({'class': 'border border-black m-2'}))

    var totalCost = 0;
    selectedDish.ingredients.map(function(ingredient) {

        var oneIngredientContainer = $('<div/>').attr({'class': 'flex px-4',});

        var quantity = $('<div/>').attr({'class': 'flex-1',}).html(ingredient.quantity + " " + ingredient.unit);
        var name = $('<div/>').attr({'class': 'flex-2',}).html(ingredient.name)
        var price = $('<div/>').attr({'class': 'flex-1 text-right pr-1',}).html(ingredient.price);
        var currency = $('<div/>').html(" SEK");

        totalCost += ingredient.price;

        oneIngredientContainer.append(quantity, name, price, currency);
        dishRecipe.append(oneIngredientContainer);

    })

    // Set total cost
    var dishDescription = container.find('#totalCost');
    dishDescription.html(totalCost + " SEK");
	
}
 
