# EventMgr
(Extremely) simple event manager for Javascript Vanilla

## Basic Usage

```javascript
var myObject = function(){

  //Adds events support to "this" object
  SimpleEventManager (this);
  
  this.say = function (what){
    console.log (what);
    //Fires the event "said"
    this.dispatch("said");
  };
};

//Adds listener to "said" event fired from myObject
listenerRef = myObject.addListener("said", function(){
  console.log ("Fired event 'said'");
});

myObject.say ("Hello");

//Removes listener
myObject.removeListener(listenerRef);

myObject.say ("World");

```
