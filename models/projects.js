/* ---------------------------------------------------- +/

## Items ##

All code related to the Items collection goes here. 

/+ ---------------------------------------------------- */

Projects = new Mongo.Collection('projects');

// Allow/Deny

Projects.allow({
  insert: function(userId, doc){
    return can.createProject(userId);
  },
  update:  function(userId, doc, fieldNames, modifier){
    return can.editProject(userId, doc);
  },
  remove:  function(userId, doc){
    return can.removeProject(userId, doc);
  }
});

// Methods

Meteor.methods({
  createProject: function(project){
    if(can.createProject(Meteor.user()))
      Projects.insert(project);
  },
  removeProject: function(project){
    if(can.removeProject(Meteor.user(), project)){
      Projects.remove(item._id);
    }else{
      throw new Meteor.Error(403, 'You do not have the rights to delete this item.')
    }
  }
});
