Template.editIdea.helpers({
 EpicList: function () {
   // console.log(Epics.find().count());

    epics = Epics.find();

    epicl = epics.map(function(epics) {
      console.log(epics.label);
      return {label:epics.label, value:epics.value };

   });

    console.log(epicl);
   return epicl;
 },
 selectedIdea: function() {
  //return Ideas.find(Session.get("selectedIdea"));
 }
});

 AutoForm.addHooks(['editIdeaForm'], {
  onSuccess: function(operation, result, template) {
    FlashMessages.sendSuccess('Updates to idea has been saved successfully.');
    Router.go("/ideas");
  }

});

AutoForm.addHooks(['editIdeaForm'], {
onError : function(operation, result, template) {
    console.log('Error triggered');
    FlashMessages.sendError('Your request cannot be completed. Please contact TMB (x51643).');
   // Router.go("/addProject");
  }
  });


Template.editIdea.events({
  'click .cancel': function(e, t) {
    e.preventDefault();
    Router.go('/ideas');
  }

});