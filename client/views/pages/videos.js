Template.videos.events({
 'click #CEPModalLink': function(e) {
    e.preventDefault();
    $('#CEPModal').find('iframe').attr('src', "http://thecapitalgroup.qumucloud.com/view/cep?embed=true&width=800&height=600");
    $('#CEPModal').modal('show');
  }, 
  'click #DelphixModalLink': function(e) {
    e.preventDefault();
    $('#DelphixModal').find('iframe').attr('src', 'http://thecapitalgroup.qumucloud.com/view/doxVIqYRosG?embed=true&width=800&height=600');
    $('#DelphixModal').modal('show');
  },
   'click #LabRebuildModalLink': function(e) {
    e.preventDefault();
    $('#LabRebuildModal').find('iframe').attr('src', 'http://thecapitalgroup.qumucloud.com/view/IVmHUFgTIEh?embed=true&width=800&height=600');
    $('#LabRebuildModal').modal('show');
  },
  'click #closeLabRebuildModal' : function(e) {
    e.preventDefault();
    //console.log('Close link clicked');
    var modal;
    modal = $('#LabRebuildModal');
   // console.log(modal);
    modal.find('iframe').attr('src', '');
  },
  'click #closeDelphixModal' : function(e) {
    e.preventDefault();
    //console.log('Close link clicked');
    var modal;
    modal = $('#DelphixModal');
   // console.log(modal);
    modal.find('iframe').attr('src', '');
  },
  'click #closeCEPModal' : function(e) {
    e.preventDefault();
    //console.log('Close link clicked');
    var modal;
    modal = $('#CEPModal');
   // console.log(modal);
    modal.find('iframe').attr('src', '');
  }

});


