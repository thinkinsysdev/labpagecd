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