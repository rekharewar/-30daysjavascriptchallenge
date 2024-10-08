class EventEmitter {
    constructor() {
        this.events = new Map();
    }
    
    /**
     * Subscribe to an event with a callback function
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }
        this.events.get(eventName).push(callback);
        return {
            unsubscribe: () => {
                const listeners = this.events.get(eventName);
                const index = listeners.indexOf(callback);
                if (index !== -1) {
                    listeners.splice(index, 1);
                }
            }
        };
    }
    
    /**
     * Emit an event and call all its subscribed callbacks
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.events.has(eventName)) {
            return [];
        }
        const listeners = this.events.get(eventName);
        return listeners.map(callback => callback(...args));
    }
}


const emitter = new EventEmitter();

function onClickCallback() {
    return 99;
}
const sub = emitter.subscribe('onClick', onClickCallback);
console.log(emitter.emit('onClick')); 
sub.unsubscribe(); 
console.log(emitter.emit('onClick')); // []
