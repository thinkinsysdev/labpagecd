Template.addProject.helpers({
	EpicOptions: function() {
    return [
      {label: "Analytics", value: "Analytics"},
      {label: "Client Computing", value: "Client Computing"},
      {label: "Deployment", value: "Deployment"},
      {label: "Development", value: "Development"},
      {label: "Digital Workspace", value: "Digital Workspace"},
      {label: "Enterprise Search", value: "Enterprise Search"},
      {label: "Infrastructure", value: "Infrastructure"},
      {label: "Marketing", value: "Marketing"},  
      {label: "Mobile Computing", value:  "Mobile Computing"},
      {label: "Process", value: "Process"},   
      {label: "Security", value: "Security"},
      {label: "Testing", value: "Testing"},
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
