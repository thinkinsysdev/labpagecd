Template.reserveSpace.events({
	'click #reserveSpace': function() {
		console.log('Request submitted');
		Meteor.call('requestSpace', 'Beta Release Process', moment().format("MMM Do YY"), 'The Edison, Need refreshments');
	}
})