'use strict';

require('babel-register')({
    presets: [ 'env' ]
})

const uuid = require('uuid');
const request = require('request');
const rp = require('request-promise');
const Promise = require("bluebird");
const AWS = require('aws-sdk');
var pinpoint = new AWS.Pinpoint({apiVersion: '2016-12-01'});
const ApplicationId = process.env.PINPOINT_APP_ID;

import Amplify, { Analytics } from 'aws-amplify';

function putEventsAction(event, context, callback)
{
    if (!event || !event.headers) {
      callback({
        error: 'Not a valid event object'
      });
    }
    // allows for using callbacks as finish/error-handlers
    context.callbackWaitsForEmptyEventLoop = false;

var params = {
  ApplicationId: process.env.PINPOINT_APP_ID, /* required */
  EventsRequest: { /* required */
    BatchItem: {
      'Event1': {
        Endpoint: {
          Address: 'STRING_VALUE',
          Attributes: {
            'name': [
              'Yashwant',
              /* more items */
            ]
          },
          ChannelType: 'EMAIL',
          Demographic: {
            AppVersion: 'STRING_VALUE',
            Locale: 'STRING_VALUE',
            Make: 'STRING_VALUE',
            Model: 'STRING_VALUE',
            ModelVersion: 'STRING_VALUE',
            Platform: 'STRING_VALUE',
            PlatformVersion: 'STRING_VALUE',
            Timezone: 'STRING_VALUE'
          },
          EffectiveDate: 'STRING_VALUE',
          EndpointStatus: 'STRING_VALUE',
          Location: {
            City: 'STRING_VALUE',
            Country: 'STRING_VALUE',
            Latitude: 0.0,
            Longitude: 0.0,
            PostalCode: 'STRING_VALUE',
            Region: 'STRING_VALUE'
          },
          Metrics: {
            'visit_chan': 1.0,
            /* '<__string>': ... */
          },
          OptOut: 'STRING_VALUE',
          RequestId: 'STRING_VALUE',
          User: {
            UserAttributes: {
              'UserAppId': [
                '12345',
                /* more items */
              ],
              /* '<__string>': ... */
            },
            UserId: '12345'
          }
        },
        Events: {
          '<__string>': {
            Attributes: {
              '<__string>': 'STRING_VALUE',
              /* '<__string>': ... */
            },
            ClientSdkVersion: 'STRING_VALUE',
            EventType: 'STRING_VALUE',
            Metrics: {
              '<__string>': 0.0,
              /* '<__string>': ... */
            },
            Session: {
              Duration: 0,
              Id: 'STRING_VALUE',
              StartTimestamp: 'STRING_VALUE',
              StopTimestamp: 'STRING_VALUE'
            },
            Timestamp: 'STRING_VALUE'
          },
          /* '<__string>': ... */
        }
      },
      /* '<__string>': ... */
    }
  }
};
pinpoint.putEvents(params, function(err, data) {
  if (err)
  {
    console.log(err, err.stack); // an error occurred
    callback(null, err.stack);
  }
  else
  {
    console.log(data); // successful response
    callback(null, data);
  }
});

}

function putEvent2()
{

const amplifyConfig = {
  Auth: {
    identityPoolId: 'us-east-1:2a4f5a68-5d03-49ac-a407-e6401eb7569f',
    region: 'us-east-1'
  }
}

//Initialize Amplify
Amplify.configure(amplifyConfig);

const analyticsConfig = {
  AWSPinpoint: {
        // Amazon Pinpoint App Client ID
        appId: '99a570dcde9c4220814af8b1ff550912',
        // Amazon service region
        region: 'us-east-1',
        mandatorySignIn: false,
  }
}

Analytics.updateEndpoint({
    Attributes: {
        interests: ['science', 'politics', 'travel'],
        //..
    },
    UserId: 'UserIdValue'
});

}
var errHandler = function (err) {
  console.log(err);
};
          
module.exports.addEvent = putEvent2;