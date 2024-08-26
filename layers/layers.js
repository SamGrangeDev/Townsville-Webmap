ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:9473").setExtent([1547241.517494, -2175804.312426, 1565807.024383, -2162185.644899]);
var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_TCC_Boundary_1 = new ol.format.GeoJSON();
var features_TCC_Boundary_1 = format_TCC_Boundary_1.readFeatures(json_TCC_Boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_TCC_Boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCC_Boundary_1.addFeatures(features_TCC_Boundary_1);
var lyr_TCC_Boundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCC_Boundary_1, 
                style: style_TCC_Boundary_1,
                popuplayertitle: "TCC_Boundary",
                interactive: true,
                title: '<img src="styles/legend/TCC_Boundary_1.png" /> TCC_Boundary'
            });
var format_KeyOpportunities_2 = new ol.format.GeoJSON();
var features_KeyOpportunities_2 = format_KeyOpportunities_2.readFeatures(json_KeyOpportunities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_KeyOpportunities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KeyOpportunities_2.addFeatures(features_KeyOpportunities_2);
var lyr_KeyOpportunities_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KeyOpportunities_2, 
                style: style_KeyOpportunities_2,
                popuplayertitle: "Key Opportunities",
                interactive: true,
                title: '<img src="styles/legend/KeyOpportunities_2.png" /> Key Opportunities'
            });
var format_StackedOverlays_3 = new ol.format.GeoJSON();
var features_StackedOverlays_3 = format_StackedOverlays_3.readFeatures(json_StackedOverlays_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_StackedOverlays_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StackedOverlays_3.addFeatures(features_StackedOverlays_3);
var lyr_StackedOverlays_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StackedOverlays_3, 
                style: style_StackedOverlays_3,
                popuplayertitle: "Stacked Overlays",
                interactive: true,
                title: '<img src="styles/legend/StackedOverlays_3.png" /> Stacked Overlays'
            });
var group_OVERLAYS = new ol.layer.Group({
                                layers: [lyr_StackedOverlays_3,],
                                fold: "open",
                                title: "OVERLAYS"});
var group_AdministrativeLayer = new ol.layer.Group({
                                layers: [lyr_TCC_Boundary_1,lyr_KeyOpportunities_2,],
                                fold: "open",
                                title: "Administrative Layer"});

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_TCC_Boundary_1.setVisible(true);lyr_KeyOpportunities_2.setVisible(true);lyr_StackedOverlays_3.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,group_AdministrativeLayer,group_OVERLAYS];
lyr_TCC_Boundary_1.set('fieldAliases', {'lga_code': 'lga_code', 'lga': 'lga', 'adminarean': 'adminarean', 'abbrev_nam': 'abbrev_nam', 'objectid': 'objectid', 'st_perimet': 'st_perimet', 'st_area(sh': 'st_area(sh', });
lyr_KeyOpportunities_2.set('fieldAliases', {'address': 'address', 'LOTPLAN': 'LOTPLAN', 'locality': 'locality', 'local_auth': 'local_auth', 'area_ha': 'area_ha', 'LVL2_ZONE': 'LVL2_ZONE', 'Zoned_Ha': 'Zoned_Ha', 'NDH': 'NDH', 'Pri_Vendor': 'Pri_Vendor', 'Lead Link': 'Lead Link', });
lyr_StackedOverlays_3.set('fieldAliases', {'FID': 'FID', });
lyr_TCC_Boundary_1.set('fieldImages', {'lga_code': 'TextEdit', 'lga': 'TextEdit', 'adminarean': 'TextEdit', 'abbrev_nam': 'TextEdit', 'objectid': 'TextEdit', 'st_perimet': 'TextEdit', 'st_area(sh': 'TextEdit', });
lyr_KeyOpportunities_2.set('fieldImages', {'address': 'TextEdit', 'LOTPLAN': 'TextEdit', 'locality': 'TextEdit', 'local_auth': 'TextEdit', 'area_ha': 'TextEdit', 'LVL2_ZONE': 'TextEdit', 'Zoned_Ha': 'TextEdit', 'NDH': 'TextEdit', 'Pri_Vendor': 'TextEdit', 'Lead Link': 'TextEdit', });
lyr_StackedOverlays_3.set('fieldImages', {'FID': '', });
lyr_TCC_Boundary_1.set('fieldLabels', {'lga_code': 'no label', 'lga': 'no label', 'adminarean': 'no label', 'abbrev_nam': 'no label', 'objectid': 'no label', 'st_perimet': 'no label', 'st_area(sh': 'no label', });
lyr_KeyOpportunities_2.set('fieldLabels', {'address': 'inline label - visible with data', 'LOTPLAN': 'inline label - visible with data', 'locality': 'inline label - visible with data', 'local_auth': 'inline label - visible with data', 'area_ha': 'inline label - visible with data', 'LVL2_ZONE': 'inline label - visible with data', 'Zoned_Ha': 'inline label - visible with data', 'NDH': 'inline label - visible with data', 'Pri_Vendor': 'inline label - visible with data', 'Lead Link': 'inline label - visible with data', });
lyr_StackedOverlays_3.set('fieldLabels', {'FID': 'no label', });
lyr_StackedOverlays_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});