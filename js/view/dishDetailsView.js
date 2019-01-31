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
    // class variables
    this.selectedDish = null;
    // Find interactive elements
    this.backToSearchBtn = container.find("#backToSearchBtn");
    this.addToMenuBtn = container.find("#addToMenuBtn");
    this.nameOfDish = container.find("#dishName");
    this.dishImage = container.find('#dishImage');
    this.dishType = container.find('#dishType');
    this.dishDescription = container.find('#dishDescription');
    this.dishRecipe = container.find('#dishRecipeContainer');
    this.totalCost = container.find('#totalCost');
    
    var spinner = $('<div />')
        .attr({'class': 'absolute pin bg-white flex flex-col justify-center', 'id': 'spinner'})
        .html($('<div />').attr({'class': 'text-center'}).html("SPINNING..."));
    container.append(spinner);
    spinner.hide();

    this.update =  async function() {
        // TODO show spinner
        if ((this.selectedDish !== null && model.getDetailedDinner() !== this.selectedDish.id) || (model.getDetailedDinner() !== 0 && this.selectedDish === null)) {
            spinner.show();
            this.selectedDish = await model.getDish(model.getDetailedDinner());
            spinner.hide();
        } else {
            return;
        }

        this.dishRecipe.empty();
        
        var numberOfGuests = model.getNumberOfGuests();
        //Set name
        this.nameOfDish.html(this.selectedDish.title.toUpperCase());
        //Set image
        this.dishImage.attr("src", this.selectedDish.image);
        // Set type
        this.dishType.html("Ready in " + this.selectedDish.readyInMinutes + " minutes");
        //Set description
        this.dishDescription.html(this.selectedDish.instructions);

        //Set Ingredients
        
        var header = $('<div />').attr({
            'class': 'text-center font-bold py-2',
        }).html("INGREDIENTS FOR " + numberOfGuests + " PEOPLE");
        this.dishRecipe.append(header);
        this.dishRecipe.append($('<div/>').attr({'class': 'border border-black m-2'}))

        var totalCost = 0;
        this.selectedDish.extendedIngredients.map(function(ingredient) {
            var oneIngredientContainer = $('<div/>').attr({'class': 'flex px-4',});

            var quantityNumber = Math.round(ingredient.amount*numberOfGuests);
            var priceNumber = isNaN(ingredient.price) ? '?' : Math.round(ingredient.price*numberOfGuests);

            var quantity = $('<div/>').attr({'class': 'flex-1',}).html(quantityNumber + " " + ingredient.measures.metric.unitShort);
            var name = $('<div/>').attr({'class': 'flex-2 pl-1',}).html(ingredient.name)
            var price = $('<div/>').attr({'class': 'text-right pr-1',}).html(priceNumber);
            var currency = $('<div/>').html(" SEK");

            totalCost += isNaN(priceNumber) ? 0 : priceNumber;

            oneIngredientContainer.append(quantity, name, price, currency);
            this.dishRecipe.append(oneIngredientContainer);

        }, this)

        // Set total cost
        this.totalCost.html(totalCost + " SEK");
    }
    this.update();
}
 
