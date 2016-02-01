Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

Template.login.helpers({
	 isAdmin: function() {
    	var currentUser = Meteor.user();

      //console.log(Roles.userIsInRole(currentUser, ['admin']) + ' : user is in role');
    // Is this hackable?
     if (Roles.userIsInRole(currentUser, ['admin']))
    {
        return true;
    }

    }

})