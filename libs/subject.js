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

    notifyAllObservers(){
        Observer.update()
    }
};

class Machine extends Subject {
    constructor(state, name){
        super(state);
        this._name = name;
    }
};

export default Subject;