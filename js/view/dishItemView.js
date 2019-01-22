 /** DishItemView Object constructor
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} dish - one dish.
 */ 
var DishItemView = function (container, dish) {
    var image = $('<img />').attr({
        'id': 'myImage'+dish.id,
        'src': 'images/' + dish.image,
        'class': 'h-full w-full',
    });

    var imageText = $('<div/>').attr({
        'class': 'imageText border-2 border-black text-center truncate text-sm',
    }).text(dish.name);

    var imageContainer = $('<div />', {"class": 'imageContainer flex justify-center border-2 border-black',});
    imageContainer.append(image);
    var wrapper = $('<div />', {"class": 'smallImageContainer p-6',});
    wrapper.append(imageContainer, imageText);
    
    container.append(wrapper);
}