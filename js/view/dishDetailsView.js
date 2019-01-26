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
    // Subscribe to model changes;
    model.addObserver(this);
    // Find interactive elements
    this.backToSearchBtn = container.find("#backToSearchBtn");
    this.addToMenuBtn = container.find("#addToMenuBtn");
    this.nameOfDish = container.find("#dishName");
    this.dishImage = container.find('#dishImage');
    this.dishType = container.find('#dishType');
    this.dishDescription = container.find('#dishDescription');
    this.dishRecipe = container.find('#dishRecipeContainer');
    this.totalCost = container.find('#totalCost');

    this.update = function() {
        this.dishRecipe.empty();
        var selectedDish = model.getDish(model.getDetailedDinner());
        if (!selectedDish) {
            return;
        }
        var numberOfGuests = model.getNumberOfGuests();
        //Set name
        this.nameOfDish.html(selectedDish.name.toUpperCase());
        //Set image
        this.dishImage.attr("src", "images/" +  selectedDish.image);
        // Set type
        this.dishType.html("type: " + selectedDish.type);
        //Set description
        this.dishDescription.html(selectedDish.description);

        //Set Ingredients
        
        var header = $('<div />').attr({
            'class': 'text-center font-bold py-2',
        }).html("INGREDIENTS FOR " + numberOfGuests + " PEOPLE");
        this.dishRecipe.append(header);
        this.dishRecipe.append($('<div/>').attr({'class': 'border border-black m-2'}))

        var totalCost = 0;
        selectedDish.ingredients.map(function(ingredient) {
            var oneIngredientContainer = $('<div/>').attr({'class': 'flex px-4',});

            var quantityNumber = Math.round(ingredient.quantity*numberOfGuests);
            var priceNumber = Math.round(ingredient.price*numberOfGuests);

            var quantity = $('<div/>').attr({'class': 'flex-1',}).html(quantityNumber + " " + ingredient.unit);
            var name = $('<div/>').attr({'class': 'flex-2',}).html(ingredient.name)
            var price = $('<div/>').attr({'class': 'flex-1 text-right pr-1',}).html(priceNumber);
            var currency = $('<div/>').html(" SEK");

            totalCost += priceNumber;

            oneIngredientContainer.append(quantity, name, price, currency);
            this.dishRecipe.append(oneIngredientContainer);

        }, this)

        // Set total cost
        this.totalCost.html(totalCost + " SEK");
    }
    this.update();
}
 
