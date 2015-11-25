Reservations = new Mongo.Collection('reservations');

Reservations.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  summary: {
    type: String,
    label: "Summary",
    max: 1000
  },
  contactname: {
    type: String,
    label: "Requested By (Initials)",
    optional: true
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
    optional: true
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
    optional: true
  },
  
  requestSpace: {
    type: String,
    optional: true,
    autoform: {
      type: "select-checkbox-inline",
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
    type: String,
    label : "Services",
    optional: true
  }

  
}));
