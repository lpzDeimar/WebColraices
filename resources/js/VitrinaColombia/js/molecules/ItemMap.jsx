import React, { useEffect } from 'react';
import styles from "../mapViewStyles";
export const ItemMap = ({lat = 4.6344787,lng = -74.0811297}) => {
  let map;

  const center = { lat: lat, lng: lng };

  const onScriptload = () => {
    var gScript = document.querySelector('script-loaded');
    var isLoaded = gScript && gScript.getAttribute('script-loaded');

    if (!isLoaded) {
      var index = document.getElementsByTagName('script')[0];
      var script = document.createElement('script');
      script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBofVHM82g0vcJLSg-iUY4GONz4VvezvII&callback=initMap&libraries=localContext&v=beta&callback=initialize";
      script.async = true;
      script.defer = true;
      script.setAttribute('script-loaded', true);
      index.parentNode.insertBefore(script, index);
      window.initialize = initMap;
    } else {
      initMap();
    }
  };

  function initMap() {
    const localContextMapView =
      new google.maps.localContext.LocalContextMapView({
        element: document.getElementById('map'),
        placeTypePreferences: ['bank', 'hospital',"university","secondary_school","park"],
        maxPlaceCount: 18
      });

    map = localContextMapView.map;



  const mergedStyles = map.get("styles").concat(styles);

    map.setOptions({
      center,
      zoom: 16,
      styles: mergedStyles,
      zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        scrollwheel: false,

    });

    new google.maps.Marker({
        position: center,
        map,
        title: 'Hello World!',
        icon: "/img/poin.png",
        zIndex: 30,
        anchorPoint: new google.maps.Point(0, -29),
      });
  }

  useEffect(() => {
    onScriptload();
  }, []);

  return (
    <article className="inmMapa">
      <p>Ubicación</p>
      <div id="map"/>
    </article>
  );
};

