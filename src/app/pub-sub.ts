function Ee() {
  const eventObject = {};

  this.on = (eventName, listener) => {
    eventObject[eventName].push(listener);
  };
  this.emit = (eventName, params) => {
    eventObject[eventName].forEach(listener => {
      listener(params);
    });
  };

  this.off = (eventName, listener) => {
    if (eventObject[eventName] && listener) {
      eventObject[eventName] = eventObject[eventName].filter(callback => {
        return listener !== callback;
      });
    } else if (eventName && !listener) {
        eventObject[eventName] = [];
    } else if (!eventName && !listener) {
        this.eventObject = {};
    }
  };
}

const eventEmitter = new Ee();

eventEmitter.on('check', event => {});

eventEmitter.emit('check');
