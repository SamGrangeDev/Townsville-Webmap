ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:9473").setExtent([1459334.200118, -2222974.833117, 1674429.643267, -2077573.316170]);
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
var format_NaturalAssetsEnvironmentalImportance_1 = new ol.format.GeoJSON();
var features_NaturalAssetsEnvironmentalImportance_1 = format_NaturalAssetsEnvironmentalImportance_1.readFeatures(json_NaturalAssetsEnvironmentalImportance_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_NaturalAssetsEnvironmentalImportance_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NaturalAssetsEnvironmentalImportance_1.addFeatures(features_NaturalAssetsEnvironmentalImportance_1);
var lyr_NaturalAssetsEnvironmentalImportance_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NaturalAssetsEnvironmentalImportance_1, 
                style: style_NaturalAssetsEnvironmentalImportance_1,
                popuplayertitle: "Natural Assets Environmental Importance",
                interactive: false,
    title: 'Natural Assets Environmental Importance<br />\
    <img src="styles/legend/NaturalAssetsEnvironmentalImportance_1_0.png" /> High<br />\
    <img src="styles/legend/NaturalAssetsEnvironmentalImportance_1_1.png" /> Very High<br />'
        });
var format_StormtideInundation_2 = new ol.format.GeoJSON();
var features_StormtideInundation_2 = format_StormtideInundation_2.readFeatures(json_StormtideInundation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_StormtideInundation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StormtideInundation_2.addFeatures(features_StormtideInundation_2);
var lyr_StormtideInundation_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StormtideInundation_2, 
                style: style_StormtideInundation_2,
                popuplayertitle: "Stormtide Inundation",
                interactive: false,
    title: 'Stormtide Inundation<br />\
    <img src="styles/legend/StormtideInundation_2_0.png" /> High<br />\
    <img src="styles/legend/StormtideInundation_2_1.png" /> Medium<br />'
        });
var format_Bushfirehazardarea_3 = new ol.format.GeoJSON();
var features_Bushfirehazardarea_3 = format_Bushfirehazardarea_3.readFeatures(json_Bushfirehazardarea_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_Bushfirehazardarea_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bushfirehazardarea_3.addFeatures(features_Bushfirehazardarea_3);
var lyr_Bushfirehazardarea_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bushfirehazardarea_3, 
                style: style_Bushfirehazardarea_3,
                popuplayertitle: "Bushfire hazard area",
                interactive: false,
    title: 'Bushfire hazard area<br />\
    <img src="styles/legend/Bushfirehazardarea_3_0.png" /> Medium<br />\
    <img src="styles/legend/Bushfirehazardarea_3_1.png" /> High<br />'
        });
var format_CONTOURS_4 = new ol.format.GeoJSON();
var features_CONTOURS_4 = format_CONTOURS_4.readFeatures(json_CONTOURS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_CONTOURS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTOURS_4.addFeatures(features_CONTOURS_4);
var lyr_CONTOURS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTOURS_4, 
                style: style_CONTOURS_4,
                popuplayertitle: "CONTOURS",
                interactive: false,
    title: 'CONTOURS<br />\
    <img src="styles/legend/CONTOURS_4_0.png" /> Index Contour<br />\
    <img src="styles/legend/CONTOURS_4_1.png" /> Intermediate Contour<br />'
        });
var format_ErosionProneArea_5 = new ol.format.GeoJSON();
var features_ErosionProneArea_5 = format_ErosionProneArea_5.readFeatures(json_ErosionProneArea_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_ErosionProneArea_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ErosionProneArea_5.addFeatures(features_ErosionProneArea_5);
var lyr_ErosionProneArea_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ErosionProneArea_5, 
                style: style_ErosionProneArea_5,
                popuplayertitle: "Erosion Prone Area",
                interactive: false,
                title: '<img src="styles/legend/ErosionProneArea_5.png" /> Erosion Prone Area'
            });
var format_FloodHazardMediumHazardfurtherinvestigationarea_6 = new ol.format.GeoJSON();
var features_FloodHazardMediumHazardfurtherinvestigationarea_6 = format_FloodHazardMediumHazardfurtherinvestigationarea_6.readFeatures(json_FloodHazardMediumHazardfurtherinvestigationarea_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_FloodHazardMediumHazardfurtherinvestigationarea_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FloodHazardMediumHazardfurtherinvestigationarea_6.addFeatures(features_FloodHazardMediumHazardfurtherinvestigationarea_6);
var lyr_FloodHazardMediumHazardfurtherinvestigationarea_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FloodHazardMediumHazardfurtherinvestigationarea_6, 
                style: style_FloodHazardMediumHazardfurtherinvestigationarea_6,
                popuplayertitle: "Flood Hazard Medium Hazard - further investigation area",
                interactive: false,
                title: '<img src="styles/legend/FloodHazardMediumHazardfurtherinvestigationarea_6.png" /> Flood Hazard Medium Hazard - further investigation area'
            });
var format_LandslideHazardSlopeGreaterThan23_7 = new ol.format.GeoJSON();
var features_LandslideHazardSlopeGreaterThan23_7 = format_LandslideHazardSlopeGreaterThan23_7.readFeatures(json_LandslideHazardSlopeGreaterThan23_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_LandslideHazardSlopeGreaterThan23_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandslideHazardSlopeGreaterThan23_7.addFeatures(features_LandslideHazardSlopeGreaterThan23_7);
var lyr_LandslideHazardSlopeGreaterThan23_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandslideHazardSlopeGreaterThan23_7, 
                style: style_LandslideHazardSlopeGreaterThan23_7,
                popuplayertitle: "Landslide Hazard Slope Greater Than 23º",
                interactive: false,
                title: '<img src="styles/legend/LandslideHazardSlopeGreaterThan23_7.png" /> Landslide Hazard Slope Greater Than 23º'
            });
var format_WetlandAreas_8 = new ol.format.GeoJSON();
var features_WetlandAreas_8 = format_WetlandAreas_8.readFeatures(json_WetlandAreas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_WetlandAreas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WetlandAreas_8.addFeatures(features_WetlandAreas_8);
var lyr_WetlandAreas_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WetlandAreas_8, 
                style: style_WetlandAreas_8,
                popuplayertitle: "Wetland Areas",
                interactive: false,
                title: '<img src="styles/legend/WetlandAreas_8.png" /> Wetland Areas'
            });
var format_EssentialHabitat_9 = new ol.format.GeoJSON();
var features_EssentialHabitat_9 = format_EssentialHabitat_9.readFeatures(json_EssentialHabitat_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_EssentialHabitat_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EssentialHabitat_9.addFeatures(features_EssentialHabitat_9);
var lyr_EssentialHabitat_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EssentialHabitat_9, 
                style: style_EssentialHabitat_9,
                popuplayertitle: "Essential Habitat",
                interactive: false,
                title: '<img src="styles/legend/EssentialHabitat_9.png" /> Essential Habitat'
            });
var format_Heritage_10 = new ol.format.GeoJSON();
var features_Heritage_10 = format_Heritage_10.readFeatures(json_Heritage_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_Heritage_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Heritage_10.addFeatures(features_Heritage_10);
var lyr_Heritage_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Heritage_10, 
                style: style_Heritage_10,
                popuplayertitle: "Heritage",
                interactive: false,
                title: '<img src="styles/legend/Heritage_10.png" /> Heritage'
            });
var format_FloodDeduct_11 = new ol.format.GeoJSON();
var features_FloodDeduct_11 = format_FloodDeduct_11.readFeatures(json_FloodDeduct_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_FloodDeduct_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FloodDeduct_11.addFeatures(features_FloodDeduct_11);
var lyr_FloodDeduct_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FloodDeduct_11, 
                style: style_FloodDeduct_11,
                popuplayertitle: "Flood Deduct",
                interactive: false,
                title: '<img src="styles/legend/FloodDeduct_11.png" /> Flood Deduct'
            });
var format_IndegenousLandUseAggreementsRegistered_12 = new ol.format.GeoJSON();
var features_IndegenousLandUseAggreementsRegistered_12 = format_IndegenousLandUseAggreementsRegistered_12.readFeatures(json_IndegenousLandUseAggreementsRegistered_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_IndegenousLandUseAggreementsRegistered_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndegenousLandUseAggreementsRegistered_12.addFeatures(features_IndegenousLandUseAggreementsRegistered_12);
var lyr_IndegenousLandUseAggreementsRegistered_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndegenousLandUseAggreementsRegistered_12, 
                style: style_IndegenousLandUseAggreementsRegistered_12,
                popuplayertitle: "Indegenous Land Use Aggreements (Registered)",
                interactive: false,
                title: '<img src="styles/legend/IndegenousLandUseAggreementsRegistered_12.png" /> Indegenous Land Use Aggreements (Registered)'
            });
var format_BufferedWaterways_13 = new ol.format.GeoJSON();
var features_BufferedWaterways_13 = format_BufferedWaterways_13.readFeatures(json_BufferedWaterways_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_BufferedWaterways_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BufferedWaterways_13.addFeatures(features_BufferedWaterways_13);
var lyr_BufferedWaterways_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BufferedWaterways_13, 
                style: style_BufferedWaterways_13,
                popuplayertitle: "Buffered Waterways",
                interactive: false,
                title: '<img src="styles/legend/BufferedWaterways_13.png" /> Buffered Waterways'
            });
var format_Wetlandprotectionareatriggerarea_14 = new ol.format.GeoJSON();
var features_Wetlandprotectionareatriggerarea_14 = format_Wetlandprotectionareatriggerarea_14.readFeatures(json_Wetlandprotectionareatriggerarea_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_Wetlandprotectionareatriggerarea_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wetlandprotectionareatriggerarea_14.addFeatures(features_Wetlandprotectionareatriggerarea_14);
var lyr_Wetlandprotectionareatriggerarea_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wetlandprotectionareatriggerarea_14, 
                style: style_Wetlandprotectionareatriggerarea_14,
                popuplayertitle: "Wetland protection area - trigger area",
                interactive: false,
                title: '<img src="styles/legend/Wetlandprotectionareatriggerarea_14.png" /> Wetland protection area - trigger area'
            });
var format_EasementTCC_15 = new ol.format.GeoJSON();
var features_EasementTCC_15 = format_EasementTCC_15.readFeatures(json_EasementTCC_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_EasementTCC_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EasementTCC_15.addFeatures(features_EasementTCC_15);
var lyr_EasementTCC_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EasementTCC_15, 
                style: style_EasementTCC_15,
                popuplayertitle: "Easement TCC",
                interactive: false,
                title: '<img src="styles/legend/EasementTCC_15.png" /> Easement TCC'
            });
var format_TCCZones_16 = new ol.format.GeoJSON();
var features_TCCZones_16 = format_TCCZones_16.readFeatures(json_TCCZones_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_TCCZones_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCCZones_16.addFeatures(features_TCCZones_16);
var lyr_TCCZones_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCCZones_16, 
                style: style_TCCZones_16,
                popuplayertitle: "TCC Zones",
                interactive: true,
    title: 'TCC Zones<br />\
    <img src="styles/legend/TCCZones_16_0.png" /> Character Residential<br />\
    <img src="styles/legend/TCCZones_16_1.png" /> District Centre<br />\
    <img src="styles/legend/TCCZones_16_2.png" /> Emerging Community<br />\
    <img src="styles/legend/TCCZones_16_3.png" /> High Density Residential<br />\
    <img src="styles/legend/TCCZones_16_4.png" /> Local Centre<br />\
    <img src="styles/legend/TCCZones_16_5.png" /> Low Density Residential<br />\
    <img src="styles/legend/TCCZones_16_6.png" /> Major Centre<br />\
    <img src="styles/legend/TCCZones_16_7.png" /> Medium Density Residential<br />\
    <img src="styles/legend/TCCZones_16_8.png" /> Mixed Use<br />\
    <img src="styles/legend/TCCZones_16_9.png" /> Neighbourhood Centre<br />\
    <img src="styles/legend/TCCZones_16_10.png" /> Principal Centre<br />\
    <img src="styles/legend/TCCZones_16_11.png" /> Rural Residential<br />'
        });
var format_TCC_Boundary_17 = new ol.format.GeoJSON();
var features_TCC_Boundary_17 = format_TCC_Boundary_17.readFeatures(json_TCC_Boundary_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_TCC_Boundary_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCC_Boundary_17.addFeatures(features_TCC_Boundary_17);
var lyr_TCC_Boundary_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCC_Boundary_17, 
                style: style_TCC_Boundary_17,
                popuplayertitle: "TCC_Boundary",
                interactive: true,
                title: '<img src="styles/legend/TCC_Boundary_17.png" /> TCC_Boundary'
            });
var format_KeyOpportunitiesZoned_18 = new ol.format.GeoJSON();
var features_KeyOpportunitiesZoned_18 = format_KeyOpportunitiesZoned_18.readFeatures(json_KeyOpportunitiesZoned_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_KeyOpportunitiesZoned_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KeyOpportunitiesZoned_18.addFeatures(features_KeyOpportunitiesZoned_18);
var lyr_KeyOpportunitiesZoned_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KeyOpportunitiesZoned_18, 
                style: style_KeyOpportunitiesZoned_18,
                popuplayertitle: "Key Opportunities (Zoned)",
                interactive: true,
                title: '<img src="styles/legend/KeyOpportunitiesZoned_18.png" /> Key Opportunities (Zoned)'
            });
var group_OVERLAYS = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "OVERLAYS"});
var group_SvenssonRoadMOUNTLOWNDH = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Svensson Road MOUNT LOW NDH"});
var group_71Aintree29BohlevaleSchoolRoad = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "71 Aintree + 29 Bohlevale School Road"});
var group_MajorsCreekNDH = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Majors Creek NDH"});
var group_1645NDH = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "1645 NDH"});
var group_Kirwan_NDH = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Kirwan_NDH"});
var group_92_alligatorNDH = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "92_alligator NDH"});
var group_JulagoNDH = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Julago NDH"});
var group_AdministrativeLayer = new ol.layer.Group({
                                layers: [lyr_TCC_Boundary_17,lyr_KeyOpportunitiesZoned_18,],
                                fold: "open",
                                title: "Administrative Layer"});
var group_Zoning = new ol.layer.Group({
                                layers: [lyr_TCCZones_16,],
                                fold: "open",
                                title: "Zoning"});
var group_NDHDeduct = new ol.layer.Group({
                                layers: [lyr_EssentialHabitat_9,lyr_Heritage_10,lyr_FloodDeduct_11,lyr_IndegenousLandUseAggreementsRegistered_12,lyr_BufferedWaterways_13,lyr_Wetlandprotectionareatriggerarea_14,lyr_EasementTCC_15,],
                                fold: "open",
                                title: "NDH Deduct"});
var group_NOTETODD = new ol.layer.Group({
                                layers: [lyr_NaturalAssetsEnvironmentalImportance_1,lyr_StormtideInundation_2,lyr_Bushfirehazardarea_3,lyr_CONTOURS_4,lyr_ErosionProneArea_5,lyr_FloodHazardMediumHazardfurtherinvestigationarea_6,lyr_LandslideHazardSlopeGreaterThan23_7,lyr_WetlandAreas_8,],
                                fold: "open",
                                title: "NOTE TO DD"});

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_NaturalAssetsEnvironmentalImportance_1.setVisible(false);lyr_StormtideInundation_2.setVisible(false);lyr_Bushfirehazardarea_3.setVisible(false);lyr_CONTOURS_4.setVisible(false);lyr_ErosionProneArea_5.setVisible(false);lyr_FloodHazardMediumHazardfurtherinvestigationarea_6.setVisible(false);lyr_LandslideHazardSlopeGreaterThan23_7.setVisible(false);lyr_WetlandAreas_8.setVisible(false);lyr_EssentialHabitat_9.setVisible(false);lyr_Heritage_10.setVisible(false);lyr_FloodDeduct_11.setVisible(false);lyr_IndegenousLandUseAggreementsRegistered_12.setVisible(false);lyr_BufferedWaterways_13.setVisible(false);lyr_Wetlandprotectionareatriggerarea_14.setVisible(false);lyr_EasementTCC_15.setVisible(false);lyr_TCCZones_16.setVisible(false);lyr_TCC_Boundary_17.setVisible(true);lyr_KeyOpportunitiesZoned_18.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,group_NOTETODD,group_NDHDeduct,group_Zoning,group_AdministrativeLayer];
lyr_NaturalAssetsEnvironmentalImportance_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Score': 'Score', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_StormtideInundation_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Category': 'Category', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_Bushfirehazardarea_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Rank': 'Rank', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_CONTOURS_4.set('fieldAliases', {'objectid': 'objectid', 'featuretyp': 'featuretyp', 'elevation': 'elevation', 'featurerel': 'featurerel', 'featuresou': 'featuresou', 'attributer': 'attributer', 'attributes': 'attributes', 'planimetri': 'planimetri', 'elevationa': 'elevationa', 'st_length(': 'st_length(', });
lyr_ErosionProneArea_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_FloodHazardMediumHazardfurtherinvestigationarea_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_LandslideHazardSlopeGreaterThan23_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GRIDCODE': 'GRIDCODE', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_WetlandAreas_8.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'eco_wsys_h': 'Wetland System (Habitat)', 'hyd_mod_h': 'Wetland Habitat Hydrological Modification (Habitat)', 'hyd_mod_l': 'Wetland Landscale Hydrological Modification (Landscape)', 'oth_wpct_h': 'Wetland Percentage (Habitat)', 'bio_wre_h': 'Wetland Regional Ecosystem (Habitat)', 'oth_wrpc_h': 'Wetland Regional Ecosystem Percent (Habitat)', 'hyd_perm_h': 'Permanence of Water (Habitat)', 'hyd_sal_h': 'Salinity (Habitat)', 'oth_dha_h': 'Dominant Wetland Habitat (Habitat)', 'bio_comp_h': 'Flora Composition (Habitat)', 'bio_comp_l': 'Flora Composition (Landscape)', 'bio_comp_r': 'Flora Composition (Region)', 'bio_covr_h': 'Vegetation Cover (Habitat)', 'bio_grfm_h': 'Flora Growth Form (Habitat)', 'bio_grfm_l': 'Flora Growth Form (Landscape)', 'bio_grhe_h': 'Growth Height (Habitat)', 'bio_grhe_l': 'Growth Height (Landscape)', 'cli_arid_r': 'Aridity Index (Region)', 'cli_clas_l': 'Climate Class (Landscape)', 'cli_clas_r': 'Climate Class (Region)', 'cli_pet_l': 'Potential Evapotranspiration (Landscape)', 'cli_pet_r': 'Potential Evapotranspiration (Region)', 'cli_phas_r': 'Phase-Offset (Region)', 'cli_prec_l': 'Precipitation (Landscape)', 'cli_prec_r': 'Precipitation (Region)', 'cli_reg_r': 'Climate Region (Region)', 'cli_temp_l': 'Temperature (Landscape)', 'cli_temp_r': 'Temperature (Region)', 'cli_tpet_r': 'Potential Evapotranspiration Timing (Region)', 'cli_tpre_r': 'Precipitation Timing (Region)', 'consol': 'Substrate Consolidation (Landscape)', 'eco_osys_h': 'Original Wetland System (Habitat)', 'geo_comp_h': 'Substrate Composition (Habitat)', 'geo_rock_h': 'Geological Rock Type (Habitat)', 'geo_size_h': 'Sediment Grain Size (Habitat)', 'geo_text_h': 'Soil Texture (Habitat)', 'hyd_act_h': 'Wetland Habitat Hydrological Modification Activity (Habitat)', 'hyd_agfs_l': 'Aquifer Groundwater Flow System (Landscape)', 'hyd_aqna_l': 'Aquifer Name (Landscape)', 'hyd_basn_l': 'Topographic Drainage (Landscape)', 'hyd_basn_r': 'Topographic Drainage (Region)', 'hyd_flod_l': 'Floodplain (Landscape)', 'hyd_nat_h': 'Wetland Naturalness (Habitat)', 'hyd_nat_l': 'Wetland Naturalness (Landscape)', 'hyd_obsr_h': 'Time First Observed (Habitat)', 'hyd_obsr_l': 'Time First Observed (Landscape)', 'hyd_oext_h': 'Residence Extent of Open Water (Habitat)', 'hyd_oexv_h': 'Residence Extent of Open Water Variability (Habitat)', 'hyd_otim_h': 'Residence Time of Open Water (Habitat)', 'hyd_otiv_h': 'Residence Time of Open Water Variability (Habitat)', 'hyd_perd_h': 'Timing Periodicity (Habitat)', 'hyd_ph_h': 'pH (Habitat)', 'hyd_qual_h': 'Hydrological Data Quality (Habitat)', 'hyd_sal_l': 'Salinity (Landscape)', 'hyd_wext_h': 'Residence Extent (Habitat)', 'hyd_wexv_h': 'Residence Extent Variability (Habitat)', 'hyd_wsrc_h': 'Relative Dominance of Water Sources (Habitat)', 'hyd_wtim_h': 'Residence Time (Habitat)', 'hyd_wtiv_h': 'Residence Time Variability (Habitat)', 'lnd_alt_l': 'Altitude (Landscape)', 'lnd_breg_l': 'Biogeographic Region (Landscape)', 'lnd_breg_r': 'Biogeographic Region (Region)', 'lnd_lzon_l': 'Land Zone (Landscape)', 'lnd_lzon_r': 'Land Zone (Region)', 'lnd_morp_h': 'Terrain Morphology (Habitat)', 'lnd_preg_l': 'Physiographic Region (Landscape)', 'lnd_preg_r': 'Physiographic Region (Region)', 'lnd_slop_h': 'Terrain Slope (Habitat)', 'lnd_slop_l': 'Terrain Slope (Landscape)', 'oth_hab_h': 'Wetland Habitat (Habitat)', 'oth_wsys_h': 'Wetland Regional Ecosystem System (Habitat)', 'sed_gsz': 'Substrate Grain Size (Landscape)', 'smb_cmp': 'Structural Macrobiota Composition (Landscape)', 'sub_cmp': 'Substrate Composition (Landscape)', 'xxx_area': 'Area (Habitat)', 'xxx_lege': 'Legend (Habitat)', 'xxx_uid': 'Unique ID (Habitat)', });
lyr_EssentialHabitat_9.set('fieldAliases', {'fid': 'fid', 'ehab': 'ehab', 'regrowth': 'regrowth', 'rvm_cat': 'rvm_cat', 'objectid': 'objectid', 'version': 'version', });
lyr_Heritage_10.set('fieldAliases', {'placename': 'placename', 'place_id': 'place_id', 'entrydate': 'entrydate', 'area_sqm': 'area_sqm', 'accuracy': 'accuracy', 'status': 'status', 'objectid': 'objectid', });
lyr_FloodDeduct_11.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Flood_Stud': 'Flood_Stud', 'Classifica': 'Classifica', 'SHAPE.STAr': 'SHAPE.STAr', 'SHAPE.STLe': 'SHAPE.STLe', });
lyr_IndegenousLandUseAggreementsRegistered_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Tribunal_I': 'Tribunal_I', 'Name': 'Name', 'Agreement_': 'Agreement_', 'Date_Lodge': 'Date_Lodge', 'Date_Notif': 'Date_Notif', 'Date_Regis': 'Date_Regis', 'Agreemen_1': 'Agreemen_1', 'Applicant': 'Applicant', 'Area_Sqkm': 'Area_Sqkm', 'Date_Curre': 'Date_Curre', 'NNTT_Seq_N': 'NNTT_Seq_N', 'Jurisdicti': 'Jurisdicti', 'Overlap': 'Overlap', 'Date_extra': 'Date_extra', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_BufferedWaterways_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Wetlandprotectionareatriggerarea_14.set('fieldAliases', {'objectid': 'OBJECTID', 'Shape__Area': 'SHAPE.AREA', 'Shape__Length': 'SHAPE.LEN', 'ruleid': 'RULEID', });
lyr_EasementTCC_15.set('fieldAliases', {'fid': 'fid', 'LOT': 'LOT', 'PLAN': 'PLAN', 'ACC_CODE': 'ACC_CODE', 'O_SHAPE_Le': 'O_SHAPE_Le', 'O_SHAPE_Ar': 'O_SHAPE_Ar', 'LOTPLAN': 'LOTPLAN', 'area_ha': 'area_ha', 'locality': 'locality', 'local_auth': 'local_auth', 'address': 'address', });
lyr_TCCZones_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LANDNO': 'LANDNO', 'LVL2_ZONE': 'LVL2_ZONE', });
lyr_TCC_Boundary_17.set('fieldAliases', {'lga_code': 'lga_code', 'lga': 'lga', 'adminarean': 'adminarean', 'abbrev_nam': 'abbrev_nam', 'objectid': 'objectid', 'st_perimet': 'st_perimet', 'st_area(sh': 'st_area(sh', });
lyr_KeyOpportunitiesZoned_18.set('fieldAliases', {'address': 'address', 'LOTPLAN': 'LOTPLAN', 'locality': 'locality', 'local_auth': 'local_auth', 'area_ha': 'area_ha', 'LVL2_ZONE': 'LVL2_ZONE', 'Zoned_Ha': 'Zoned_Ha', 'NDH': 'NDH', 'Pri_Vendor': 'Pri_Vendor', 'Lead Link': 'Lead Link', 'P_Lot Size': 'P_Lot Size', });
lyr_NaturalAssetsEnvironmentalImportance_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Score': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_StormtideInundation_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Category': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_Bushfirehazardarea_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Rank': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_CONTOURS_4.set('fieldImages', {'objectid': 'TextEdit', 'featuretyp': 'TextEdit', 'elevation': 'TextEdit', 'featurerel': 'TextEdit', 'featuresou': 'TextEdit', 'attributer': 'TextEdit', 'attributes': 'TextEdit', 'planimetri': 'TextEdit', 'elevationa': 'TextEdit', 'st_length(': 'TextEdit', });
lyr_ErosionProneArea_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_FloodHazardMediumHazardfurtherinvestigationarea_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_LandslideHazardSlopeGreaterThan23_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'GRIDCODE': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_WetlandAreas_8.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'eco_wsys_h': 'TextEdit', 'hyd_mod_h': 'TextEdit', 'hyd_mod_l': 'TextEdit', 'oth_wpct_h': 'TextEdit', 'bio_wre_h': 'TextEdit', 'oth_wrpc_h': 'TextEdit', 'hyd_perm_h': 'TextEdit', 'hyd_sal_h': 'TextEdit', 'oth_dha_h': 'TextEdit', 'bio_comp_h': 'TextEdit', 'bio_comp_l': 'TextEdit', 'bio_comp_r': 'TextEdit', 'bio_covr_h': 'TextEdit', 'bio_grfm_h': 'TextEdit', 'bio_grfm_l': 'TextEdit', 'bio_grhe_h': 'TextEdit', 'bio_grhe_l': 'TextEdit', 'cli_arid_r': 'TextEdit', 'cli_clas_l': 'TextEdit', 'cli_clas_r': 'TextEdit', 'cli_pet_l': 'TextEdit', 'cli_pet_r': 'TextEdit', 'cli_phas_r': 'TextEdit', 'cli_prec_l': 'TextEdit', 'cli_prec_r': 'TextEdit', 'cli_reg_r': 'TextEdit', 'cli_temp_l': 'TextEdit', 'cli_temp_r': 'TextEdit', 'cli_tpet_r': 'TextEdit', 'cli_tpre_r': 'TextEdit', 'consol': 'TextEdit', 'eco_osys_h': 'TextEdit', 'geo_comp_h': 'TextEdit', 'geo_rock_h': 'TextEdit', 'geo_size_h': 'TextEdit', 'geo_text_h': 'TextEdit', 'hyd_act_h': 'TextEdit', 'hyd_agfs_l': 'TextEdit', 'hyd_aqna_l': 'TextEdit', 'hyd_basn_l': 'TextEdit', 'hyd_basn_r': 'TextEdit', 'hyd_flod_l': 'TextEdit', 'hyd_nat_h': 'TextEdit', 'hyd_nat_l': 'TextEdit', 'hyd_obsr_h': 'TextEdit', 'hyd_obsr_l': 'TextEdit', 'hyd_oext_h': 'TextEdit', 'hyd_oexv_h': 'TextEdit', 'hyd_otim_h': 'TextEdit', 'hyd_otiv_h': 'TextEdit', 'hyd_perd_h': 'TextEdit', 'hyd_ph_h': 'TextEdit', 'hyd_qual_h': 'Range', 'hyd_sal_l': 'TextEdit', 'hyd_wext_h': 'TextEdit', 'hyd_wexv_h': 'TextEdit', 'hyd_wsrc_h': 'TextEdit', 'hyd_wtim_h': 'TextEdit', 'hyd_wtiv_h': 'TextEdit', 'lnd_alt_l': 'TextEdit', 'lnd_breg_l': 'TextEdit', 'lnd_breg_r': 'TextEdit', 'lnd_lzon_l': 'TextEdit', 'lnd_lzon_r': 'TextEdit', 'lnd_morp_h': 'TextEdit', 'lnd_preg_l': 'TextEdit', 'lnd_preg_r': 'TextEdit', 'lnd_slop_h': 'TextEdit', 'lnd_slop_l': 'TextEdit', 'oth_hab_h': 'TextEdit', 'oth_wsys_h': 'TextEdit', 'sed_gsz': 'TextEdit', 'smb_cmp': 'TextEdit', 'sub_cmp': 'TextEdit', 'xxx_area': 'TextEdit', 'xxx_lege': 'TextEdit', 'xxx_uid': 'TextEdit', });
lyr_EssentialHabitat_9.set('fieldImages', {'fid': 'TextEdit', 'ehab': 'TextEdit', 'regrowth': 'TextEdit', 'rvm_cat': 'TextEdit', 'objectid': 'TextEdit', 'version': 'TextEdit', });
lyr_Heritage_10.set('fieldImages', {'placename': 'TextEdit', 'place_id': 'TextEdit', 'entrydate': 'TextEdit', 'area_sqm': 'TextEdit', 'accuracy': 'TextEdit', 'status': 'TextEdit', 'objectid': 'TextEdit', });
lyr_FloodDeduct_11.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Flood_Stud': 'TextEdit', 'Classifica': 'TextEdit', 'SHAPE.STAr': 'TextEdit', 'SHAPE.STLe': 'TextEdit', });
lyr_IndegenousLandUseAggreementsRegistered_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'Tribunal_I': 'TextEdit', 'Name': 'TextEdit', 'Agreement_': 'TextEdit', 'Date_Lodge': 'TextEdit', 'Date_Notif': 'TextEdit', 'Date_Regis': 'TextEdit', 'Agreemen_1': 'TextEdit', 'Applicant': 'TextEdit', 'Area_Sqkm': 'TextEdit', 'Date_Curre': 'TextEdit', 'NNTT_Seq_N': 'TextEdit', 'Jurisdicti': 'TextEdit', 'Overlap': 'TextEdit', 'Date_extra': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_BufferedWaterways_13.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Wetlandprotectionareatriggerarea_14.set('fieldImages', {'objectid': '', 'Shape__Area': '', 'Shape__Length': '', 'ruleid': 'ValueMap', });
lyr_EasementTCC_15.set('fieldImages', {'fid': 'TextEdit', 'LOT': 'TextEdit', 'PLAN': 'TextEdit', 'ACC_CODE': 'TextEdit', 'O_SHAPE_Le': 'TextEdit', 'O_SHAPE_Ar': 'TextEdit', 'LOTPLAN': 'TextEdit', 'area_ha': 'TextEdit', 'locality': 'TextEdit', 'local_auth': 'TextEdit', 'address': 'TextEdit', });
lyr_TCCZones_16.set('fieldImages', {'OBJECTID': 'TextEdit', 'LANDNO': 'TextEdit', 'LVL2_ZONE': 'TextEdit', });
lyr_TCC_Boundary_17.set('fieldImages', {'lga_code': 'TextEdit', 'lga': 'TextEdit', 'adminarean': 'TextEdit', 'abbrev_nam': 'TextEdit', 'objectid': 'TextEdit', 'st_perimet': 'TextEdit', 'st_area(sh': 'TextEdit', });
lyr_KeyOpportunitiesZoned_18.set('fieldImages', {'address': 'TextEdit', 'LOTPLAN': 'TextEdit', 'locality': 'TextEdit', 'local_auth': 'TextEdit', 'area_ha': 'TextEdit', 'LVL2_ZONE': 'TextEdit', 'Zoned_Ha': 'TextEdit', 'NDH': 'TextEdit', 'Pri_Vendor': 'TextEdit', 'Lead Link': 'TextEdit', 'P_Lot Size': 'TextEdit', });
lyr_NaturalAssetsEnvironmentalImportance_1.set('fieldLabels', {'OBJECTID': 'no label', 'Score': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_StormtideInundation_2.set('fieldLabels', {'OBJECTID': 'no label', 'Category': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_Bushfirehazardarea_3.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'Rank': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_CONTOURS_4.set('fieldLabels', {'objectid': 'no label', 'featuretyp': 'no label', 'elevation': 'no label', 'featurerel': 'no label', 'featuresou': 'no label', 'attributer': 'no label', 'attributes': 'no label', 'planimetri': 'no label', 'elevationa': 'no label', 'st_length(': 'no label', });
lyr_ErosionProneArea_5.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_FloodHazardMediumHazardfurtherinvestigationarea_6.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_LandslideHazardSlopeGreaterThan23_7.set('fieldLabels', {'OBJECTID': 'no label', 'GRIDCODE': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_WetlandAreas_8.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'eco_wsys_h': 'no label', 'hyd_mod_h': 'no label', 'hyd_mod_l': 'no label', 'oth_wpct_h': 'no label', 'bio_wre_h': 'no label', 'oth_wrpc_h': 'no label', 'hyd_perm_h': 'no label', 'hyd_sal_h': 'no label', 'oth_dha_h': 'no label', 'bio_comp_h': 'no label', 'bio_comp_l': 'no label', 'bio_comp_r': 'no label', 'bio_covr_h': 'no label', 'bio_grfm_h': 'no label', 'bio_grfm_l': 'no label', 'bio_grhe_h': 'no label', 'bio_grhe_l': 'no label', 'cli_arid_r': 'no label', 'cli_clas_l': 'no label', 'cli_clas_r': 'no label', 'cli_pet_l': 'no label', 'cli_pet_r': 'no label', 'cli_phas_r': 'no label', 'cli_prec_l': 'no label', 'cli_prec_r': 'no label', 'cli_reg_r': 'no label', 'cli_temp_l': 'no label', 'cli_temp_r': 'no label', 'cli_tpet_r': 'no label', 'cli_tpre_r': 'no label', 'consol': 'no label', 'eco_osys_h': 'no label', 'geo_comp_h': 'no label', 'geo_rock_h': 'no label', 'geo_size_h': 'no label', 'geo_text_h': 'no label', 'hyd_act_h': 'no label', 'hyd_agfs_l': 'no label', 'hyd_aqna_l': 'no label', 'hyd_basn_l': 'no label', 'hyd_basn_r': 'no label', 'hyd_flod_l': 'no label', 'hyd_nat_h': 'no label', 'hyd_nat_l': 'no label', 'hyd_obsr_h': 'no label', 'hyd_obsr_l': 'no label', 'hyd_oext_h': 'no label', 'hyd_oexv_h': 'no label', 'hyd_otim_h': 'no label', 'hyd_otiv_h': 'no label', 'hyd_perd_h': 'no label', 'hyd_ph_h': 'no label', 'hyd_qual_h': 'no label', 'hyd_sal_l': 'no label', 'hyd_wext_h': 'no label', 'hyd_wexv_h': 'no label', 'hyd_wsrc_h': 'no label', 'hyd_wtim_h': 'no label', 'hyd_wtiv_h': 'no label', 'lnd_alt_l': 'no label', 'lnd_breg_l': 'no label', 'lnd_breg_r': 'no label', 'lnd_lzon_l': 'no label', 'lnd_lzon_r': 'no label', 'lnd_morp_h': 'no label', 'lnd_preg_l': 'no label', 'lnd_preg_r': 'no label', 'lnd_slop_h': 'no label', 'lnd_slop_l': 'no label', 'oth_hab_h': 'no label', 'oth_wsys_h': 'no label', 'sed_gsz': 'no label', 'smb_cmp': 'no label', 'sub_cmp': 'no label', 'xxx_area': 'no label', 'xxx_lege': 'no label', 'xxx_uid': 'no label', });
lyr_EssentialHabitat_9.set('fieldLabels', {'fid': 'no label', 'ehab': 'no label', 'regrowth': 'no label', 'rvm_cat': 'no label', 'objectid': 'no label', 'version': 'no label', });
lyr_Heritage_10.set('fieldLabels', {'placename': 'no label', 'place_id': 'no label', 'entrydate': 'no label', 'area_sqm': 'no label', 'accuracy': 'no label', 'status': 'no label', 'objectid': 'no label', });
lyr_FloodDeduct_11.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Flood_Stud': 'no label', 'Classifica': 'no label', 'SHAPE.STAr': 'no label', 'SHAPE.STLe': 'no label', });
lyr_IndegenousLandUseAggreementsRegistered_12.set('fieldLabels', {'OBJECTID': 'no label', 'Tribunal_I': 'no label', 'Name': 'no label', 'Agreement_': 'no label', 'Date_Lodge': 'no label', 'Date_Notif': 'no label', 'Date_Regis': 'no label', 'Agreemen_1': 'no label', 'Applicant': 'no label', 'Area_Sqkm': 'no label', 'Date_Curre': 'no label', 'NNTT_Seq_N': 'no label', 'Jurisdicti': 'no label', 'Overlap': 'no label', 'Date_extra': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_BufferedWaterways_13.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Wetlandprotectionareatriggerarea_14.set('fieldLabels', {'objectid': 'no label', 'Shape__Area': 'no label', 'Shape__Length': 'no label', 'ruleid': 'no label', });
lyr_EasementTCC_15.set('fieldLabels', {'fid': 'no label', 'LOT': 'no label', 'PLAN': 'no label', 'ACC_CODE': 'no label', 'O_SHAPE_Le': 'no label', 'O_SHAPE_Ar': 'no label', 'LOTPLAN': 'no label', 'area_ha': 'no label', 'locality': 'no label', 'local_auth': 'no label', 'address': 'no label', });
lyr_TCCZones_16.set('fieldLabels', {'OBJECTID': 'no label', 'LANDNO': 'no label', 'LVL2_ZONE': 'inline label - visible with data', });
lyr_TCC_Boundary_17.set('fieldLabels', {'lga_code': 'no label', 'lga': 'no label', 'adminarean': 'no label', 'abbrev_nam': 'no label', 'objectid': 'no label', 'st_perimet': 'no label', 'st_area(sh': 'no label', });
lyr_KeyOpportunitiesZoned_18.set('fieldLabels', {'address': 'inline label - visible with data', 'LOTPLAN': 'inline label - visible with data', 'locality': 'inline label - visible with data', 'local_auth': 'inline label - visible with data', 'area_ha': 'inline label - visible with data', 'LVL2_ZONE': 'inline label - visible with data', 'Zoned_Ha': 'inline label - visible with data', 'NDH': 'inline label - visible with data', 'Pri_Vendor': 'inline label - visible with data', 'Lead Link': 'inline label - visible with data', 'P_Lot Size': 'inline label - always visible', });
lyr_KeyOpportunitiesZoned_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});