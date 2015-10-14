/* ---------------------------------------------------- +/

## Fixtures ##

Fill in the app with dummy data if database is empty.

/+ ---------------------------------------------------- */

// Fixture data 


var users = [
     /* {name:"Normal User",email:"normal@example.com",roles:[]},
      {name:"View-Secrets User",email:"view@example.com",roles:['view-secrets']},
      {name:"Manage-Users User",email:"manage@example.com",roles:['manage-users']}, */
      {name:"Admin User",email:"tmb@cgelsie.com",roles:['admin']}
    ];

_.each(users, function (user) {
  var id;
  console.log(user.email);

  if (!Accounts.findUserByUsername('tmb')) {

  id = Accounts.createUser({
    email: user.email,
    username: 'tmb',
    password: "tmb123",
    profile: { name: user.name }
  });

  if (user.roles.length > 0) {
    // Need _id of existing user record so this call must come 
    // after `Accounts.createUser` or `Accounts.onCreate`
    Roles.addUsersToRoles(id, user.roles);
  }
  }
  else {console.log('Found a user already');}
});

