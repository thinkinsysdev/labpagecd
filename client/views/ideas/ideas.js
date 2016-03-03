
Template.ideas.created = function () {
  //
};

Template.ideas.helpers({

  EpicsList: function (){
  	return Epics.find({}, {sort: {label:1}});
  },
  getImageURL: function() {

  	var url = "http://10.240.111.222/cguser_" + this.submitterInitials.toLowerCase() + "_lthumb.jpg";

  	var boolCheckURL = Meteor.call("checkURL", url);
  	if (boolCheckURL)
  	  	return url;
  	 else return ("/img/cguser_default.png");
  },
  getDate : function() {
  		var day = moment(this.createdAt);
  		console.log (day.get('date') +  day.get('month') + ", " + day.get('year'));

  		//return (day.format('llll'));
  		return (day.format('MMMM Do, YYYY'))
  },
  //
  checkDefaultImage: function() {
  	if(this.imgurl == 'default') {

  		strReturnImg = '<img style="width: 100%" src=/img/ideas/' + this._id + '.jpg>';
  		//console.log(strReturnImg);
  	}
  	else return strReturnImg = '<img style="width: 100%" src=' + this.imgurl + '>'

  	return strReturnImg;

  }

});

Template.ideas.rendered = function () {
  //
};

Template.ideas.events({

	'click #filter': function(e, t) {
		e.preventDefault();
	

		//console.log('Clicked filter button and value is: ' + $(e.target).text());

		Router.go('/ideas/'+$(e.target).text());

	}

  
});