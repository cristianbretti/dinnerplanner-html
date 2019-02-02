 /** ErrorItemView Object constructor
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} error - One error
 */ 
var ErrorItemView = function (container, error) {
    this.id = error.id;
    var outerDiv = $("<div/>").attr({
       "class": "bg-red-light border-2 border-red rounded shadow-md my-2 flex justify-between"
    })

    var textDiv = $("<div/>")
   
    var errorRow = $("<div/>").attr({
        "class": "text-sm md:text-lg font-bold"
    }).html("Error: " + error.code + " " + error.statusText);

    var detailsRow = $("<div/>").attr({
        "class": "text-xs md:text-base"
    }).html(error.details);

    textDiv.append(errorRow, detailsRow);

    var buttonDiv = $("<div/>").attr({
        "class": "px-2 flex flex-col justify-center"
    })

    this.removeButton = $("<i/>").attr({
        "class": "fa fa-remove p-1 hover:bg-white hover:text-red rounded"
    })

    buttonDiv.append(this.removeButton);

    outerDiv.append(textDiv, buttonDiv);
    container.append(outerDiv);
}