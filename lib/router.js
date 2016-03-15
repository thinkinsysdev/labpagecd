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

var subs = new SubsManager({
// will be cached only 20 recently used subscriptions
  cacheLimit: 25,
  // any subscription will be expired after 5 minutes of inactivity
  expireIn: 5
});


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
   /*if (BrowserDetect.browser != "Chrome") {
  	this.render('browserNotSupportedPage');
	this.stop();
	}
   else */ this.next();

});
// Routes

Router.map(function() {

  // Items
  ////console.log('In the router function');
  this.route('ideas', {
    template: 'ideas',
    path : "/ideas",
    loadingTemplate: 'loading',
    waitOn: function () {

      //  //console.log('In the WaitOn function');
      return [subs.subscribe('allIdeas'),subs.subscribe('allEpics')];
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

 this.route('reservations', {
    template: 'reservations',
    path : "/reservations",
    loadingTemplate: 'loading',
    waitOn: function () {

      //  //console.log('In the WaitOn function');
      return [subs.subscribe('allReservations')];
    },
    data: function () {

     //   //console.log('In the data function');
      return {
        reservations: Reservations.find({}, {sort: {createdAt: -1}})
       
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
    //path: "/ideas"
    template: 'ideas',
    loadingTemplate: 'loading',
    waitOn: function () {

     // console.log('In the WaitOn function');
      return [subs.subscribe('allIdeas'),subs.subscribe('allEpics')];
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

this.route('idea/edit/:_id', {
   template: 'editIdea',
   name: 'editIdea',
   loadingTemplate: 'loading',
    waitOn: function () {
      return [Meteor.subscribe('singleIdea', this.params._id),subs.subscribe('allEpics')];
    },
    data: function () {
      return {
        idea: Ideas.findOne(this.params._id),
         epics: Epics.find({}, {sort: {label:1}})
      }
    }
    //fastRender: true
  });

this.route('project/edit/:_id', {
   template: 'editProject',
   name: 'editProject',
   loadingTemplate: 'loading',
    waitOn: function () {
      return [Meteor.subscribe('singleProject', this.params._id),subs.subscribe('allEpics')];
    },
    data: function () {
      return {
        project: Projects.findOne(this.params._id),
         epics: Epics.find({}, {sort: {label:1}})
      }
    }
    //fastRender: true
  });

 this.route('projects', {
    //path: '/projects/:epic',
    path: "/projects",
    template: 'projects',
    loadingTemplate: 'loading',
    waitOn: function () {

    //  //console.log('In the WaitOn function');
      return [subs.subscribe('allProjects'),subs.subscribe('allEpics')];
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
    loadingTemplate: 'loading',
    waitOn: function () {

    //  //console.log('In the WaitOn function');
      return [subs.subscribe('allProjects'),subs.subscribe('allEpics')];
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
    loadingTemplate: 'loading',
    waitOn: function () {
      return [subs.subscribe('singleProject', this.params._id),subs.subscribe('allEpics')];
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

  this.route('projectSearch',{fastRender: true});

  this.route('overview', {
    path: '/',
    fastRender: true
  });

  this.route('people', {
    path: '/people',
    template: 'people',
    fastRender: true

  });

  this.route('reserveSpace', {fastRender: true});

  this.route('addReservation', {fastRender: true});

  this.route('addEpic', {fastRender: true});

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
  this.route('adminPage', {
    layoutTemplate: "",
    fastRender: true});
  this.route('login', 
    { layoutTemplate: "login",
      fastRender: true});
  this.route('upload', {fastRender: true});
});
