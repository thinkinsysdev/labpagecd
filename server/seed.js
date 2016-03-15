/* ---------------------------------------------------- +/

## Fixtures ##

Fill in the app with dummy data if database is empty.

/+ ---------------------------------------------------- */

// Fixture data 


var users = [{name:"tmb", email:"tmb@capgroup.com", roles:['admin']},
      {name:"bcy", email:"bcy@capgroup.com", roles:['admin']},
      {name:"jtfl", email:"jtfl@capgroup.com", roles:['admin']},
      {name:"jbxr", email:"jbxr@capgroup.com", roles:['admin']},
      {name:"axxs", email:"axxs@capgroup.com", roles:['admin']},
      {name:"maum", email:"maum@capgroup.com", roles:['admin']},
      {name:"prrh", email:"prrh@capgroup.com", roles:['admin']}
     /* {name:"Normal User",email:"normal@example.com",roles:[]},
      {name:"View-Secrets User",email:"view@example.com",roles:['view-secrets']},
      {name:"Manage-Users User",email:"manage@example.com",roles:['manage-users']}, */
    //  {name:"Admin User",email:"tmb@cgelsie.com",roles:['admin']}
    ];

_.each(users, function (user) {
  var id;
  console.log(user.email);

  var foundUser = Accounts.findUserByUsername(user.name);

  if (!foundUser) {

  id = Accounts.createUser({
    email: user.email,
    username: user.name,
    password: user.name + '123',
    profile: { name: user.name }
  });

  if (user.roles.length > 0) {
    // Need _id of existing user record so this call must come 
    // after `Accounts.createUser` or `Accounts.onCreate`
    Roles.addUsersToRoles(id, user.roles);


  }

  //houston_admins.insert({"user_id":id});


  }
  else {console.log('Found a user already ')+foundUser;}



});

//var epicex = Epics.find({}, {"label":1, "value":1, _id:0});
var epicscount = Epics.find({}, {"label":1, "value":1, _id:0}).count();

/*if (epicscount > 0) {
_.each(epicex, function(epic) {
  console.log(epic["label"]);
  console.log(epic["value"]);

})
}
else console.log(epicscount); */

console.log(epicscount);





//console.log(houston_admins.find().count() + 'admins created');
