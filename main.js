import Subject from 'libs/subject.js';
import Observer from 'libs/observer.js';

function init() {
    const employee = new Employee("john", "technician");
    const machine1 = new Machine("1", "idle")

    machine1.attachObserver(employee);
    machine1.notifyAllObservers()
}

init()
/* function periodicStateChange() {

}; */