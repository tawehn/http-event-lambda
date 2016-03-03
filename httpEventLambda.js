'use strict';

exports.handler = function(event, context) {
  console.log("Event type: %s",event.eventType);
  console.log("Event subject: %s",event.eventSubject);
  console.log("Event body: %s",event.eventBody);
  context.done(null,'Success!');
};
