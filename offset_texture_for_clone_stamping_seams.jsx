#target photoshop

var doc = app.activeDocument;
var height = doc.height;
var width = doc.width;

var idOfst = charIDToTypeID( "Ofst" );
var desc7 = new ActionDescriptor();
var idHrzn = charIDToTypeID( "Hrzn" );
desc7.putInteger( idHrzn, height/2 );
var idVrtc = charIDToTypeID( "Vrtc" );
desc7.putInteger( idVrtc, width/2 );
var idFl = charIDToTypeID( "Fl  " );
var idFlMd = charIDToTypeID( "FlMd" );
var idWrp = charIDToTypeID( "Wrp " );
desc7.putEnumerated( idFl, idFlMd, idWrp );
executeAction( idOfst, desc7, DialogModes.NO );