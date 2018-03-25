// Content Aware Batch Script
// 1. Run the script
// 2. Select source footage sequence folder
// 3. Select mask sequence folder
// 4. Wait

// open file function
function openImageFile(file) {
    var idOpn = charIDToTypeID( "Opn " );
    var desc78 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    desc78.putPath( idnull, file );
    executeAction( idOpn, desc78, DialogModes.NO );
}
// close file function
function closeFile() {
    var idCls = charIDToTypeID( "Cls " );
    var desc874 = new ActionDescriptor();
    var idDocI = charIDToTypeID( "DocI" );
    desc874.putInteger( idDocI, 242 );
    var idforceNotify = stringIDToTypeID( "forceNotify" );
    desc874.putBoolean( idforceNotify, true );
    executeAction( idCls, desc874, DialogModes.NO );
}
// merge documents function
function mergeDocuments(destName) {
    var idDplc = charIDToTypeID( "Dplc" );
    var desc872 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref45 = new ActionReference();
    var idLyr = charIDToTypeID( "Lyr " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idTrgt = charIDToTypeID( "Trgt" );
    ref45.putEnumerated( idLyr, idOrdn, idTrgt );
    desc872.putReference( idnull, ref45 );
    var idT = charIDToTypeID( "T   " );
    var ref46 = new ActionReference();
    var idDcmn = charIDToTypeID( "Dcmn" );
    ref46.putName( idDcmn, destName );
    desc872.putReference( idT, ref46 );
    var idVrsn = charIDToTypeID( "Vrsn" );
    desc872.putInteger( idVrsn, 5 );
    var idIdnt = charIDToTypeID( "Idnt" );
    var list12 = new ActionList();
    list12.putInteger( 2 );
    desc872.putList( idIdnt, list12 );
    executeAction( idDplc, desc872, DialogModes.NO );
}
// create a mask selection
function selectMask() {
    var idsetd = charIDToTypeID( "setd" );
    var desc432 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref14 = new ActionReference();
    var idChnl = charIDToTypeID( "Chnl" );
    var idfsel = charIDToTypeID( "fsel" );
    ref14.putProperty( idChnl, idfsel );
    desc432.putReference( idnull, ref14 );
    var idT = charIDToTypeID( "T   " );
    var ref15 = new ActionReference();
    var idChnl = charIDToTypeID( "Chnl" );
    var idChnl = charIDToTypeID( "Chnl" );
    var idTrsp = charIDToTypeID( "Trsp" );
    ref15.putEnumerated( idChnl, idChnl, idTrsp );
    desc432.putReference( idT, ref15 );
    executeAction( idsetd, desc432, DialogModes.NO );
}
// content aware tool
function contentAware() {
    var idFl = charIDToTypeID( "Fl  " );
    var desc12 = new ActionDescriptor();
    var idUsng = charIDToTypeID( "Usng" );
    var idFlCn = charIDToTypeID( "FlCn" );
    var idcontentAware = stringIDToTypeID( "contentAware" );
    desc12.putEnumerated( idUsng, idFlCn, idcontentAware );
    var idOpct = charIDToTypeID( "Opct" );
    var idPrc = charIDToTypeID( "#Prc" );
    desc12.putUnitDouble( idOpct, idPrc, 100.000000 );
    var idMd = charIDToTypeID( "Md  " );
    var idBlnM = charIDToTypeID( "BlnM" );
    var idNrml = charIDToTypeID( "Nrml" );
    desc12.putEnumerated( idMd, idBlnM, idNrml );
    executeAction( idFl, desc12, DialogModes.NO );
}
// select layer function
function selectLayer(layerName) {
    var idslct = charIDToTypeID( "slct" );
    var desc433 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref16 = new ActionReference();
    var idLyr = charIDToTypeID( "Lyr " );
    ref16.putName( idLyr, layerName );
    desc433.putReference( idnull, ref16 );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc433.putBoolean( idMkVs, false );
    var idLyrI = charIDToTypeID( "LyrI" );
    var list6 = new ActionList();
    list6.putInteger( 1 );
    desc433.putList( idLyrI, list6 );
    executeAction( idslct, desc433, DialogModes.NO );
}
// deselect selection function
function deSelect() {
    var idsetd = charIDToTypeID( "setd" );
    var desc889 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref51 = new ActionReference();
    var idChnl = charIDToTypeID( "Chnl" );
    var idfsel = charIDToTypeID( "fsel" );
    ref51.putProperty( idChnl, idfsel );
    desc889.putReference( idnull, ref51 );
    var idT = charIDToTypeID( "T   " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idNone = charIDToTypeID( "None" );
    desc889.putEnumerated( idT, idOrdn, idNone );
    executeAction( idsetd, desc889, DialogModes.NO );
}
// poista layer
function deleteLayer() {
    var idDlt = charIDToTypeID( "Dlt " );
    var desc895 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref56 = new ActionReference();
    var idLyr = charIDToTypeID( "Lyr " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idTrgt = charIDToTypeID( "Trgt" );
    ref56.putEnumerated( idLyr, idOrdn, idTrgt );
    desc895.putReference( idnull, ref56 );
    var idLyrI = charIDToTypeID( "LyrI" );
    var list17 = new ActionList();
    list17.putInteger( 2 );
    desc895.putList( idLyrI, list17 );
    executeAction( idDlt, desc895, DialogModes.NO );
}
// save file function
function saveImageFile(file) {
    var idsave = charIDToTypeID( "save" );
    var desc20 = new ActionDescriptor();
    var idAs = charIDToTypeID( "As  " );
    var desc21 = new ActionDescriptor();
    var idBytO = charIDToTypeID( "BytO" );
    var idPltf = charIDToTypeID( "Pltf" );
    var idIBMP = charIDToTypeID( "IBMP" );
    desc21.putEnumerated( idBytO, idPltf, idIBMP );
    var idLZWC = charIDToTypeID( "LZWC" );
    desc21.putBoolean( idLZWC, true );
    var idTIFF = charIDToTypeID( "TIFF" );
    desc20.putObject( idAs, idTIFF, desc21 );
    var idIn = charIDToTypeID( "In  " );
    desc20.putPath( idIn, file );
    var idDocI = charIDToTypeID( "DocI" );
    desc20.putInteger( idDocI, 195 );
    var idsaveStage = stringIDToTypeID( "saveStage" );
    var idsaveStageType = stringIDToTypeID( "saveStageType" );
    var idsaveSucceeded = stringIDToTypeID( "saveSucceeded" );
    desc20.putEnumerated( idsaveStage, idsaveStageType, idsaveSucceeded );
    executeAction( idsave, desc20, DialogModes.NO );
}
// ------------------------------------------------------------------------
// run function
function run(){
    for (var i = 0; i < footageFiles.length; i++) {
        if (footageFiles[i] instanceof File){
            openImageFile(footageFiles[i]);
            var footageDocument = app.activeDocument;
            var bgLayer = footageDocument.activeLayer.name;
            openImageFile(maskFiles[i]);
            var maskDocument = app.activeDocument;
            mergeDocuments(footageDocument.name);
            closeFile();
            var maskLayer = footageDocument.activeLayer.name;
            selectMask();
            selectLayer(bgLayer);
            contentAware();
            selectLayer(maskLayer);
            deSelect();
            deleteLayer();
            var processedFolder = Folder(footageFolderPath + "processed");
            if (!processedFolder.exists) {
                processedFolder.create();
            }
            var processedFolderName = "processed/";
            saveImageFile(new File(footageFolderPath + processedFolderName + "ca_" +footageDocument.name));
            closeFile();
        }
    }
    alert("Processing done!");
}
// ------------------------------------------------------------------------
var currentFolder = Folder.current;
var footageFolder = currentFolder.selectDlg("Select source footage folder:");
var footageFolderPath = footageFolder.fsName.replace(/\\/g,'/') + "/";
var maskFolder = currentFolder.selectDlg("Select mask folder:");
var maskFolderPath = maskFolder.fsName.replace(/\\/g,'/') + "/";
var footageFiles = Folder(footageFolderPath).getFiles();
var maskFiles = Folder(maskFolderPath).getFiles();
run();