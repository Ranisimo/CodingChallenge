class Subject {
    constructor(state){
        this._state = state;
        this.observers = [];
    }

    setState(s) {
        this.state = s;
    }

    attachObserver(o) {
        this.observers.push(o);
    }

    notifyAllObservers(data){
        this.observers.forEach(observer => observer.update(data));
    }
};

export class Machine extends Subject {
    constructor(state, name){
        super(state);
        this._name = name;
    }
};