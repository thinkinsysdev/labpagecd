Template.editProject.helpers({
 EpicList: function () {
    console.log(Epics.find().count());

    epics = Epics.find();

    epicl = epics.map(function(epics) {
      console.log(epics.label);
      return {label:epics.label, value:epics.value };

   });

    console.log(epicl);
   return epicl;


     
   },

	
    isAdmin: function() {
    	var currentUser = Meteor.user();

     // console.log(Roles.userIsInRole(currentUser, ['admin']) + ' : user is in role');
    // Is this hackable?
     if (Roles.userIsInRole(currentUser, ['admin']))
    {
        return true;
    }

    },
   
});

 AutoForm.addHooks(['editProjectForm'], {
  onSuccess: function(operation, result, template) {
    FlashMessages.sendSuccess('Project has been submitted successfully.');
   Router.go("/projects");
  }

});

AutoForm.addHooks(['editProjectForm'], {
onError : function(operation, result, template) {
    console.log('Error triggered');
    FlashMessages.sendError('Your request cannot be completed. Please contact TMB (x51643).');
    Router.go("/addProject");
  }
  });

Template.editProject.events({
  'click .cancel': function(e, t) {
    e.preventDefault();
    Router.go('/projects');
  }

});
  