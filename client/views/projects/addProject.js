Template.addProject.helpers({
	EpicOptions: function() {
    /*
    var cursor = Epics.find({}, {label:1, value:1, _id:0});
    var arr=[];
    var i = 0;

    cursor.forEach(function(epic) {
      
      arr[i] = {label: epic.label
      i = i + 1;
    });

    console.log(arr);
    */
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
    //return (Epics.find({}, {label:1, value:1, _id:0}))
    return (arr);

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
