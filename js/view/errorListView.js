 /** ErrorListView Object constructor
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - Reference to the dinner model
 */ 
var ErrorListView = function (container, model) {
    // Subsribe to model
    model.addObserver({view: this, id: "ERROR-LIST"});

    this.update = function() {
        var errors = model.getErrors();
        errors.map(error => {
            console.log("ERROR:");
            console.log(error.code);
            console.log(error.statusText);
            console.log(error.details);
            
        })
    }
    this.update()
}