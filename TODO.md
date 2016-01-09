## TODO

* Add custom event objects to events
* Check if EventMgr works also with object prototypes
* Add passing multiple events to `.addListener()`
* Increase security

## KNOWN ISSUES

* Once called,  `SimpleEventManager()` exposes a public `_listeners` array on the host object. This could be unwanted. Actually The alternative is to leave the `_listeners` array private instantiation
to the user and remove if from `SimpleEventManager()`.
