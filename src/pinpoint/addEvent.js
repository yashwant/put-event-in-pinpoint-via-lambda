'use strict';

const AWS = require('aws-sdk');

var pinpointAWSApp = new AWS.Pinpoint({
  apiVersion: '2016-12-01'
});

const ApplicationId = process.env.PINPOINT_APP_ID;

function putEventsAction(event, context, callback)
{
  console.log("Inside add event");
    if (!event || !event.headers) {
      callback({
        error: 'Not a valid event object'
      });
    }
    // allows for using callbacks as finish/error-handlers
    context.callbackWaitsForEmptyEventLoop = false;
console.log("Inside add event");


// {"ChannelType":"SMS","Address":"2065550182","Location":{"Country":"CAN"},"Demographic":{"Platform":"Android","Make":"LG"},"User":{"UserId":"example-user-id-1"}}
// {"ChannelType":"APNS","Address":"1a2b3c4d5e6f7g8h9i0j1a2b3c4d5e6f","Location":{"Country":"USA"},"Demographic":{"Platform":"iOS","Make":"Apple"},"User":{"UserId":"example-user-id-2"}}
// {"ChannelType":"EMAIL","Address":"john.stiles@example.com","Location":{"Country":"USA"},"Demographic":{"Platform":"iOS","Make":"Apple"},"User":{"UserId":"example-user-id-2"}};


var params = {
  ApplicationId: process.env.PINPOINT_APP_ID, /* required */
  EventsRequest: { /* required */
    BatchItem: {
      'Event1': {
        Endpoint: {
          Address: 'yashwant.gaikawad@gmail.com',
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
          'login_event': {
            Attributes: {
              'screen_res': 'mobile',
              /* '<__string>': ... */
            },
            ClientSdkVersion: 'v0.1.0',
            EventType: 'EMAIL',
            Metrics: {
              'sample_data': 0.0,
              /* '<__string>': ... */
            },
            // Session: {
            //   Duration: 1000,
            //   Id: 'STRING_VALUE1',
            //   StartTimestamp: '2018-09-15 12:12:45',
            //   StopTimestamp: '2018-09-15 12:12:46'
            // },
            Timestamp: '2018-12-13T15:53:00+05:00'
          },
          /* '<__string>': ... */
        }
      },
      'Event2': {
        Endpoint: {
          Address: 'yash.want.gaikawad@gmail.com',
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
            UserId: '123456'
          }
        },
        Events: {
          'login_event': {
            Attributes: {
              'screen_res': 'mobile',
              /* '<__string>': ... */
            },
            ClientSdkVersion: 'v0.1.0',
            EventType: 'EMAIL',
            Metrics: {
              'sample_data': 0.0,
              /* '<__string>': ... */
            },
            // Session: {
            //   Duration: 1000,
            //   Id: 'STRING_VALUE1',
            //   StartTimestamp: '2018-09-15 12:12:45',
            //   StopTimestamp: '2018-09-15 12:12:46'
            // },
            Timestamp: '2018-12-13T15:52:00+05:00'
          },
          /* '<__string>': ... */
        }
      },
      'Event3': {
        Endpoint: {
          Address: 'yashwant.s.gaikawad@gmail.com',
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
            UserId: '1234567'
          }
        },
        Events: {
          'login_event': {
            Attributes: {
              'screen_res': 'mobile',
              /* '<__string>': ... */
            },
            ClientSdkVersion: 'v0.1.0',
            EventType: 'EMAIL',
            Metrics: {
              'sample_data': 0.0,
              /* '<__string>': ... */
            },
            // Session: {
            //   Duration: 1000,
            //   Id: 'STRING_VALUE1',
            //   StartTimestamp: '2018-09-15 12:12:45',
            //   StopTimestamp: '2018-09-15 12:12:46'
            // },
            Timestamp: '2018-12-13T15:51:00+05:00'
          },
          /* '<__string>': ... */
        }
      },

    }
  }
};

console.log(params);

pinpointAWSApp.putEvents(params, function(err, data) {
  if (err)
  {
    console.log('+++++++++++++++ERROR+++++++++++++++');
    console.log(err, err.stack); // an error occurred
    callback(null, err.stack);
  }
  else
  {
    console.log('+++++++++++++++SUCCESS+++++++++++++++');
    console.log(data); // successful response
    callback(null, data);
  }
});

}

var errHandler = function (err) {
  console.log('+++++++++++++++ERROR =======> +++++++++++++++');
  console.log(err);
};
          
module.exports.addEvent = putEventsAction;