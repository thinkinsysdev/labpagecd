/*


Template.reservationList.helpers({
  reservations: function() {
    return Template.parentData(1).reservations;
  },
  
  getImageURL: function() {

  	var url = "/img/Images/cguser_" + this.submitterInitials.toLowerCase() + "_lthumb.jpg";
	return url;
  
  },
  getDate : function(createdAt) {
  		var day = moment(createdAt);
  		

  		return (day.format('llll'));
  		
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



Template.ideas.events({

 

  
});
*/
