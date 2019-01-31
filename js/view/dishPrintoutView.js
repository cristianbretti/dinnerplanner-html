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
        'src': dish.image,
        'class': 'w-2/3 h-2/3',
    });

    var nameAndTypeContainer =  $('<div/>').attr({
        'class': 'flex-1 flex flex-col ml-4'
    })

    var name = $('<div/>').attr({
        'class': 'text-xl font-bold'
    }).html(dish.title.toUpperCase());

    var readyInMinutes = $('<div/>').attr({
        'class': 'font-bold'
    }).html('Ready in ' + dish.readyInMinutes + ' minutes');

    var type = $('<div/>').attr({
        'class': 'pt-1'
    }).html(dish.type)

    nameAndTypeContainer.append(name, type, readyInMinutes);
    imageAndNameContainer.append(image, nameAndTypeContainer);

    //Right side with instructions
    var instructionsDiv = $('<div/>').attr({
        'class': 'flex-1 m-6'
    })

    var instructionsHeader = $('<div/>').attr({
        'class': 'text-xl font-bold'
    }).html('PREPARATION')

    var instructionsText = $('<div/>').attr({
        'class': 'pt-1'
    }).html(dish.instructions)

    instructionsDiv.append(instructionsHeader, instructionsText);


    rowDiv.append(imageAndNameContainer, instructionsDiv)

    container.append(rowDiv);
}