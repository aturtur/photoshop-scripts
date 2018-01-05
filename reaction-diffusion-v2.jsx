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
var highpass = 6;
var threshold = 120;
var gaussianblur = 3;
//--------------------------------------------------------------------------------------
var iterations = 500;
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
    layer.applyHighPass(highpass);
    var idThrs = charIDToTypeID( "Thrs" );
    var desc11 = new ActionDescriptor();
    var idLvl = charIDToTypeID( "Lvl " );
    desc11.putInteger( idLvl, threshold );
    executeAction( idThrs, desc11, DialogModes.NO );
    layer.applyGaussianBlur(gaussianblur);   
    var number = i / saveEveryNthFrame;
    
    if (i % saveEveryNthFrame == 0) {
        savePNG(number);
    }
}


