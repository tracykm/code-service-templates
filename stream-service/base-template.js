/**
 * Mention the <platform version> parameterized, that serves as a info on when this Code template was used
 */

/**
 * REQ
 */

/**
 * RESP (success and error, mention how resp.success and resp.error behave differently in Stream Services)
 */

function StreamServiceName(req, resp) {
  ClearBlade.init({ request: req });
  var messaging = ClearBlade.Messaging();
  const TOPIC = "hello";
  messaging.subscribe(TOPIC, function(err, data) {
    if (err) {
      // DEBUG MESSAGE
      messaging.publish("error", "Subscribe failed: " + data);
      resp.error(data);
    }
    // DEBUG MESSAGE
    messaging.publish("success", "Subscribed to Shared Topic");
    // Once successfully subscribed
    WaitLoop();
  });

  function WaitLoop() {
    // DEBUG MESSAGE
    messaging.publish("success", "Starting the Loop");
    while (true) {
      messaging.waitForMessage([TOPIC], function(err, msg, topic) {
        if (err) {
          // DEBUG MESSAGE
          messaging.publish("error", "Failed to wait for message: " + err + " " + msg + "  " + topic);
          resp.error("Failed to wait for message: " + err + " " + msg + "    " + topic);
        } else {
          handler(msg, topic);
        }
      });
    }
  }

  function handler(msg, topic) {
    // Perform Some Action...like storing it in a collection, or process and publish to another topic
  }
}
