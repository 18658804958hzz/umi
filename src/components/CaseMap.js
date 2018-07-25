import React from 'react';
import ol from 'openlayers';
class CaseMap extends React.Component{
    componentDidMount(){
        let map = new ol.Map({
              target: 'map',
              layers: [
                new ol.layer.Tile({
                   source: new ol.source.OSM()
                })
              ],
              view: new ol.View({
                center: ol.proj.fromLonLat([37.41, 8.82]),
                zoom: 4,
              })
          });
    }
    render(){
        return <div id='map' style={{width:'100%',height:'160px'}}></div>
    }
}

export default CaseMap;