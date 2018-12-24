#!/bin/sh
curl -X POST -H "Authorization: Bearer ya29.ElqKBGN2Ri_Uz...PbJ_uNasm" -H "Content-Type: application/json" -d '{
  "message": {
    "notification": {
      "title": "FCM Message",
      "body": "This is a message from FCM"
    },
    "webpush": {
      "headers": {
        "Urgency": "high"
      },
      "notification": {
        "body": "This is a message from FCM to web",
        "requireInteraction": "true",
        "badge": "/badge-icon.png"
      }
    }
  },
  "token": "bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1..."
  }
}' "https://fcm.googleapis.com/v1/projects/myproject-b5ae1/messages:send"