Reservations = new Mongo.Collection('reservations');

Reservations.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200,
    optional: false
  },
  summary: {
    type: String,
    label: "Summary",
    max: 1000,
    optional: true
  },
  contactname: {
    type: String,
    label: "Requested By (Initials)",
    optional: false
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    } 
  },
  reqBegin : {
    type: "Date",
    label: "From",
    autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker",
        timezoneId: "America/Los_Angeles"
      }
    },
    optional: false
  },
  reqEnd: {
    type: "Date",
    label: "To",
    autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker",
        timezoneId: "America/Los_Angeles"
      }
    },
    optional: false
  },
  
  requestSpace: {
    type: String,
    optional: true,
    autoform: {
      type: "select-radio-inline",
      group: "reqSpace",
      options: function () {
        return [
          {label: "Newton Lounge", value: "Newton Lounge"},
          {label: "The Edison", value: "The Edison"},
          {label: "Both", value: "Both"}
        ];
      }
    }
  },
  status: {
    type: String,
    label: "Status",
    optional: true
  },
  services : {
    type: [String],
    //label : "Services",
    optional: true,
    autoform: {
      group: 'reqservices',
      type: "select-checkbox-inline",
      options: function() {
    return [
      {label: "Breakfast", value: "Breakfast"},
      {label: "Lunch", value: "Lunch"},
      {label: "Cookies/Drinks", value: "Cookies/Drinks"},
      {label: "Technology Support", value: "Technology Support"},
       {label: "Video Conference", value: "Video Conference"},
     ] 
    }
    }
  }

  
}));
