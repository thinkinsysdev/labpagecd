Template.submitIdea.helpers({
 EpicList: function () {
    console.log(Epics.find().count());

    epics = Epics.find();

    epicl = epics.map(function(epics) {
      console.log(epics.label);
      return {label:epics.label, value:epics.value };

   });

    console.log(epicl);
   return epicl;
 }  
});

 AutoForm.addHooks(['submitIdeaForm'], {
  onSuccess: function(operation, result, template) {
    FlashMessages.sendSuccess('Idea has been submitted successfully.');
    Router.go("/ideas");
  }

});

AutoForm.addHooks(['submitIdeaForm'], {
onError : function(operation, result, template) {
    console.log('Error triggered');
    FlashMessages.sendError('Your request cannot be completed. Please contact TMB (x51643).');
   // Router.go("/addProject");
  }
  });
  