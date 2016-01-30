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
    optional: true,
    defaultValue: 'default'

  },
  exturl: {
    type: String,
    label: "Link to Confluence/Sharepoint",
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
  labPhase: {
    type: String,
    label: "Phase",
    optional: true, 
    autoform: {
      group: 'labphase',
      type: 'select-radio-inline',
    options: function() {
      return [
      {label: "Idea", value:"Idea"},
        //{label: "Hypothesis", value:"Hypothesis"},
        {label: "Experiment", value:"Experiment"},
        //{label: "Demo", value:"Demo"},
        {label: "Graduate", value:"Graduate"},
        {label: "Archive", value: "Archive"}

      ]
    }
  }
  },
 /* epic : {
    type: String,
    label : "Project Category",
    optional: true
  }, */
  epics : {
    type: [String],
    optional: true,
    autoform: {
      group: 'epics',
      type: "select-checkbox-inline",
   /*   options: function() {
    return [
      {label: "Digital Workspace", value: "Digital Workspace"},
      {label: "Hybrid Cloud", value: "Hybrid Cloud"},
      {label: "Holistic Security", value: "Holistic Security"},
      {label: "Application Enablement", value: "Application Enablement"},
       {label: "Video Conference", value: "Video Conference"},
     ] 
    } */
    }
  } 
 // epics: 

  
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



ProjectsIndex = new EasySearch.Index({
  collection: Projects,
  fields: ['title', 'summary'],
  engine: new EasySearch.Minimongo()
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
