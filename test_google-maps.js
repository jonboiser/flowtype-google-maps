/* @flow */
google.maps;
google.maps.Map;

const map = new google.maps.Map();

map.addListener('yo', () => {})

map.fitBounds({ lat: 123, lng: 123 });

map.get('foobar');







// errors
// map.fitBounds();
