function Admin() {
	var self = this;
	self.query = ko.observable("");
	self.filterText = ko.observable("");
	self.data = ko.computed(function() {
		return {
			query: self.query(),
			filterText: self.filterText()
		};
	}, this);
	self.students = ko.observableArray();
	self.update = function() {
		$.post("http://localhost:5000/text", self.data, function(returnedData) {
			console.log(returnedData);
		});
	}
}