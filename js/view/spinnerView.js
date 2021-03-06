 /** SpinnerView Object constructor
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 */ 
var SpinnerView = function (container) {
    this.spinner = $('<div />')
        .attr({'class': 'absolute pin bg-white flex flex-col justify-center py-32 ', 'id': 'spinner'})
        .html($('<div />').attr({'class': 'flex justify-center'})
        .html($('<div />').attr({'class': 'lds-hourglass flex justify-center'})));
    container.append(this.spinner);
    return this.spinner;
}