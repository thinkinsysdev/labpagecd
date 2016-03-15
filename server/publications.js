/* ---------------------------------------------------- +/

## Publications ##

All publications-related code. 

/+ ---------------------------------------------------- */

// Publish all items

Meteor.publish('allProjects', function() {
  return Projects.find();
});

// Publish a single item

Meteor.publish('singleProject', function(id) {
  return Projects.find(id);
});

Meteor.publish('allEpics', function() {
	return Epics.find();
});

Meteor.publish('allIdeas', function() {
	return Ideas.find({}, {sort: {createdAt: -1}});
});

Meteor.publish('allReservations', function() {
	return Reservations.find({}, {sort: {createdAt: -1}})
})

Meteor.publish('singleIdea', function(id) {
	return Ideas.find(id);
});