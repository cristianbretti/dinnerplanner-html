 /** BackAndEditView Object constructor
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the model.
 */ 
var BackAndEditView = function (container, model) {
    container.find("#numberOfGuests").html(model.getNumberOfGuests());
    this.backAndEditBtn = container.find("#backAndEditBtn");
}