Meteor.methods({

 checkURL: function (url) {
 // check(userId, String);
  this.unblock();
  try {
    var result = HTTP.call("GET", url,
                           {});
    return true;
  } catch (e) {
    // Got a network error, time-out or HTTP error in the 400 or 500 range.
    return false;
  }
},
parseUpload: function(data) {
    check( data, Array );

    for ( let i = 0; i < data.length; i++ ) {
      let item   = data[ i ],
          exists = Ideas.findOne( { title: item.title } );
         exists = false;
      if ( !exists ) {
        Ideas.insert( item );
      } else {
        console.warn( 'Rejected. This item already exists.' );
      }
    }
  },

  requestSpace: function(){
      //console.log('Request Received: ' + eventtitle + ' date: ' + eventdate + 'desc: ' + eventdesc);  
      HTTP.call("POST", "https://maker.ifttt.com/trigger/reserve_space/with/key/dqu3p0dyh430dN0yJ54z1p",
          function (error, result) {
            if (!error) {
              //console.log(result.statusCode + ": " + result.content);
            }
          });
    },


  reserveSpaceSlack: function(doc) {
    //check(doc, Schema.reservations)
    title = doc.title + " request by " + doc.contactname;
    requestedBy = doc.contactname;

    msg = " \n" + "Details: \n" + "From: " + doc.reqBegin + ' To: ' + doc.reqEnd + "\n Space Requested: " + doc.requestSpace +'\n Services Requested: ' + doc.services; 
    message = title + " requested by " + requestedBy + "\n" + msg;


  let SlackAPI = Meteor.npmRequire('node-slack'),
    Slack    = new SlackAPI( Meteor.settings.private.slack.hookUrl );

    Slack.send({
  text: title,
  username: "LabPage",
  icon_emoji: ":calendar:",
  attachments: [{
      fallback: title,
      //pretext: title,
      text : msg
  }]

});

  }

 });
