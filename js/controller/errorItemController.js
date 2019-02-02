/** ErrorItemController Object constructor
 * 
 * @param {Object} errorItemView - the errorItemView object
 * @param {Object} model - the reference to the Dinner Model.
 */ 
var ErrorItemController = function (errorItemView, model) {
    errorItemView.removeButton.click(function() {
        model.removeError(errorItemView.id);
    });
}
 
