/**
 * @author JOAO PAULO DIAS
 */
function StudantWindow() {
	
	var win = Titanium.UI.createWindow();
	
	
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
	
	return win;
}
module.exports = StudantWindow;

