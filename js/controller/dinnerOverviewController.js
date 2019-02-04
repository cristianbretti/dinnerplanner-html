/** DinnerOverviewController Object constructor
 * 
 * @param {Object} dinnerOverviewView - the dinnerOverviewView object
 * @param {Object} model - the reference to the Dinner Model.
 */ 
var DinnerOverviewController = function (dinnerOverviewView, model, gc) {
    dinnerOverviewView.printBtn.click(function() {
        gc.showScreen('printout');
    });
}
 
