Template.addReservation.helpers({
	ServiceOptions: function() {
    return [
      {label: "Refreshments", value: "Refreshments"},
      {label: "Lunch", value: "Lunch"},
      {label: "Technology Support", value: "Technology Support"}
     ] 
    }
  
	
});

AutoForm.addHooks(['addReservationForm'], {
  onSuccess: function(operation, result, template) {
    FlashMessages.sendSuccess('Your request has been submitted successfully. Please contact PRRH/TMB if you have any questions.');
    Router.go("/");
  }
});