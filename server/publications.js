/* ---------------------------------------------------- +/

## Publications ##

All publications-related code. 

/+ ---------------------------------------------------- */

// Publish all items

Meteor.publish('allItems', function() {
  return Items.find();
});

// Publish a single item

Meteor.publish('singleItem', function(id) {
  return Items.find(id);
});

Meteor.publish('allProjects', function() {
  return Projects.find();
});

// Publish a single item

Meteor.publish('singleItem', function(id) {
  return Projects.find(id);
});