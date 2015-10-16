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
      {label: "Security", value: "Security"},
      {label: "Mobile Computing", value:  "Mobile Computing"},
      {label: "Digital Workspace", value: "Digital Workspace"},
      {label: "Enterprise Search", value: "Enterprise Search"},
      {label: "Process", value: "Process"},
      {label: "Marketing", value: "Marketing"},
      {label: "Infrastructure", value: "Infrastructure"},
      {label: "Development", value: "Development"},
      {label: "Testing", value: "Testing"},
      {label: "Client Computing", value: "Client Computing"},
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
