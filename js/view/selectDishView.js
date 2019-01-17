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
	
}
 
