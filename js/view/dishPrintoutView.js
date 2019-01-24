/** DishPrintoutView Object constructor
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} dish - one dish item.
 */ 
var DishPrintoutView = function (container, dish) {
    var rowDiv = $('<div/>').attr({
        'class': 'flex flex-wrap'
    })


    //Left side with image, name and type
    var imageAndNameContainer = $('<div/>').attr({
        'class': 'sm:flex-auto md:flex-1 flex m-6'
    })

    var image = $('<img />').attr({
        'id': 'myImage'+dish.id,
        'src': 'images/' + dish.image,
        'class': ' ',
    });

    var nameAndTypeContainer =  $('<div/>').attr({
        'class': 'flex-1 flex flex-col ml-4'
    })

    var name = $('<div/>').attr({
        'class': 'text-xl font-bold'
    }).html(dish.name.toUpperCase())

    var type = $('<div/>').attr({
        'class': 'pt-1'
    }).html(dish.type)

    nameAndTypeContainer.append(name, type);
    imageAndNameContainer.append(image, nameAndTypeContainer);

    //Right side with preperation
    var preperationDiv = $('<div/>').attr({
        'class': 'flex-1 m-6'
    })

    var preperationHeader = $('<div/>').attr({
        'class': 'text-xl font-bold'
    }).html('PREPARATION')

    var preperationText = $('<div/>').attr({
        'class': 'pt-1'
    }).html(dish.description)

    preperationDiv.append(preperationHeader, preperationText);


    rowDiv.append(imageAndNameContainer, preperationDiv)

    container.append(rowDiv);
}