/** DinnerOverviewController Object constructor
 * 
 * @param {Object} dinnerOverviewView - the dinnerOverviewView object
 * @param {Object} app - the general state controller
 */ 
var DinnerOverviewController = function (dinnerOverviewView, app) {
    dinnerOverviewView.printBtn.click(function() {
        app.showDinnerPrintoutScreen();
    });
}
 
