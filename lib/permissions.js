/* ---------------------------------------------------- +/

## Permissions ##

Permission checks

Usage:

if (can.editItem(Meteor.user(), myItem)){
  // do something  
}

/+ ---------------------------------------------------- */

can = {
  createProject: function (userId) {
      var currentUser = Meteor.user();
    // Is this hackable?
     if (Roles.userIsInRole(currentUser, ['admin']))
    {
        return true;
    }

  },
  editProject: function (userId, item) {
      var currentUser = Meteor.user();
    // Is this hackable?
     if (Roles.userIsInRole(currentUser, ['admin']))
    {
        return true;
    }


//    return userId === item.userId;
  },
  removeProject: function (userId, item) {
    var currentUser = Meteor.user();
    // Is this hackable?
     if (Roles.userIsInRole(currentUser, ['admin']))
    {
        return true;
    }

  },
   createEpic: function (userId) {
      var currentUser = Meteor.user();
    // Is this hackable?
     if (Roles.userIsInRole(currentUser, ['admin']))
    {
        return true;
    }

  },
  editEpic: function (userId, item) {
      var currentUser = Meteor.user();
    // Is this hackable?
     if (Roles.userIsInRole(currentUser, ['admin']))
    {
        return true;
    }


//    return userId === item.userId;
  },
  removeEpic: function (userId, item) {
    var currentUser = Meteor.user();
    // Is this hackable?
     if (Roles.userIsInRole(currentUser, ['admin']))
    {
        return true;
    }

  }
}