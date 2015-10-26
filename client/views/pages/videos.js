Template.videos.events({
  'click #AppianModal': function(e) {
    e.preventDefault();
    
    $('#videosModal').modal('show');
  }
});