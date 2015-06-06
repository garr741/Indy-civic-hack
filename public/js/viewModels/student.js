function Student() {
	var self = this;
	self.firstName = ko.observable("Ben");
	self.lastName = ko.observable("");
	self.birthday = ko.observable("");
	self.page = ko.observable(0);
	self.loadWizard = ko.observable(false);
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
	self.onPageFour = ko.computed(function() {
		return self.page() == 4;
	}, this);
	self.startWizard = function() {
		self.loadWizard(true);
	}
	self.toPage = function(page) {
		self.page(page);
	}
}