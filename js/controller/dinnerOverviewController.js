/** DinnerOverviewController Object constructor
 * 
 * @param {Object} dinnerOverviewView - the dinnerOverviewView object
 * @param {Object} model - the reference to the Dinner Model.
 */ 
var DinnerOverviewController = function (dinnerOverviewView, model) {
    dinnerOverviewView.printBtn.click(function() {
        showDinnerPrintoutScreen();
    });
}
 
