
Template.ideasList.created = function () {
  //
};

Template.searchResultsIdeas.helpers ({
  IdeasIndex: function() { return IdeasIndex;},
   ideas: function() {
    return Template.parentData(1).ideas;
  },
  getImageURL: function() {

    var url = "/img/Images/cguser_" + this.submitterInitials.toLowerCase() + "_lthumb.jpg";
  return url;
  //  var boolCheckURL = Meteor.call("checkURL", url);
//    if (boolCheckURL)

 //       return url;
 //    else return ("/img/cguser_default.png");
  },
  getDate : function() {
      var day = moment(this.createdAt);
      //console.log (day.get('date') +  day.get('month') + ", " + day.get('year'));

      //return (day.format('llll'));
      return (day.format('MMMM Do, YYYY'))
  },
  //
  checkDefaultImage: function() {
    if(this.imgurl == 'default') {

      strReturnImg = '<img style="width: 100%" src="/img/default.png>"';
      //console.log(strReturnImg);
    }
    else return strReturnImg = '<img style="width: 100%" src=' + this.imgurl + '>'

    return strReturnImg;

  },
  checkSponsors: function() {
     if (this.sponsors) {
        //console.log (this.sponsors);
        if (this.sponsors.indexOf(",") > 0 )
            return "Sponsors: " + this.sponsors;
        else return "Sponsor: " + this.sponsors;
     }
     else return "";
  }

});

Template.ideas.helpers ({
 IdeasIndex: function() { return IdeasIndex;},
 EpicsList: function (){
    return Epics.find({}, {sort: {label:1}});
  }
});


Template.ideasList.helpers({
  ideas: function() {
    return Template.parentData(1).ideas;
  },
  
  getImageURL: function() {

  	var url = "/img/Images/cguser_" + this.submitterInitials.toLowerCase() + "_lthumb.jpg";
	return url;
  //	var boolCheckURL = Meteor.call("checkURL", url);
//  	if (boolCheckURL)

 // 	  	return url;
 // 	 else return ("/img/cguser_default.png");
  },
  getDate : function() {
  		var day = moment(this.createdAt);
  		//console.log (day.get('date') +  day.get('month') + ", " + day.get('year'));

  		//return (day.format('llll'));
  		return (day.format('MMMM Do, YYYY'))
  },
  //
  checkDefaultImage: function() {
  	if(this.imgurl == 'default') {

  		strReturnImg = '<img style="width: 100%" src="/img/default.png>"';
  		//console.log(strReturnImg);
  	}
  	else return strReturnImg = '<img style="width: 100%" src=' + this.imgurl + '>'

  	return strReturnImg;

  },
  checkSponsors: function() {
     if (this.sponsors) {
        //console.log (this.sponsors);
        if (this.sponsors.indexOf(",") > 0 )
            return "Sponsors: " + this.sponsors;
        else return "Sponsor: " + this.sponsors;
     }
     else return "";
  }

});

Template.ideasList.rendered = function () {
  //
};

Template.ideasList.events({



  
});

Template.searchResultsIdeas.events({

  
});

Template.ideas.events({

  'click #filter': function(e, t) {
    e.preventDefault();
  

    //console.log('Clicked filter button and value is: ' + $(e.target).text());
   // console.log($("#searchBar").find(":text"));
   $(".searchBar").find(":text").val=null
    Router.go('/ideas/'+$(e.target).text());

  }

  
});
