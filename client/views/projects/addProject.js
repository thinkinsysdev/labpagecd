Template.addProject.helpers({
	EpicOptions: function() {
    return [
      {label: "Security", value: "Security"},
      {label: "Mobile Computing", value:  "Mobile Computing"},
      {label: "Digital Workspace", value: "Digital Workspace"}
    ]
    },
    isAdmin: function() {
    	var currentUser = Meteor.user();
    // Is this hackable?
     if (Roles.userIsInRole(currentUser, ['admin']))
    {
        return true;
    }

    }
	
});
