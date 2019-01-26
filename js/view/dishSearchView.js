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
 * @param {Object} item - one dish item.
 */ 
var DishSearchView = function (container, model) {

    this.searchBtn = container.find("#searchBtn");
    this.typeFilter = container.find("#typeFilter");
    this.textFilter = container.find("#textFilter");

    var resultContainer = container.find("#resultContainer");
    //var result = model.getAllDishes(this.typeFilter, this.textFilter);
    var result = model.getAllDishes('starter');

    this.dishItems = [];
    result.map(function(dish) {
       var dishItemView = new DishItemView(resultContainer, dish);
       this.dishItems.push(dishItemView);
    }, this);

    
}