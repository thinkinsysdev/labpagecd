Phases = new Mongo.Collection('phases');

Phases.attachSchema(new SimpleSchema({
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

Phases.allow({
  insert: function(userId, doc){
    return can.createPhase(userId);
  },
  update:  function(userId, doc, fieldNames, modifier){
    return can.editPhase(userId, doc);
  },
  remove:  function(userId, doc){
    return can.removePhase(userId, doc);
  }
});

// Methods

Meteor.methods({
  createPhase: function(phase){
    if(can.createEpic(Meteor.user()))
      Phases.insert(phase);
  },
  removePhase: function(project){
    if(can.removeEpic(Meteor.user(), project)){
      Phases.remove(item._id);
    }else{
      throw new Meteor.Error(403, 'You do not have the rights to delete this item.')
    }
  }
});