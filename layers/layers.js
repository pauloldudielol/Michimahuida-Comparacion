var wms_layers = [];


        var lyr_EsriSatellite_0 = new ol.layer.Tile({
            'title': 'Esri Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_michimahuida1986shp_1 = new ol.format.GeoJSON();
var features_michimahuida1986shp_1 = format_michimahuida1986shp_1.readFeatures(json_michimahuida1986shp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_michimahuida1986shp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_michimahuida1986shp_1.addFeatures(features_michimahuida1986shp_1);
var lyr_michimahuida1986shp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_michimahuida1986shp_1, 
                style: style_michimahuida1986shp_1,
                popuplayertitle: 'michimahuida 1986 shp',
                interactive: true,
                title: '<img src="styles/legend/michimahuida1986shp_1.png" /> michimahuida 1986 shp'
            });
var format_GlaciarMichimahuida2025_2 = new ol.format.GeoJSON();
var features_GlaciarMichimahuida2025_2 = format_GlaciarMichimahuida2025_2.readFeatures(json_GlaciarMichimahuida2025_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GlaciarMichimahuida2025_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlaciarMichimahuida2025_2.addFeatures(features_GlaciarMichimahuida2025_2);
var lyr_GlaciarMichimahuida2025_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlaciarMichimahuida2025_2, 
                style: style_GlaciarMichimahuida2025_2,
                popuplayertitle: 'Glaciar Michimahuida 2025',
                interactive: true,
                title: '<img src="styles/legend/GlaciarMichimahuida2025_2.png" /> Glaciar Michimahuida 2025'
            });

lyr_EsriSatellite_0.setVisible(true);lyr_michimahuida1986shp_1.setVisible(true);lyr_GlaciarMichimahuida2025_2.setVisible(true);
var layersList = [lyr_EsriSatellite_0,lyr_michimahuida1986shp_1,lyr_GlaciarMichimahuida2025_2];
lyr_michimahuida1986shp_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'area': 'area', });
lyr_GlaciarMichimahuida2025_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'area': 'area', });
lyr_michimahuida1986shp_1.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'area': 'TextEdit', });
lyr_GlaciarMichimahuida2025_2.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'area': 'TextEdit', });
lyr_michimahuida1986shp_1.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'area': 'header label - always visible', });
lyr_GlaciarMichimahuida2025_2.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'area': 'header label - always visible', });
lyr_GlaciarMichimahuida2025_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});