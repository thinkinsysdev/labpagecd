Template.adminPage.events({
	'click #logoutButton': function(e,t) {
		Meteor.logout();
		Router.go('/');
	},
	'click #goBack': function(e, t) {
		Router.go('/');
	}

})