Template.videos.events({
  'click #AppianModalLink': function(e) {
    e.preventDefault();
    
    $('#AppianModal').modal('show');
  },
   'click #CEPModalLink': function(e) {
    e.preventDefault();
    
    $('#CEPModal').modal('show');
  }, 
  'click #DelphixModalLink': function(e) {
    e.preventDefault();
    
    $('#DelphixModal').modal('show');
  },
   'click #LabRebuildModalLink': function(e) {
    e.preventDefault();
    
    $('#LabRebuildModal').modal('show');
  },
  'click #DevEnablementModalLink': function(e) {
    e.preventDefault();
    
    $('#DevEnablementModal').modal('show');
  }

});