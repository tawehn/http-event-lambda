'use strict';

var AWS = require("aws-sdk");
var config = require("./config");

AWS.config = {
    region: config.region
};


exports.handler = function(event, context) {
  console.log("Event topic: %s",event.eventTopic);
  console.log("Event subject: %s",event.eventSubject);
  console.log("Event body: %s",event.eventBody);

  var arn = "arn:"+config.partition+":sns:"+config.region+":"+config.accountId+":"+event.eventTopic;
  var sns = new AWS.SNS();
  var params = {
          Message: event.eventBody,
          Subject: event.eventSubject,
          TopicArn: arn
      };
      sns.publish(params, context.done);
};
