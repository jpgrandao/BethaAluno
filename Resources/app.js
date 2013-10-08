// this sets the background color of the master UIView (when there are no windows/tab groups on it)
(function() {
	Ti.API.info(Ti.Platform.osname);
	
	var MainWindow = require('/ui/common/MainWindow');
	
	var win = new MainWindow();
	
	win.open();

})();