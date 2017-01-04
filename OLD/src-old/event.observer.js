// [pattern] Observer
export default class EventObserver {

    constructor() {
        this.handlers = [];
    }

    subscribe(event, handler) {
        this.handlers.push({
            event,
            handler
        });
    }

    publish(event, args) {
        this.handlers.forEach(item => {
            if (item.event === event) {
                item.handler(args);
            }
        });
    }
}