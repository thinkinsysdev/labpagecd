/* ---------------------------------------------------- +/

## Permissions ##

Permission checks

Usage:

if (can.editItem(Meteor.user(), myItem)){
  // do something  
}

/+ ---------------------------------------------------- */

can = {
  createItem: function (userId) {
    return true;
  },
  editItem: function (userId, item) {
    return userId === item.userId;
  },
  removeItem: function (userId, item) {
    return userId === item.userId;
  },
  createProject: function (userId) {
    return true;
  },
  editProject: function (userId, item) {
    return userId === item.userId;
  },
  removeProject: function (userId, item) {
    return userId === item.userId;
  }
}