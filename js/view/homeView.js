/** HomeView Object constructor
 * 
 * This object represents the code for one specific view (in this case the Home view). 
 * 
 * It is responsible for:
 * - constructing the view (e.g. if you need to create some HTML elements procedurally) 
 * - populating the view with the data
 * - updating the view when the data changes
 * 
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */ 
var HomeView = function (container, model) {
    this.createNewDinnerBtn = container.find("#createNewBtn"); 

    this.hide = () => {
        container.hide();
    }   
    this.show = () => {
        container.show();
    }
}
 
