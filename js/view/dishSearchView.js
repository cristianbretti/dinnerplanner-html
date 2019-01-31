/** DishSearchView Object constructor
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
 * @param {Object} model - reference to the Dinner Model.
 */ 
var DishSearchView = function (container, model) {
    // Subscribe to model changes
    // model.addObserver(this);

    // Find interactive elements
    this.searchBtn = container.find("#searchBtn");
    this.typeFilter = container.find("#typeFilter");
    this.textFilter = container.find("#textFilter");
    // fill in type options
    model.getAllTypes().map(type => {
        this.typeFilter.append($('<option />').html(type));
    }, this);

    this.resultContainer = container.find("#resultContainer");
    this.dishItems = [];
    this.dishItemControllers = [];

    this.update = async function() {
        this.resultContainer.empty();
        var spinner = new SpinnerView(this.resultContainer);
        var result = await model.getAllDishes(this.typeFilter.val(), this.textFilter.val());
        spinner.hide();
        this.dishItems = [];
        this.dishItemControllers = [];
        
        result.map(function(dish) {
        var dishItemView = new DishItemView(this.resultContainer, dish);
        var dishItemController = new DishItemController(dishItemView, model);
        this.dishItems.push(dishItemView);
        this.dishItemControllers.push(dishItemController);
        }, this);
    }

    this.update();
}