Template.addProject.helpers({
	EpicOptions: function() {
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
    },
    isAdmin: function() {
    	var currentUser = Meteor.user();

      console.log(Roles.userIsInRole(currentUser, ['admin']) + ' : user is in role');
    // Is this hackable?
     if (Roles.userIsInRole(currentUser, ['admin']))
    {
        return true;
    }

    }
	
});
