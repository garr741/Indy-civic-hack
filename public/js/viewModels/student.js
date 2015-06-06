function Student() {
	var self = this;
	self.firstName = ko.observable("");
	self.lastName = ko.observable("");
	self.page = ko.observable(0);
	self.onPageZero = ko.computed(function() {
		return self.page() == 0;
	}, this);
	self.onPageOne = ko.computed(function() {
		return self.page() == 1;
	}, this);
	self.onPageTwo = ko.computed(function() {
		return self.page() == 2;
	}, this);
	self.onPageThree = ko.computed(function() {
		return self.page() == 3;
	}, this);
	self.toPage = function(page) {
		self.page(page);
	}
}