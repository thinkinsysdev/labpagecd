/* ---------------------------------------------------- +/

## Ideas ##

All code related to the Ideas collection goes here. 

/+ ---------------------------------------------------- */

Ideas = new Mongo.Collection('ideas');


Ideas.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 500
  },
  description: {
    type: String,
    label: "Description",
    optional: true
  },
  jiraID: {
    type: String,
    label: "JIRA ID",
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
    optional: true, 
      regEx: SimpleSchema.RegEx.Url,
      autoform: {
         type: "url"
      }
    
  },
  submitterInitials : {
    type: String,
    label: "Your Initials*"
    //optional: true
  },
  submitterName: {
    type: String,
    optional: true
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  },
   epics : {
    type: [String],
    label: "Enterprise Themes [Optional] - Choose all that apply",
    optional: true,
    autoform: {
      group: 'epics',
      type: "select-checkbox-inline",
    }
  }
  ,state : {
    type: String,
    autoValue : function() {
      if (this.isInsert) {
        return "0";
      } 
      else {
        this.unset();
      }
      }
    }
  , sponsors : {
    type: String,
    label: "Idea Sponsor[s] [Optional]",
    optional: true,
    autoform: {
      type: 'text'
    }
  },
  approvalStatus: {
    type: String,
     optional: true
  },
  strategicInitiative: {
    type: String,
     optional: true
  },
  onBTR : {
    type:String,
     optional: true
  },
  ideaStatus: {
    type: String,
     optional: true
  },
  targetStartDate : {
    type: Date,
     optional: true
  },
  targetEndDate : {
    type: Date,
     optional: true
  },
  environmentNeeds : {
    type: String,
    optional: true
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
  fields: ['title', 'description', 'submitterInitials', 'submitterName', 'sponsors'],
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
  },
  createOldIdea: function(idea) {
    OldIdeas.insert(idea);
  },
  removeOldIdea: function(idea) {
    OldIdeas.remove(idea._id);
  }
});



