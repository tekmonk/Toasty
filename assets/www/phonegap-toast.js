// toasty for cordova 1.5 
var Toasty = function() {
};
var exec = cordova.require('cordova/exec');

Toasty.prototype.showLong = function(message, win, fail) {
 exec(win, fail, "Toasty", "show_long", [message]);
};

Toasty.prototype.showShort = function(message, win, fail) {
 exec(win, fail, "Toasty", "show_short", [message]);
};

Toasty.prototype.cancel = function(win, fail) {
 exec(win, fail, "Toasty", "cancel", []);
};

module.exports = new Toasty();