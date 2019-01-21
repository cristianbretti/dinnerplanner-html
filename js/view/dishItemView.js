 /** DishItemView Object constructor
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} dish - one dish.
 */ 
var DishItemView = function (container, dish) {
    var image = $('<img />').attr({
        'id': 'myImage'+dish.id,
        'src': 'images/' + dish.image,
        'width': 100
    });

    var imageText = $('<div/>').attr({
        'class': '',
    }).text(dish.name);

    var imageContainer = $('<div />', {"class": 'text-center',});
    imageContainer.append(image, imageText);
    container.append(imageContainer);
}