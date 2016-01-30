Template.addProject.helpers({
 EpicList: function () {
    console.log(Epics.find().count());

    epics = Epics.find();

    epicl = epics.map(function(epics) {
      console.log(epics.label);
      return {label:epics.label, value:epics.value };

   });

    console.log(epicl);
   return epicl;

/*

    var epicl = Epics.find({}, {label:1, value:1, _id:0});

    console.log(Epics.findOne({}, {label:1, value:1, _id:0}));
    var oneobj = Epics.findOne();
    var string1 = "label\":" +  "\"" +oneobj.label  + "\"" + "," + "\"" + "value\":"  + "\"" + oneobj.value ;
    var obj = [ string1 ];
    console.log(obj);

   // return obj;
   return {"Security": "Security"};
    var el = [];
    var x= 0;
    _.each(epicl, function (e) {
      el[x] = e.label + e.value;
      console.log(el[x]);
      x = x + 1;
    })
*/
     
   }, 
	/*EpicOptions: function() {
    return [
      {label: "Analytics", value: "Analytics"},
      {label: "Business Platform", value: "Business Platform"},
      {label: "Digital Workspace", value: "Digital Workspace"},
      {label: "Infrastructure", value: "Infrastructure"},
      {label: "Modern Apps", value:  "Modern Apps"},
      {label: "Security", value: "Security"},
     ] 

    }, 
    PhaseOptions: function() {
        return [
        {label: "Idea", value:"Idea"},
        //{label: "Hypothesis", value:"Hypothesis"},
        {label: "Experiment", value:"Experiment"},
        //{label: "Demo", value:"Demo"},
        {label: "Graduate", value:"Graduate"},
        {label: "Archive", value: "Archive"}
        ]
    }, */
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

 AutoForm.addHooks(['addProjectForm'], {
  onSuccess: function(operation, result, template) {
    FlashMessages.sendSuccess('Project has been submitted successfully.');
   // Router.go("/Projects");
  }

});

AutoForm.addHooks(['addProjectForm'], {
onError : function(operation, result, template) {
    console.log('Error triggered');
    FlashMessages.sendError('Your request cannot be completed. Please contact TMB (x51643).');
   // Router.go("/addProject");
  }
  });
  