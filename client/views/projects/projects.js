
Template.projects.created = function () {
  //
};

Template.projects.helpers({
  //

});

Template.projects.rendered = function () {
  //
};

Template.projects.events({

	'click #filter': function(e, t) {
		e.preventDefault();
	

		//console.log('Clicked filter button and value is: ' + $(e.target).text());

		Router.go('/projects/'+$(e.target).text());

	}

  
});