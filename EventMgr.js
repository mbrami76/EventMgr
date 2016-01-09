// Simple Event Manager for Javascript
// Version 0.1
// January 2016
// Author: Michele Brami (mbrami76@gmail.com)
// ***************************************************************************

function SimpleEventMananger(obj){
  //Object obj: object that needs event management
  
  obj._listeners = [];
  //contains all eventListeners

  //addListener: adds handler for a given event 
  obj.addListener = (function(o){
    return function (eventName, callback){
      //String eventName: name of event to listen for
      //Function callback: event handler function
      //Returns handler reference string
      if (typeof callback == 'function'){
        var handler = UID();
        o._listeners.push({uid: handler, en: eventName, cb: callback});
        return handler;
      }
    };
  }(obj));

  //removeListener: removes specific event handler 
  obj.removeListener = (function(o){
    return function(listenerUID){
      //String listenerUID: event listener reference
      var length = o._listeners.length;
      for (var i = 0; i<length; i++){
        if (o._listeners[i].uid == listenerUID){
          o._listeners.splice(i, 1);
        };
      }   
    };  
  }(obj));

  //removeAllListeners: removes all event handlers from obj
  obj.removeAllListeners = (function(o){
    return function(){
      o._listeners=[];
    };  
  }(obj));

  //removeListenersForEvent: removes all handlers from specific event
  obj.removeListenersForEvent = (function(o){
    return function(EventName){
      //String EventName: Event whose listeners are to be removed
      var length = o._listeners.length;
      for (var i = 0; i<length; i++){
        if (o._listeners[i].en == EventName){
          o._listeners.splice(i, 1);
        };
      }   
    };  
  }(obj));

  //dispatch: fires an event and executes all associated callbacks
  obj.dispatch = (function(o){
    return function (EventName){
      //String EventName: Event to be dispatched to listeners
      for (var i = 0; i<o._listeners.length; i++){
        if (o._listeners[i].en == EventName){
          o._listeners[i].cb();
        }
      }
    };  
  }(obj));
}

//UID: support function: generates a random string as listener reference
//TODO: replace with safer generator
function UID() {
    var array = new Uint16Array(4);
    var result = "";
    window.crypto.getRandomValues(array);
    for (var i = 0; i < array.length; i++){
      result = result + (array[i].toString(36)); 
    }
    return (result.slice(-8));
}
