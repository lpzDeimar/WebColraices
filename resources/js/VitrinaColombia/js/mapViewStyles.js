export default [
    { elementType: "geometry", stylers: [{ color: "#e9e9e9" }] },
    { elementType: "labels.icon", stylers: [{ visibility: "on" }] },
    {
      elementType: "labels.text.fill",
      stylers: [{ color: "#f5f5f5" }, { weight: 1.5 }],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [{ color: "#9e9e9e" }, { weight: 1.5 }],
    },
    {
      featureType: "administrative.land_parcel",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [{ color: "#bdbdbd" }],
    },
    {
      featureType: "administrative.neighborhood",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#328829" }],
    },
    {
      featureType: "poi.sports_complex",
      elementType: "geometry",
      stylers: [{ color: "#2ca37b"}],
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [{ color: "#ffffff" }],
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [{ visibility: "on" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#354676" }],
    },
    {
      featureType: "water",
      elementType: "labels.text",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#CAA55E" }],
    },
  ];
