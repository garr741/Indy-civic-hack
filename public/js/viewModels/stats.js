function Stats() {
	var self = this;
	self.firstName = ko.observable("Sdf");
	self.loadData = function() {
		$.getJSON('http://ip.jsontest.com/', function( data ) {
			self.firstName('pizza');
		});
	}
}