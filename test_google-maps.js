/* @flow */
google.maps;
google.maps.Map;

const map = new google.maps.Map(document.getElementById('map'));

map.addListener('yo', () => {})

// interface doesn't work with object literal
map.foobar({ bar: 1, ad: ''});
map.fitBounds({ lat: 123, lng: 123 });

map.get('foobar');







// errors
// map.fitBounds();
