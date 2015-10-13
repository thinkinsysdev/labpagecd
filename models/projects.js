/* ---------------------------------------------------- +/

## Items ##

All code related to the Items collection goes here. 

/+ ---------------------------------------------------- */

Projects = new Mongo.Collection('projects');

Projects.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  summary: {
    type: String,
    label: "Summary",
    max: 1000
  },
  description: {
    type: String,
    label: "Content",
    optional: true
  },
  imgurl: {
    type: String,
    label: "Link to featured image",
    optional: true
  },
  labcontactname: {
    type: String,
    label: "Lab Contact for Project",
    optional: true
  },
  labcontactemail: {
    type: String,
    label: "Lab Contact Email",
    optional: true
  },
  SMEcontactname : {
    type: String,
    label: "SME Contact for Project",
    optional: true
  },
  SMEcontactemail: {
    type: String,
    label: "Email for SME Contact",
    optional: true
  },
  projBegin : {
    type: Date,
    label: "Approximate Start of Project",
    optional: true
  },
  projEnd: {
    type: Date,
    label: "Approximate End of Project",
    optional: true
  },
  projResult: {
    type: String,
    label: "Graduation State",
    optional: true
  },
  epic : {
    type: String,
    label : "Project Category",
    optional: true
  }

  
}));





Tags.TagsMixin(Projects);

Projects.allowTags(function (userId) { return true; });

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
