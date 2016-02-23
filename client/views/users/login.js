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

Template.login.events({

    'submit #loginForm' : function(e, t){
      e.preventDefault();
      // retrieve the input field values
      var username = t.find('#loginUserName').value
        , password = t.find('#loginPassword').value;

        // Trim and validate your fields here.... 

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword(username, password, function(err){
        if (err)
        {
          // The user might not have been found, or their passwword
          // could be incorrect. Inform the user that their
          // login attempt has failed. 
          console.log('Login error triggered');
          FlashMessages.sendError('Your request cannot be completed. Please contact TMB (x51643).');
        }

        else
          // The user has been logged in.
         Router.go('/adminPage');

      });
         return false; 
      }
  });