class Subject {
    constructor(state){
        this._state = state;
        this.observers = [];
    }

    setState(s) {   //change object state
        this._state = s;
        this.notifyAllObservers();
    }

    attachObserver(o) {   //subscribe method
        this.observers.push(o);
    }

    notifyAllObservers(){   //notify method
        this.observers.forEach(observer => observer.update());
    }
};

export class Machine extends Subject {
    constructor(state, name){
        super(state);
        this._name = name;
    }

    notifyAllObservers(){   //notify method
        this.observers.forEach(observer => observer.update(this._name, this._state));
    }
};