var hpradius = 100; // high-pass radius
// ------------------------------------
var doc = app.activeDocument;
var layer = doc.activeLayer;
layer.duplicate();
var dub = doc.artLayers.getByName(layer.name+" copy");
dub.blendMode = BlendMode.LINEARLIGHT;
dub.opacity = 50;
dub.applyHighPass(hpradius);
layer.applyAverage();
dub.merge();