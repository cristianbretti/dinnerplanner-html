 /** ErrorListView Object constructor
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - Reference to the dinner model
 */ 
var ErrorListView = function (container, model) {
    // Subsribe to model
    model.addObserver({view: this, id: "ERROR-LIST"});


    this.update = function() {
        container.empty();
        var errors = model.getErrors();
        errors.map(error => {
            var errorItemView = new ErrorItemView(container, error);
            var errorItemController = new ErrorItemController(errorItemView, model);
        })
    }
    this.update()
}