 /** BackAndEditView Object constructor
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the model.
 */ 
var BackAndEditView = function (container, model) {
    // Subscribe to model
    model.addObserver(this);
    // Find interactive elements
    this.numberOfGuests = container.find("#numberOfGuests");
    this.backAndEditBtn = container.find("#backAndEditBtn");

    this.update = function() {
        this.numberOfGuests.html(model.getNumberOfGuests());
    }
    this.update();
}