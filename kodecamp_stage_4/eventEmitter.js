const EventEmitter = require("events");

// Extend the EventEmitter object
class myEmitter extends EventEmitter {
  constructor() {
    super();
    // Create an array variable to push data
    this.eventsArray = [];
  }

  eventLogging(title, description) {
    let date = new Date().getTime();
    let eventObject = { title, description, date };
    this.eventsArray.push(eventObject);
    this.emit("eventsData", eventObject);
  }

  eventLists() {
    return this.eventsArray.map((object, index) => {
      return `| ${index + 1} | ${object.title} | ${object.date}|`;
    });
    // return this.eventsArray;
  }
}

// Creating an instance of the array
const newEmitter = new myEmitter();

// Listen for an event logged
newEmitter.on("eventsData", (event) => {
  console.log(`
 Events details:\n
 title: ${event.title}\n
 description: ${event.description}\n
 time: ${event.date} `);
});

newEmitter.eventLogging(
  "Event-emitter",
  "This is a pattern not an aspect of asynchronous code."
);
newEmitter.eventLogging(
  "Operating System",
  "The link between a program(like nodejs or mySQL) and your hardware."
);
newEmitter.eventLogging("nodejs", "koEasy");

console.log(newEmitter.eventLists());
