/**
 * @author JOAO PAULO DIAS
 */
function StudantWindow() {
	
	var win = Titanium.UI.createWindow();
	
	
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});
	
	var StudantWindow = require('ui/handheld/StudantRow');
	var sr1 = new StudantWindow({photoURL:'/img/cf01.png',name:'Fernanda Lima',comentario:'1º Sêrie',idade:'8 anos'});
	var sr2 = new StudantWindow({photoURL:'/img/cf02.png',name:'Felipe Lima',comentario:'Jardim I',idade:'4 anos'});
	
	data = [sr1,sr2];

	var tvStudant = Ti.UI.createTableView({
		height:'100%',
		width:'100%',
		top:0,
		left:0,
		backgroundColor:'#FFFFFF',
		data:data
	});
	
	
	win.add(tvStudant);
	
	
	var navGroup = Ti.UI.iOS.createNavigationWindow({
		window:win
	});
	self.add(navGroup);
	
	
	return self;
}
module.exports = StudantWindow;

// function ApplicationWindow() {
	// //declare module dependencies
	// var MasterView = require('ui/common/MasterView'),
		// DetailView = require('ui/common/DetailView');
// 		
	// //create object instance
	// var self = Ti.UI.createWindow({
		// backgroundColor:'#ffffff'
	// });
// 		
	// //construct UI
	// var masterView = new MasterView(),
		// detailView = new DetailView();
// 		
	// //create master view container
	// var masterContainerWindow = Ti.UI.createWindow({
		// title:'Products'
	// });
	// masterContainerWindow.add(masterView);
// 	
	// //create detail view container
	// var detailContainerWindow = Ti.UI.createWindow({
		// title:'Product Details'
	// });
	// detailContainerWindow.add(detailView);
// 	
	// //create iOS specific NavGroup UI
	// var navGroup = Ti.UI.iPhone.createNavigationGroup({
		// window:masterContainerWindow
	// });
	// self.add(navGroup);
// 	
	// //add behavior for master view
	// masterView.addEventListener('itemSelected', function(e) {
		// detailView.fireEvent('itemSelected',e);
		// navGroup.open(detailContainerWindow);
	// });
// 	
	// return self;
// };

// module.exports = ApplicationWindow;
