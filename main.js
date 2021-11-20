import {Machine} from './libs/subject.js';
import {Employee} from './libs/observer.js';

function init() {
    const employee1 = new Employee("john", "technician");
    const machine1 = new Machine("idle", "components")

    machine1.attachObserver(employee1);
    machine1.notifyAllObservers(machine1._name + ' ' + machine1._state);
    console.log(machine1.observers);
};

init();
/* function periodicStateChange() {

}; */