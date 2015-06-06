function Admin() {
	var self = this;
	self.query = ko.observable("Hayes");
	self.filterText = ko.observable("");
	self.data = ko.computed(function() {
		console.log(self.query())
		console.log(self.filterText())
		return {
			query: self.query(),
			filterType: "firstName"
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
