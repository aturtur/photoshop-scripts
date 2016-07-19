#target photoshop
////////////////////////////////////////////////////////////////////////////////////////
// reaction diffusion script
// http://twitter.com/aturtur
////////////////////////////////////////////////////////////////////////////////////////
// 1. make a new document with a white background
// 2. paint some black stuff around the canvas
// 3. save your document into the folder
// 4. make sure your layer is selected, then run the script
// 5. frames will be saved to your document path, layer name will be filename
////////////////////////////////////////////////////////////////////////////////////////
// change these variables to get nice results
var blur = 4;
var multiplier = 3;
var exposure = 8;
var iterations = 50;
var saveEveryNthFrame = 2;
////////////////////////////////////////////////////////////////////////////////////////
var doc = app.activeDocument;
var layer = doc.activeLayer;
var pad = "0000";
function savePNG(number){
    var pngOptions = new PNGSaveOptions();
    var path = File(doc.path + "/" + layer.name +"_"+(pad+number).slice(-pad.length)+"_"+ ".png");
    doc.saveAs(path, pngOptions, true, Extension.LOWERCASE);
}
for (var i = 0; i < iterations; i++) {
	layer.applyGaussianBlur(blur);
	layer.duplicate();
	dub = doc.artLayers.getByName(layer.name+" copy");
	dub.applyGaussianBlur(blur*multiplier);
	dub.blendMode = BlendMode.SUBTRACT;
	dub.merge();
	var idExps = charIDToTypeID( "Exps" );
    var desc19 = new ActionDescriptor();
    var idpresetKind = stringIDToTypeID( "presetKind" );
    var idpresetKindType = stringIDToTypeID( "presetKindType" );
    var idpresetKindCustom = stringIDToTypeID( "presetKindCustom" );
    desc19.putEnumerated( idpresetKind, idpresetKindType, idpresetKindCustom );
    var idExps = charIDToTypeID( "Exps" );
    desc19.putDouble( idExps, exposure );
    var idOfst = charIDToTypeID( "Ofst" );
    desc19.putDouble( idOfst, 0.000000 );
    var idgammaCorrection = stringIDToTypeID( "gammaCorrection" );
    desc19.putDouble( idgammaCorrection, 1.000000 );
	executeAction( idExps, desc19, DialogModes.NO );    
    var number = i / saveEveryNthFrame;
    if (i % saveEveryNthFrame == 0) {
        savePNG(number);
    }
}