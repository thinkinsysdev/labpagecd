
Template.projects.created = function () {
  //
};

Template.projects.helpers({

  EpicsList: function (){
  	return Epics.find({}, {sort: {label:1}});
  },
  //
  convertPhasetoIcon: function(strPhase) {
  	
  	switch(strPhase) {
 	
 	case "Idea": strReturn =  '<div class="stageIcons" style="width:100%; border-top:1px gray solid; padding-top:4px;">' 
							+ '<a class="btn btn-success"><i class="fa fa-lightbulb-o"></i></a>'
							//+ ' <a class="btn"> <i class="fa fa-filter "></i> </a>'
							+ '<a class="btn"><i class="fa fa-cogs"></i> </a>'
							//+ '<a class="btn"><i class="fa fa-newspaper-o"></i> </a>'
							+ '<a class="btn"><i class="fa fa-graduation-cap"></i> </a>' 
							+ '<a class="btn"><i class="fa fa-archive"></i> </a>'
						+' </div>';
				  break;
	/*case "Hypothesis": strReturn =  '<div class="stageIcons" style="width:100%; border-top:1px gray solid; padding-top:4px;">' 
							+ '<a class="btn "><i class="fa fa-lightbulb-o"></i></a>'
							+ ' <a class="btn btn-success"> <i class="fa fa-filter "></i> </a>'
							+ '<a class="btn"><i class="fa fa-flask"></i> </a>'
							+ '<a class="btn"><i class="fa fa-newspaper-o"></i> </a>'
							+ '<a class="btn"><i class="fa fa-graduation-cap"></i> </a>'
						+' </div>';
						break; */
	case "Experiment": strReturn =  '<div class="stageIcons" style="width:100%; border-top:1px gray solid; padding-top:4px;">' 
							+ '<a class="btn "><i class="fa fa-lightbulb-o"></i></a>'
							//+ ' <a class="btn"> <i class="fa fa-filter "></i> </a>'
							+ '<a class="btn btn-success"><i class="fa fa-cogs"></i> </a>'
							//+ '<a class="btn"><i class="fa fa-newspaper-o"></i> </a>'
							+ '<a class="btn"><i class="fa fa-graduation-cap"></i> </a>'
							+ '<a class="btn"><i class="fa fa-archive"></i> </a>'
						+' </div>';
						break;
	case "Demo": strReturn =  '<div class="stageIcons" style="width:100%; border-top:1px gray solid; padding-top:4px;">' 
							+ '<a class="btn "><i class="fa fa-lightbulb-o"></i></a>'
							//+ ' <a class="btn"> <i class="fa fa-filter "></i> </a>'
							+ '<a class="btn "><i class="fa fa-cogs"></i> </a>'
							//+ '<a class="btn btn-success"><i class="fa fa-newspaper-o"></i> </a>'
							+ '<a class="btn"><i class="fa fa-graduation-cap"></i> </a>'
							+ '<a class="btn"><i class="fa fa-archive"></i> </a>'
						+' </div>';
						break;
	case "Graduate": strReturn =  '<div class="stageIcons" style="width:100%; border-top:1px gray solid; padding-top:4px;">' 
							+ '<a class="btn "><i class="fa fa-lightbulb-o"></i></a>'
							//+ ' <a class="btn"> <i class="fa fa-filter "></i> </a>'
							+ '<a class="btn"><i class="fa fa-cogs"></i> </a>'
							//+ '<a class="btn"><i class="fa fa-newspaper-o"></i> </a>'
							+ '<a class="btn btn-success"><i class="fa fa-graduation-cap"></i> </a>'
							+ '<a class="btn"><i class="fa fa-archive"></i> </a>'
						+' </div>';
						break;
	default: strReturn =  '<div class="stageIcons" style="width:100%; border-top:1px gray solid; padding-top:4px;">' 
							+ '<a class="btn "><i class="fa fa-lightbulb-o"></i></a>'
							//+ ' <a class="btn"> <i class="fa fa-filter "></i> </a>'
							+ '<a class="btn"><i class="fa fa-cogs"></i> </a>'
							//+ '<a class="btn"><i class="fa fa-newspaper-o"></i> </a>'
							+ '<a class="btn"><i class="fa fa-graduation-cap"></i> </a>'
							+ '<a class="btn"><i class="fa fa-archive"></i> </a>'
						+' </div>';
						break;
	}

	return strReturn;

  },
  checkDefaultImage: function() {
  	if(this.imgurl == 'default') {

  		strReturnImg = '<img style="width: 100%;" src="/img/projects/' + this._id  +'.jpg" onError=" />';
  	
  		//console.log(strReturnImg);
		return strReturnImg;
  	}
  	else { return strReturnImg = '<img style="width: 100%" src=' + this.imgurl + '>' };

  	

  },
	getImageURL: function() {

	if(this.imgurl == 'default') {
		strReturnImg="/img/projects/" + this._id + ".jpg";
		return strReturnImg;
	}
	else { return this.imgurl; }

	  } 

});

Template.projects.rendered = function () {
  //
};

Template.projects.events({

	'click #filter': function(e, t) {
		e.preventDefault();
		Router.go('/projects/'+$(e.target).text());

	}

  
});
