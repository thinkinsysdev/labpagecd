/* ---------------------------------------------------- +/

## Client Router ##

Client-side Router.

/+ ---------------------------------------------------- */

// Config

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

// Filters

var filters = {

  myFilter: function () {
    // do something
  },

  isLoggedIn: function() {
    if (!(Meteor.loggingIn() || Meteor.user())) {
      alert('Please Log In First.')
      this.stop();
    }
  }

}

//Router.onBeforeAction(filters.myFilter, {only: ['items', 'projects']});
Router.onBeforeAction (function() {
    this.next();
  

});
// Routes

Router.map(function() {

  // Items
  console.log('In the router function');
  this.route('items', {
    waitOn: function () {

        console.log('In the WaitOn function');
      return Meteor.subscribe('allItems');
    },
    data: function () {

        console.log('In the data function');
      return {
        items: Items.find()
      }
    }
  });

  this.route('item', {
    path: '/items/:_id',
    waitOn: function () {
      return Meteor.subscribe('singleItem', this.params._id);
    },
    data: function () {
      return {
        item: Items.findOne(this.params._id)
      }
    }
  });

 this.route('projects', {
    //path: '/projects/:epic',
    waitOn: function () {

      console.log('In the WaitOn function');
      return Meteor.subscribe('allProjects');
    },
    data: function () {

        console.log('In the data function ' + this.params.epic);
      return {
        projects: Projects.find()
      }
    }
  });

 this.route('projects/:epic', {
    //path: '/projects/:epic',
    template: 'projects',
    waitOn: function () {

      console.log('In the WaitOn function');
      //return Meteor.subscribe('allProjects');
    },
    data: function () {

        console.log('In the data function ' + this.params.epic);
        console.log(Projects.find( {epic : this.params.epic}).count());
      return {
        projects: Projects.find( {epic : this.params.epic})
      }
    }
  });


  this.route('project', {
    path: '/projects/:_id',
    waitOn: function () {
      return Meteor.subscribe('singleProject', this.params._id);
    },
    data: function () {
      return {
        project: Projects.findOne(this.params._id)
      }
    }
  });

  // Pages

  this.route('addProject');

  this.route('overview', {
    path: '/'
  });

  this.route('people', {
    path: '/people',
    template: 'profiles'

  });



  // Users

  this.route('login');

});
