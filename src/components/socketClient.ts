class TelepartyClient {
  event: any;
  constructor(eventHandler: {
    onConnectionReady: () => void;
    onClose: () => void;
    onMessage: () => void;
  }) {
    this.event = eventHandler;
    console.log('eventHandler :', eventHandler);
  }
}

const eventHandler = {
  onConnectionReady: () => {
    console.log('Connection Establish');
  },
  onClose: () => {
    console.log('Socket Closed, Please refresh!');
  },
  onMessage: () => {
    console.log('Message Received!');
  },
};

const client = new TelepartyClient(eventHandler);

export default client;
