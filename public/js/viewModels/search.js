function Admin() {
	var self = this;
	self.query = ko.observable("");
	self.filterText = ko.observable("");
	self.data = ko.computed(function() {
		return {
			//query: self.query(),
			//filterType: self.filterText()
		};
	}, this);
	self.students = ko.observableArray([]);
	self.update = function() {
		console.log("dsfds");
		$.post("/search", self.data(), function(returnedData) {
			console.log(returnedData);
			self.students(returnedData);
		});
	}
}