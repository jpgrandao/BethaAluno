/**
 * @author JOAO PAULO DIAS
 */
function MainWindow() {
	
	Titanium.UI.setBackgroundColor('#000');
	
	var win = Titanium.UI.createWindow({
		backgroundColor:'white'
	});
	
	var vwPalcoDeCima = Ti.UI.createView({
		height:'55%',
		width:'100%',
		//height:'600',
		//width:'400',
		top:0,
		left:0
		//,borderColor:'black',
		//borderWidth:2
	});
	
	var vwPalcoDeBaixo = Ti.UI.createView({
		height:'45%',
		width:'100%',
		//height:'600',
		//width:'400',
		top:'55%',
		left:0
		//,borderColor:'black',
		//borderWidth:2
	});
	
	//--------- IMAGES --------------//
	var vwBetha = Ti.UI.createView({
		backgroundImage:'/img/bethaBranco4.png',
		height:48,
		width:224,
		top:'45%',
		left:40
	});
	
	var vwSimp = Ti.UI.createView({
		backgroundImage:'/img/simplescidadeBanco4.png',
		height:48,
		width:100,
		top:0,
		left:80
	});
	//--------- IMAGES --------------//
	
	//--------- USER --------------//
	vwPalcoDeCima.addEventListener('click', function(ev) {
		tfUser.blur();
		tfPass.blur();
	});
	
	// win.addEventListener('click', function(ev) {
		// tfUser.blur();
		// tfPass.blur();
	// });
	
	function blurEvent(e){
		//alert(e);
		vwPalcoDeCima.animate(animation70);
	}
	
	function focusEvent(e){
		//alert(e);
		vwPalcoDeCima.animate(animation50);
	}
	
	var tfUser = Titanium.UI.createTextField({
			color:'#336699',
			height:35,
			top:10,
			left:10,
			width:250,
			hintText:'Usuário',
			borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE
		});
	var rowUser = Ti.UI.createTableViewRow({height:44});
	rowUser.add(tfUser);
	tfUser.addEventListener("blur",blurEvent);
	tfUser.addEventListener("focus",focusEvent);
	
		
	var tfPass = Titanium.UI.createTextField({
			color:'#336699',
			height:35,
			top:10,
			left:10,
			width:250,
			hintText:'Senha',
			borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE
		});
	var rowPass = Ti.UI.createTableViewRow({height:44});
	rowPass.add(tfPass);
	tfPass.addEventListener("blur",blurEvent);
	tfPass.addEventListener("focus",focusEvent);
	
	var data = [rowUser,rowPass];
	
	var tvw = Ti.UI.createTableView({
		height:88,
		width:200,
		top:'40%',
		left:50,
		backgroundColor:'#336699',
		borderRadius:10,
		moveable:false,
		scrollable:false,
		data:data
	});
	//--------- USER --------------//
	
	
	//--------- BUTTON --------------//
	var bt = Ti.UI.createButton({
		height:44,
		width:200,
		top:'80%',
		left:50,
		backgroundColor:'#CCCCCC',
		borderRadius:10,
		title:'ENTRE'
	});
	
	var osname = Ti.Platform.osname;
	
	var StudantWindow;
	if (osname == 'iphone') {
		StudantWindow = require('/ui/common/ios/StudantWindow');
	} else if (osname == 'android') {
		StudantWindow = require('/ui/common/android/StudantWindow');
	} else {
		StudantWindow = require('/ui/common/StudantWindow');
	}
	
	
	
	
	var sw = new StudantWindow();
	
	bt.addEventListener('click',function(e){
		sw.open();
	});
	//--------- BUTTON --------------//
	
	
	
	//--------- ANIMATION --------------//
	var an1 = Ti.UI.createAnimation({
		duration:1000,
		top:'10%'
	});
	
	
	var an2 = Ti.UI.createAnimation({
		duration:1000,
		top:'70%'
	});
	
	
	var an3 = Ti.UI.createAnimation({
		duration:1000,
		height:'70%'
	});
	
	an2.addEventListener('complete',function(){
		vwPalcoDeCima.add(tvw);
		vwPalcoDeCima.add(bt);
		//win.add(tvw);
		//win.add(bt);
	});
	
	
	var animation70 = Ti.UI.createAnimation({
		duration:500,
		height:'55%'
	});
	
	
	var animation50 = Ti.UI.createAnimation({
		duration:500,
		height:'50%'
	});
	//--------- ANIMATION --------------//
	
	vwPalcoDeCima.add(vwBetha);
	win.add(vwPalcoDeCima);
	//win.add(vwBetha);
	
	vwPalcoDeBaixo.add(vwSimp);
	win.add(vwPalcoDeBaixo);
	//win.add(vwSimp);
	
	vwBetha.animate(an1);
	
	vwSimp.animate(an2);
	
	//vwPalcoDeCima.animate(an3);
	
	

	return win;
}
module.exports = MainWindow;