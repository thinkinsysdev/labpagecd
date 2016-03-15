
Template.ideasList.created = function () {
  //
};

Template.searchResultsIdeas.helpers ({
  IdeasIndex: function() { return IdeasIndex;},
   ideas: function() {
    return Template.parentData(1).ideas;
  },
  getImageURL: function() {

   // var url = "/img/Images/cguser_" + this.submitterInitials.toLowerCase() + "_lthumb.jpg";
 // var url = "http://mysite/Person.aspx?accountname=CGUSER\\" + this.submitterInitials.toUpperCase();
var url = "http://mysite/User%20Photos/Profile%20Pictures/CGUSER_" + this.submitterInitials.toUpperCase() + "_LThumb.jpg";

  return url;
 
  },
  getDate : function() {
      var day = moment(this.createdAt);
   
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

  	//var url = "/img/Images/cguser_" + this.submitterInitials.toLowerCase() + "_lthumb.jpg";
//var url = "http://mysite/Person.aspx?accountname=CGUSER\\" + this.submitterInitials.toUpperCase();
var url = "http://mysite/User%20Photos/Profile%20Pictures/CGUSER_" + this.submitterInitials.toUpperCase() + "_LThumb.jpg";

	return url;
  
  },
  getDate : function() {
  		var day = moment(this.createdAt);
  		
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
 
   
    var evt = jQuery.Event("keyup");
    evt.which=13;
    
   $("input[type=text]").val(""); //$(e.target).text()
   $("input[type=text]").trigger(evt);
    
    Router.go('/ideas/'+$(e.target).text());

  }

  
});
