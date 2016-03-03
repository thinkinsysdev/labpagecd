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
  ////console.log('In the router function');
  this.route('ideas', {
    waitOn: function () {

      //  //console.log('In the WaitOn function');
      return [Meteor.subscribe('allIdeas'),Meteor.subscribe('allEpics')];
    },
    data: function () {

     //   //console.log('In the data function');
      return {
        ideas: Ideas.find({}, {sort: {createdAt: -1}}),
        epics: Epics.find({}, {sort: {label:1}})
      }
    },
    fastRender: true
  });

 /* this.route('idea', {
    path: '/ideas/:_id',
    waitOn: function () {
      return Meteor.subscribe('singleIdea', this.params._id);
    },
    data: function () {
      return {
        idea: Ideas.findOne(this.params._id)
      }
    }
  }); */

  this.route('ideas/:epic', {
    template: 'ideas',
    waitOn: function () {

      //  //console.log('In the WaitOn function');
      return [Meteor.subscribe('allIdeas'),Meteor.subscribe('allEpics')];
    },
    data: function () {

     //   //console.log('In the data function');
      return {
        ideas: Ideas.find( {epics : { $in : [this.params.epic] }}, {sort: {createdAt: -1}}),
        epics: Epics.find({}, {sort: {label:1}})
      }
    },
    fastRender: true
  });



 this.route('projects', {
    //path: '/projects/:epic',
    waitOn: function () {

    //  //console.log('In the WaitOn function');
      return [Meteor.subscribe('allProjects'),Meteor.subscribe('allEpics')];
    },
    data: function () {

      //  //console.log('In the data function ' + this.params.epic);
      return {
        projects: Projects.find({}, {sort: {title:1}}),
         epics: Epics.find({}, {sort: {label:1}})
      }
    },
    fastRender: true
  });

 this.route('projects/:epic', {
    //path: '/projects/:epic',
    template: 'projects',
    waitOn: function () {

    //  //console.log('In the WaitOn function');
      return [Meteor.subscribe('allProjects'),Meteor.subscribe('allEpics')];
    },
    data: function () {

       // //console.log('In the data function ' + this.params.epic);
       // //console.log(Projects.find( {epic : this.params.epic}).count());
      return {
      //  projects: Projects.find( {epic : this.params.epic}, {sort: {title: 1}})
        projects: Projects.find( {epics : { $in : [this.params.epic] }}, {sort: {title: 1}}),
        epics: Epics.find({}, {sort: {label:1}})
       
      }
    },
    fastRender: true
  });


  this.route('project', {
    path: '/projects/:_id',
    waitOn: function () {
      return [Meteor.subscribe('singleProject', this.params._id),Meteor.subscribe('allEpics')];
    },
    data: function () {
      return {
        project: Projects.findOne(this.params._id),
         epics: Epics.find({}, {sort: {label:1}})
      }
    },
    fastRender: true
  });

  // Pages

 // this.route('addProject');

  this.route('projectSearch');

  this.route('overview', {
    path: '/',
    fastRender: true
  });

  this.route('people', {
    path: '/people',
    template: 'people',
    fastRender: true

  });

  this.route('reserveSpace');

  this.route('addReservation');

  this.route('addEpic');

  this.route('submitIdea', {
    //path: '/projects/:epic',
    waitOn: function () {

    //  //console.log('In the WaitOn function');
      return Meteor.subscribe('allEpics');
    },
    data: function () {

      //  //console.log('In the data function ' + this.params.epic);
      return {
        epics: Epics.find({}, {sort: {label:1}})
      }
    },
    fastRender: true
  });


  this.route('videos');

  this.route('addProject', {
    //path: '/projects/:epic',
    waitOn: function () {

    //  //console.log('In the WaitOn function');
      return Meteor.subscribe('allEpics');
    },
    data: function () {

      //  //console.log('In the data function ' + this.params.epic);
      return {
        epics: Epics.find({}, {sort: {label:1}})
      }
    },
    fastRender: true
  });




  // Users
  this.route('adminPage');
  this.route('login');
  this.route('upload');
});
