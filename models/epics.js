Epics = new Mongo.Collection('epics');

Epics.attachSchema(new SimpleSchema({
  label: {
    type: String,
    label: "Label",
    max: 200
  },
  value: {
    type: String,
    label: "Value",
    max: 200
  }
 })
 );

Epics.allow({
  insert: function(userId, doc){
    return can.createEpic(userId);
  },
  update:  function(userId, doc, fieldNames, modifier){
    return can.editEpic(userId, doc);
  },
  remove:  function(userId, doc){
    return can.removeEpic(userId, doc);
  }
});

// Methods

Meteor.methods({
  createEpic: function(project){
    if(can.createEpic(Meteor.user()))
      Epics.insert(project);
  },
  removeEpic: function(project){
    if(can.removeEpic(Meteor.user(), project)){
      Epics.remove(item._id);
    }else{
      throw new Meteor.Error(403, 'You do not have the rights to delete this item.')
    }
  }
});