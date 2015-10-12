/* ---------------------------------------------------- +/

## Fixtures ##

Fill in the app with dummy data if database is empty.

/+ ---------------------------------------------------- */

// Fixture data 
if (Items.find().count() === 0) {
 
  Items.insert({
    title: "Eridanus",
    body: "Eridanus is a constellation. It is represented as a river; its name is the Ancient Greek name for the Po River."
  });

  Items.insert({
    title: "Cassiopeia",
    body: "Cassiopeia is a constellation in the northern sky, named after the vain queen Cassiopeia in Greek mythology, who boasted about her unrivalled beauty."
  });

  Items.insert({
    title: "Scorpius",
    body: "Scorpius, sometimes known as Scorpio, is one of the constellations of the zodiac."
  });

}

if (Projects.find().count() === 0) {
 
  prjid = Projects.insert({
    title: "Eridanus",
    body: "Eridanus is a constellation. It is represented as a river; its name is the Ancient Greek name for the Po River.",
    imglink: "/img/viewfinder-medium.jpg",
    labcontactinitials: "Rascon, Jacob",
    labcontactemail: "jbxr@capgroup.com",
    interests: ["Infrastructure", "VMWare", "NSX"],
    epicTopic: 'Mobile Computing'
  });

  /*Projects.addTag('Mobile Computing', {_id: prjid});

  project = Projects.findOne({_id: prjid});
  console.log(project.title + ' , tags:' + project.tags); */

  prjid = Projects.insert({
    title: "Cassiopeia",
    body: "Cassiopeia is a constellation in the northern sky, named after the vain queen Cassiopeia in Greek mythology, who boasted about her unrivalled beauty.",
    imglink: "/img/viewfinder-medium.jpg",
    labcontactinitials: "Yeh, Billy",
    labcontactemail: "bcy@capgroup.com",
    interests: ["Infrastructure", "VMWare", "NSX"],
    epicTopic: 'Technology Modernization'
  });

  /*Projects.addTag('Technology Modernization', {_id: prjid});


  project = Projects.findOne({_id: prjid});
  console.log(project.title + ' , tags:' + project.tags); */

  prjid2 = Projects.insert({
    title: "Scorpius",
    body: "Scorpius, sometimes known as Scorpio, is one of the constellations of the zodiac.",
    imglink: "/img/viewfinder-medium.jpg",
    labcontactinitials: "Long, Jet",
    labcontactemail: "jtfl@capgroup.com",
    interests: ["Infrastructure", "VMWare", "NSX"],
    epicTopic: 'Security'
  });

  /*Projects.addTag('Security', {_id: prjid2});

  project = Projects.findOne({_id: prjid2});
  console.log(project.title + ' , tags:' + project.tags); */


  prjid = Projects.insert({
    title: "Windows 10 Experiment",
    body: "CDigital Workspaces of Future",
    extlink: "http://confluence.capgroup.com/",
    imglink: "/img/viewfinder-medium.jpg",
    labcontactinitials: "Yeh, Billy",
    labcontactemail: "bcy@capgroup.com",
    interests: ["Infrastructure", "VMWare", "NSX"],
    epicTopic: 'Technology Modernization'
  });

  /*Projects.addTag('Technology Modernization', {_id: prjid});


  project = Projects.findOne({_id: prjid});
  console.log(project.title + ' , tags:' + project.tags); */


}

console.log('Projects: ' + Projects.find().count());
