function Student() {
	var self = this;
	self.firstName = ko.observable("");
	self.lastName = ko.observable("");
	self.application = new Application();
}