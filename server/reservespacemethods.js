Meteor.methods({
  requestSpace: function(eventtitle, eventdate, eventdesc){
	  	console.log('Request Received: ' + eventtitle + ' date: ' + eventdate + 'desc: ' + eventdesc);  
	  	HTTP.call("POST", "https://maker.ifttt.com/trigger/ReserveSpace/with/key/dqu3p0dyh430dN0yJ54z1p",
          {data: {value1: eventtitle, value2: eventdate, value3: eventdesc}},
          function (error, result) {
            if (!error) {
              console.log(result.statusCode + ": " + result.content);
            }
          });

	 },
  reserveSpace: function(doc) {
  	//check(doc, Schema.reservations)
  	msg = " \n" + "Requested: \n" + "From: " + doc.reqBegin + ' To: ' + doc.reqEnd + '\n Services Requested: ' + doc.services + 
  	"\n Space Requested " + doc.requestSpace;
  	console.log('In the reserveSpace function');
  	  	console.log(doc.title);
  	  	HTTP.call("POST", "https://maker.ifttt.com/trigger/ReserveSpace/with/key/dqu3p0dyh430dN0yJ54z1p",
          {data: {value1: doc.title, value2: doc.contactname, value3: msg}},
          function (error, result) {
            if (!error) {
              console.log(result.statusCode + ": " + result.content);
            }
            else {
            	Session.set("httpError", "HTTP Call failed: " + result.statusCode); 

            }
          });


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
	 		console.log('Request failed: ' + eventtitle + ' date: ' + eventdate + 'desc: ' + eventdesc);  
	 		return false;
	 	}
	 	*/
