/* ---------------------------------------------------- +/

## Ideas ##

All code related to the Ideas collection goes here. 

/+ ---------------------------------------------------- */

Ideas = new Mongo.Collection('ideas');


Ideas.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  description: {
    type: String,
    label: "Content",
    optional: true
  },
  imgurl: {
    type: String,
    label: "Submitter",
    optional: true,
    defaultValue: 'default'

  },
  exturl: {
    type: String,
    label: "URL [Optional]",
    optional: true
  },
  submitterInitials : {
    type: String,
    label: "Initials",
    optional: true
  },
  submitDate: {
  	type: Date,
  	label: "Date",
  	optional: true
  },
   epics : {
    type: [String],
    label: "Enterprise Themes [Optional]",
    optional: true,
    autoform: {
      group: 'epics',
      type: "select-checkbox-inline",
    }
  } 
 // epics: 

  
}));


Ideas.allow({
  insert: function(userId, doc){
    return can.createIdea(userId);
  },
  update:  function(userId, doc, fieldNames, modifier){
    return can.editIdea(userId, doc);
  },
  remove:  function(userId, doc){
    return can.removeIdea(userId, doc);
  }
});



IdeasIndex = new EasySearch.Index({
  collection: Ideas,
  fields: ['title', 'description'],
  engine: new EasySearch.Minimongo()
});

// Methods

Meteor.methods({
  createIdea: function(idea){
    if(can.createIdea(Meteor.user()))
      Ideas.insert(idea);
  },
  removeIdea: function(idea){
    if(can.removeIdea(Meteor.user(), idea)){
      Ideas.remove(idea._id);
    }else{
      throw new Meteor.Error(403, 'You do not have the rights to delete this item.')
    }
  }
});



