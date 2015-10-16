Template.header.helpers({
  messages: function () {
    return Messages.find();
  },
  isLoggedIn: function () {
    return !!Meteor.user();
  },
  isAdmin: function() {
    var currentUser = Meteor.user();
    console.log(currentUser.roles);
    // Is this hackable?
    if (null !== currentUser) {
        if ('tmb' === currentUser.username) {
            return true;
        }
    }

    }
})

Template.header.events({
  'click .log-out': function () {
    Meteor.logout();
  },
  'click #submitidea': function () {
                console.log('Clicked submit button');
                alert('Show Dialog');
                showCollectorDialog();
            }
  

})

Template.header.rendered = function () {
    console.log('In the header rendered function');

    window.ATL_JQ_PAGE_PROPS = {
        "triggerFunction": function(showCollectorDialog) {
            jQuery("#submitidea").click(function(e) {
                e.preventDefault();
                console.log('Clicked the submit button');
                showCollectorDialog();
            });
        }
    };


/**
 * This object controls the nav bar. Implement the add and remove
 * action over the elements of the nav bar that we want to change.
 *
 * @type {{flagAdd: boolean, elements: string[], add: Function, remove: Function}}
 
var myNavBar = {

    flagAdd: true,

    elements: [],

    init: function (elements) {
        this.elements = elements;
    },

    add : function() {
        if(this.flagAdd) {
            for(var i=0; i < this.elements.length; i++) {
                document.getElementById(this.elements[i]).className += " fixed-theme";
            }
            this.flagAdd = false;
        }
    },

    remove: function() {
        for(var i=0; i < this.elements.length; i++) {
            document.getElementById(this.elements[i]).className =
                    document.getElementById(this.elements[i]).className.replace( /(?:^|\s)fixed-theme(?!\S)/g , '' );
        }
        this.flagAdd = true;
    }

};
*/
/**
 * Init the object. Pass the object the array of elements
 * that we want to change when the scroll goes down

myNavBar.init(  [
    "header",
    "header-container",
    "brand"
]);

*/
/**
 * Function that manage the direction
 * of the scroll
 
function offSetManager(){

    var yOffset = 0;
    var currYOffSet = window.pageYOffset;

    if(yOffset < currYOffSet) {
        myNavBar.add();
    }
    else if(currYOffSet == yOffset){
        myNavBar.remove();
    }

}

/**
 * bind to the document scroll detection
 
window.onscroll = function(e) {
    offSetManager();
}

/**
 * We have to do a first detectation of offset because the page
 * could be load with scroll down set.
 
offSetManager();
	*/
}