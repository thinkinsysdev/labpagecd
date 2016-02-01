Meteor.methods({
  requestSpace: function(eventtitle, eventdate, eventdesc){
	  	//console.log('Request Received: ' + eventtitle + ' date: ' + eventdate + 'desc: ' + eventdesc);  
	  	HTTP.call("POST", "https://maker.ifttt.com/trigger/ReserveSpace/with/key/dqu3p0dyh430dN0yJ54z1p",
          {data: {value1: eventtitle, value2: eventdate, value3: eventdesc}},
          function (error, result) {
            if (!error) {
              //console.log(result.statusCode + ": " + result.content);
            }
          });

	 },
  reserveSpace: function(doc) {
  	//check(doc, Schema.reservations)
  	msg = " \n" + "Requested: \n" + "From: " + doc.reqBegin + ' To: ' + doc.reqEnd + '\n Services Requested: ' + doc.services + 
  	"\n Space Requested " + doc.requestSpace;
  	//console.log('In the reserveSpace function');
  	  	//console.log(doc.title);
  	  	HTTP.call("POST", "https://maker.ifttt.com/trigger/ReserveSpace/with/key/dqu3p0dyh430dN0yJ54z1p",
        //HTTP.call("POST", "https://hooks.slack.com/services/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",
          {data: {value1: doc.title, value2: doc.contactname, value3: msg}},
          function (error, result) {
            if (!error) {
              //console.log(result.statusCode + ": " + result.content);
            }
            else {
            	Session.set("httpError", "HTTP Call failed: " + result.statusCode); 

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


/*
    //console.log('In the reserveSpaceSlack function');
        //console.log(doc.title);
        //HTTP.call("POST", "https://maker.ifttt.com/trigger/ReserveSpace/with/key/dqu3p0dyh430dN0yJ54z1p",
        HTTP.call("POST", "https://hooks.slack.com/services/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",
          {payload: {message} },
          function (error, result) {
            if (!error) {
              //console.log(result.statusCode + ": " + result.content);
            }
            else {
              //console.log("httpError", "HTTP Call failed: " + result.statusCode); 

            }
          });
*/

  } 
 });





/*
this.unblock();

	try 
	  	{
	  	HTTP.call('POST', 'https://maker.ifttt.com/trigger/ReserveSpace/with/key/dqu3p0dyh430dN0yJ54z1p', {data: {value1: eventtitle, value2: eventdate, value3: eventdesc} } );
	 	return true;
	 	} 
	 	catch (e)
	 	{
	 		//console.log('Request failed: ' + eventtitle + ' date: ' + eventdate + 'desc: ' + eventdesc);  
	 		return false;
	 	}
	 	*/
