class Subject {
    constructor(state){
        this._state = state;
        this.observers = [];
    }

    setState(s) {
        this._state = s;
    }

    attachObserver(o) {
        this.observers.push(o);
    }

    notifyAllObservers(subjectName, subjectState){
        this.observers.forEach(observer => observer.update(subjectName, subjectState));
    }
};

export class Machine extends Subject {
    constructor(state, name){
        super(state);
        this._name = name;
    }
};