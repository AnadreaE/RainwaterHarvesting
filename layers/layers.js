var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_DEM_cuencaRP_filled_CR05_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEM_cuencaRP_filled_CR05<br />\
    <img src="styles/legend/DEM_cuencaRP_filled_CR05_1_0.png" /> 662.271<br />\
    <img src="styles/legend/DEM_cuencaRP_filled_CR05_1_1.png" /> 3776.13<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEM_cuencaRP_filled_CR05_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9321719.655321, 1046344.694613, -9283269.495332, 1072993.388477]
        })
    });
var lyr_pendientes_cuencaRC_reclass_CR05_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'pendientes_cuencaRC_reclass_CR05<br />\
    <img src="styles/legend/pendientes_cuencaRC_reclass_CR05_2_0.png" /> 1<br />\
    <img src="styles/legend/pendientes_cuencaRC_reclass_CR05_2_1.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/pendientes_cuencaRC_reclass_CR05_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9321719.655341, 1046344.694602, -9283269.495283, 1072993.388434]
        })
    });
var lyr_strahler_orden1_null_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'strahler_orden1_null<br />\
    <img src="styles/legend/strahler_orden1_null_3_0.png" /> 1<br />\
    <img src="styles/legend/strahler_orden1_null_3_1.png" /> 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/strahler_orden1_null_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9321719.639310, 1046370.833526, -9283231.915459, 1072997.749741]
        })
    });
var lyr_disEu_reclass_repixeled_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'disEu_reclass_repixeled<br />\
    <img src="styles/legend/disEu_reclass_repixeled_4_0.png" /> 1<br />\
    <img src="styles/legend/disEu_reclass_repixeled_4_1.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/disEu_reclass_repixeled_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9321719.655341, 1046344.694602, -9283269.495283, 1072993.388434]
        })
    });
var lyr_ponderacion_morfometria_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ponderacion_morfometria<br />\
    <img src="styles/legend/ponderacion_morfometria_5_0.png" /> 1<br />\
    <img src="styles/legend/ponderacion_morfometria_5_1.png" /> 1,5<br />\
    <img src="styles/legend/ponderacion_morfometria_5_2.png" /> 2<br />\
    <img src="styles/legend/ponderacion_morfometria_5_3.png" /> 2,5<br />\
    <img src="styles/legend/ponderacion_morfometria_5_4.png" /> 3<br />\
    <img src="styles/legend/ponderacion_morfometria_5_5.png" /> 3,5<br />\
    <img src="styles/legend/ponderacion_morfometria_5_6.png" /> 4<br />\
    <img src="styles/legend/ponderacion_morfometria_5_7.png" /> 4,5<br />\
    <img src="styles/legend/ponderacion_morfometria_5_8.png" /> 5<br />\
    <img src="styles/legend/ponderacion_morfometria_5_9.png" /> 100,504<br />\
    <img src="styles/legend/ponderacion_morfometria_5_10.png" /> 102,578<br />\
    <img src="styles/legend/ponderacion_morfometria_5_11.png" /> 102,758<br />\
    <img src="styles/legend/ponderacion_morfometria_5_12.png" /> 103,333<br />\
    <img src="styles/legend/ponderacion_morfometria_5_13.png" /> 112,686<br />\
    <img src="styles/legend/ponderacion_morfometria_5_14.png" /> 114,754<br />\
    <img src="styles/legend/ponderacion_morfometria_5_15.png" /> 116,141<br />\
    <img src="styles/legend/ponderacion_morfometria_5_16.png" /> 117,2<br />\
    <img src="styles/legend/ponderacion_morfometria_5_17.png" /> 123<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ponderacion_morfometria_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9321719.655341, 1046344.694602, -9283269.495283, 1072993.388434]
        })
    });
var lyr_arcilla_reclass_repixeled_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'arcilla_reclass_repixeled<br />\
    <img src="styles/legend/arcilla_reclass_repixeled_6_0.png" /> 1<br />\
    <img src="styles/legend/arcilla_reclass_repixeled_6_1.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/arcilla_reclass_repixeled_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9321719.655341, 1046344.694602, -9283269.495283, 1072993.388434]
        })
    });
var format_usoSuelos2_cuencaRC_CR05_7 = new ol.format.GeoJSON();
var features_usoSuelos2_cuencaRC_CR05_7 = format_usoSuelos2_cuencaRC_CR05_7.readFeatures(json_usoSuelos2_cuencaRC_CR05_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_usoSuelos2_cuencaRC_CR05_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_usoSuelos2_cuencaRC_CR05_7.addFeatures(features_usoSuelos2_cuencaRC_CR05_7);
var lyr_usoSuelos2_cuencaRC_CR05_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_usoSuelos2_cuencaRC_CR05_7, 
                style: style_usoSuelos2_cuencaRC_CR05_7,
                popuplayertitle: 'usoSuelos2_cuencaRC_CR05',
                interactive: true,
    title: 'usoSuelos2_cuencaRC_CR05<br />\
    <img src="styles/legend/usoSuelos2_cuencaRC_CR05_7_0.png" /> BOSQUE INTERVENIDO<br />\
    <img src="styles/legend/usoSuelos2_cuencaRC_CR05_7_1.png" /> BOSQUE NATURAL<br />\
    <img src="styles/legend/usoSuelos2_cuencaRC_CR05_7_2.png" /> PARAMO<br />\
    <img src="styles/legend/usoSuelos2_cuencaRC_CR05_7_3.png" /> PASTO<br />\
    <img src="styles/legend/usoSuelos2_cuencaRC_CR05_7_4.png" /> URBANO<br />' });
var lyr_ponderacion2_reclass_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ponderacion2_reclass<br />\
    <img src="styles/legend/ponderacion2_reclass_8_0.png" /> 0<br />\
    <img src="styles/legend/ponderacion2_reclass_8_1.png" /> 1<br />\
    <img src="styles/legend/ponderacion2_reclass_8_2.png" /> 2<br />\
    <img src="styles/legend/ponderacion2_reclass_8_3.png" /> 3<br />\
    <img src="styles/legend/ponderacion2_reclass_8_4.png" /> 4<br />\
    <img src="styles/legend/ponderacion2_reclass_8_5.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ponderacion2_reclass_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9321719.655341, 1046344.694602, -9283269.495283, 1072993.388434]
        })
    });
var format_rios_cuencaRioChiripo_CR05_9 = new ol.format.GeoJSON();
var features_rios_cuencaRioChiripo_CR05_9 = format_rios_cuencaRioChiripo_CR05_9.readFeatures(json_rios_cuencaRioChiripo_CR05_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rios_cuencaRioChiripo_CR05_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rios_cuencaRioChiripo_CR05_9.addFeatures(features_rios_cuencaRioChiripo_CR05_9);
var lyr_rios_cuencaRioChiripo_CR05_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rios_cuencaRioChiripo_CR05_9, 
                style: style_rios_cuencaRioChiripo_CR05_9,
                popuplayertitle: 'rios_cuencaRioChiripo_CR05',
                interactive: true,
                title: '<img src="styles/legend/rios_cuencaRioChiripo_CR05_9.png" /> rios_cuencaRioChiripo_CR05'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_DEM_cuencaRP_filled_CR05_1.setVisible(true);lyr_pendientes_cuencaRC_reclass_CR05_2.setVisible(true);lyr_strahler_orden1_null_3.setVisible(true);lyr_disEu_reclass_repixeled_4.setVisible(true);lyr_ponderacion_morfometria_5.setVisible(true);lyr_arcilla_reclass_repixeled_6.setVisible(true);lyr_usoSuelos2_cuencaRC_CR05_7.setVisible(true);lyr_ponderacion2_reclass_8.setVisible(true);lyr_rios_cuencaRioChiripo_CR05_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_DEM_cuencaRP_filled_CR05_1,lyr_pendientes_cuencaRC_reclass_CR05_2,lyr_strahler_orden1_null_3,lyr_disEu_reclass_repixeled_4,lyr_ponderacion_morfometria_5,lyr_arcilla_reclass_repixeled_6,lyr_usoSuelos2_cuencaRC_CR05_7,lyr_ponderacion2_reclass_8,lyr_rios_cuencaRioChiripo_CR05_9];
lyr_usoSuelos2_cuencaRC_CR05_7.set('fieldAliases', {'USO': 'USO', 'VERTIENTE': 'VERTIENTE', 'GRAN_CUENC': 'GRAN_CUENC', 'N_SUBCUENC': 'N_SUBCUENC', 'id': 'id', 'Area_ha': 'Area_ha', 'Reclass': 'Reclass', 'ReclassEqu': 'ReclassEqu', });
lyr_rios_cuencaRioChiripo_CR05_9.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'CATEGORIA': 'CATEGORIA', 'VERTIENTE': 'VERTIENTE', 'GRAN_CUENC': 'GRAN_CUENC', 'N_SUBCUENC': 'N_SUBCUENC', 'HECTARES': 'HECTARES', });
lyr_usoSuelos2_cuencaRC_CR05_7.set('fieldImages', {'USO': 'TextEdit', 'VERTIENTE': 'TextEdit', 'GRAN_CUENC': 'TextEdit', 'N_SUBCUENC': 'TextEdit', 'id': 'TextEdit', 'Area_ha': 'TextEdit', 'Reclass': '', 'ReclassEqu': '', });
lyr_rios_cuencaRioChiripo_CR05_9.set('fieldImages', {'NOMBRE': '', 'CATEGORIA': '', 'VERTIENTE': '', 'GRAN_CUENC': '', 'N_SUBCUENC': '', 'HECTARES': '', });
lyr_usoSuelos2_cuencaRC_CR05_7.set('fieldLabels', {'USO': 'inline label - visible with data', 'VERTIENTE': 'inline label - visible with data', 'GRAN_CUENC': 'hidden field', 'N_SUBCUENC': 'inline label - visible with data', 'id': 'hidden field', 'Area_ha': 'inline label - visible with data', 'Reclass': 'inline label - visible with data', 'ReclassEqu': 'inline label - visible with data', });
lyr_rios_cuencaRioChiripo_CR05_9.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'VERTIENTE': 'inline label - visible with data', 'GRAN_CUENC': 'inline label - visible with data', 'N_SUBCUENC': 'inline label - visible with data', 'HECTARES': 'inline label - visible with data', });
lyr_rios_cuencaRioChiripo_CR05_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});