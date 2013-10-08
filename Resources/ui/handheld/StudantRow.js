/**
 * @author JOAO PAULO DIAS
 */
function StudantRow(studant /*object*/) {
	
	/*
	 * photoURL String, name String
	 * 
	 * */
	
	var row = Titanium.UI.createTableViewRow();
	row.selectedBackgroundColor = '#fff';
	row.height = 80;
	row.hasChild = true;
	//row.className = 'datarow';
	//row.clickName = 'row';
	

	var photo = Ti.UI.createView({
		backgroundImage:studant.photoURL,
		top:10,
		left:10,
		width:50,
		height:50,
		clickName:'photo'
	});
	row.add(photo);


	var user = Ti.UI.createLabel({
		color:'#576996',
		font:{fontSize:16,fontWeight:'bold', fontFamily:'Arial'},
		left:70,
		top:2,
		height:30,
		width:200,
		clickName:'user',
		text:studant.name
	});

	row.filter = user.text;
	row.add(user);
	
	
	var fontSize = 16;
	if (Titanium.Platform.name == 'android') {
		fontSize = 14;
	}
	var age = Ti.UI.createLabel({
		color:'#222',
		font:{fontSize:10,fontStyle:'italic',fontWeight:'normal', fontFamily:'Arial'},
		left:70,
		top:6,
		height:50,
		width:200,
		clickName:'comment',
		text:studant.idade
	});
	row.add(age);
	
	var comment = Ti.UI.createLabel({
		color:'#222',
		font:{fontSize:fontSize,fontWeight:'normal', fontFamily:'Arial'},
		left:70,
		top:21,
		height:50,
		width:200,
		clickName:'comment',
		text:studant.comentario
	});
	row.add(comment);
	
	return row;
}
module.exports = StudantRow;
