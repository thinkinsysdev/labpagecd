Template.header.helpers({
  messages: function () {
    return Messages.find();
  },
  isLoggedIn: function () {
    return !!Meteor.user();
  },
  isAdmin: function() {
    var currentUser = Meteor.user();
   // console.log(currentUser.roles);
    
    if (Roles.userIsInRole(currentUser, ['admin']))
    {
        return true;
    }
}
});

Template.header.events({
  'click .log-out': function () {
    Meteor.logout();
  }
 

});

Template.header.rendered = function () {
    //console.log('In the header rendered function');

    window.ATL_JQ_PAGE_PROPS = {
        "triggerFunction": function(showCollectorDialog) {
            jQuery("#submitidea").click(function(e) {
                e.preventDefault();
              //  console.log('Clicked the submit button');
                showCollectorDialog();
            });
        }
    };

};