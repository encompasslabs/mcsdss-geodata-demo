// JS code for the MCSDSS GeoData Demo.
console.log('mcsdss-geodata demo javascript.');

window.addEvent('domready', function() {
	new Request.HTML({
		url: '/gh/get/response.html/encompasslabs/mcsdss-geodata-demo/tree/master/',
		data: {'delay': 1},
		method: 'post',
		update: 'demo',
		onSuccess: function(response) {
			$('map').highlight();
		}
	}).send();
})
