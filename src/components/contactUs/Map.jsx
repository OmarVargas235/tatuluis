import React, { useEffect } from 'react';
import marker from '../../assets/iconos/pin.svg';

import Map from 'ol/Map';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import Overlay from 'ol/Overlay';

const Plat = () => {

	const mapRef = React.createRef();
	const popupRef = React.createRef();
	const popupContentRef = React.createRef();
	const popupCloserRef = React.createRef();
	
	useEffect(() => {

		const map = new Map({
			target: mapRef.current,
			layers: [
				new TileLayer({
				source: new OSM(),
			}) ],
			view: new View({
				center: fromLonLat([-86.8257102, 21.1461906]),
				zoom: 16,
			}),
		});

		const layer = new VectorLayer({
			source: new VectorSource({
				features: [
					new Feature({
						geometry: new Point(fromLonLat([-86.8257102, 21.1461906]))
					})
				]
			}),
			style: new Style({
				image: new Icon({
					anchor: [0.5, 46],
					anchorXUnits: 'fraction',
					anchorYUnits: 'pixels',
					src: marker,
				}),
      		})
		});

		map.addLayer(layer);

		const overlay = new Overlay({
			element: popupRef.current,
			autoPan: true,
			autoPanAnimation: {
				duration: 250
			},
		});

		map.addOverlay(overlay);

		map.on('singleclick', function (event) {

			if (map.hasFeatureAtPixel(event.pixel) === true) {
				const coordinate = event.coordinate;

				popupContentRef.current.innerHTML = '<div class="marker"><b>Tatuluis Exclusive Tattoo Studio</b></div>';
				overlay.setPosition(coordinate);

			} else {
				overlay.setPosition(undefined);
				popupCloserRef.current.blur();
			}
		 });

		map.on('pointermove', function (e) {

			const pixel = map.getEventPixel(e.originalEvent);
			const hit = map.hasFeatureAtPixel(pixel);
			map.getTarget().style.cursor = hit ? 'pointer' : '';
		});

	}, [mapRef, popupRef, popupContentRef, popupCloserRef]);
	
	return (
		<React.Fragment>
		    <div ref={mapRef} className="map"></div>

		    <div ref={popupRef}>
				<span ref={popupContentRef}></span>
				<div ref={popupCloserRef}></div>
		 	</div>
		</React.Fragment>
	)
}

export default Plat;