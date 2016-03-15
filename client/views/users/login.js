Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

Template.login.helpers({
	 isAdmin: function() {
    	var currentUser = Meteor.user();

     
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

       
        Meteor.loginWithPassword(username, password, function(err){
        if (err)
        {
         
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