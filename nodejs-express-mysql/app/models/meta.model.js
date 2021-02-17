const sql = require("./db.js");
var shell = require('shelljs');
var fs = require('fs')

// constructor
const Meta = function(meta) {
  this.character_value = meta.character_value;
};

Meta.get_html_meta = (character_value, result) => {
var file_name = "";
if(character_value === character_value.toUpperCase())
     {file_name = 'C:/Users/vnarsinghani/Desktop/Grapht/UI/Metadata/Metadata/' + character_value + '_cap_html_button.txt';}
 else{ file_name = 'C:/Users/vnarsinghani/Desktop/Grapht/UI/Metadata/Metadata/' + character_value + '_s_html_button.txt';}


	try {  
    	var data = fs.readFileSync(file_name, 'utf8');
    	data = data.toString();
    	data = data.replace(/\"/g,"");
    	data = data.replace(/~/g,"\"");
    	result(null,data);
	} 
	catch(e) {
    	console.log('Error:', e.stack);
    	result(e,null); 
	};
	return;
};

Meta.get_css_meta = (character_value, result) => {
var file_name = "";
if(character_value === character_value.toUpperCase())
     {file_name = 'C:/Users/vnarsinghani/Desktop/Grapht/UI/Metadata/Metadata/' + character_value + '_cap_css_button.txt';}
 else{ file_name = 'C:/Users/vnarsinghani/Desktop/Grapht/UI/Metadata/Metadata/' + character_value + '_s_css_button.txt';}

	try {  
    	var data = fs.readFileSync(file_name, 'utf8');
    	data = data.toString();
    	data = data.replace(/\"/g,"");
    	data = data.replace(/~/g,"\"");
    	result(null,data);
	} 
	catch(e) {
    	console.log('Error:', e.stack);
    	result(e,null); 
	};
	return;
};

Meta.get_input_box_meta = (character_value, result) => {
var file_name = "";
if(character_value === character_value.toUpperCase())
     {file_name = 'C:/Users/vnarsinghani/Desktop/Grapht/UI/Metadata/Metadata/' + character_value + '_cap_input_box.txt';}
 else{ file_name = 'C:/Users/vnarsinghani/Desktop/Grapht/UI/Metadata/Metadata/' + character_value + '_s_input_box.txt';}

    try {  
        var data = fs.readFileSync(file_name, 'utf8');
        data = data.toString();
        data = data.replace(/\"/g,"");
        data = data.replace(/~/g,"\"");
        result(null,data);
    } 
    catch(e) {
        console.log('Error:', e.stack);
        result(e,null); 
    };
    return;
};

Meta.get_palette_buttons = (character_value, result) => {

var file_name = "";
if(character_value === character_value.toUpperCase())
     {file_name = 'C:/Users/vnarsinghani/Desktop/Grapht/UI/Metadata/Metadata/' + character_value + '_cap_palette_buttons.txt';}
 else{ file_name = 'C:/Users/vnarsinghani/Desktop/Grapht/UI/Metadata/Metadata/' + character_value + '_s_palette_buttons.txt';}

    try {  
        var data = fs.readFileSync(file_name, 'utf8');
        data = data.toString();
        data = data.replace(/\"/g,"");
        data = data.replace(/~/g,"\"");
        //console.log(">>",file_name);
        //console.log(">",data);
        result(null,data);
    } 
    catch(e) {
        console.log('Error:', e.stack);
        result(e,null); 
    };
    return;
};


Meta.get_subtype_div = (character_value, result) => {
var file_name = "";
if(character_value === character_value.toUpperCase())
     {file_name = 'C:/Users/vnarsinghani/Desktop/Grapht/UI/Metadata/Metadata/' + character_value + '_cap_subtype_div.txt';}
 else{ file_name = 'C:/Users/vnarsinghani/Desktop/Grapht/UI/Metadata/Metadata/' + character_value + '_s_subtype_div.txt';}

    try {  
        var data = fs.readFileSync(file_name, 'utf8');
        data = data.toString();
        data = data.replace(/\"/g,"");
        data = data.replace(/~/g,"\"");
        //console.log(">>",file_name);
        //console.log(">",data);
        result(null,data);
    } 
    catch(e) {
        console.log('Error:', e.stack);
        result(e,null); 
    };
    return;
};

module.exports = Meta;