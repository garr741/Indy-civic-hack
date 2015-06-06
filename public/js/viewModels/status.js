function StatusModel() {
	var self = this;
	self.firstName = ko.observable("hello");
	self.lastName = ko.observable("");
	self.birthday = ko.observable("");
	self.loadData = function() {
		$.getJSON('http://ip.jsontest.com/', function( data ) {

		});
	}
}