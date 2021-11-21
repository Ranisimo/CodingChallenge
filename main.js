import {Machine} from './libs/subject.js';
import {Employee} from './libs/observer.js';

function init() {
    const employee1 = new Employee("john", "technician");
    const machineA = new Machine("Producing", "Machine A");
    const machineB = new Machine("Idle", "Machine B");
    const machineC = new Machine("Idle", "Machine C");

    var container = $(document.createElement('div')).appendTo('main');
    var table = $(document.createElement('table')).appendTo(container);
    var thead = $('<thead></thead>').appendTo(table);
    var theadtr = $('<tr></tr>').appendTo(thead);
    var thname = $('<th></th>').text('Name').appendTo(theadtr);
    var thstate = $('<th></th>').text('State').appendTo(theadtr);
    var tbody = $(document.createElement('tbody')).appendTo(table);

    var machines = [];
    machines.push(machineA, machineB, machineC);
    machines.forEach(function (machine) {
        var name = machine._name;
        var state = machine._state
        var tr = $(document.createElement('tr')).appendTo(tbody);
        var tdName = $(document.createElement('td'))
            .text(name)
            .appendTo(tr);
        var tdState = $(document.createElement('td'))
            .text(state)
            .appendTo(tr);
    })

    machineA.attachObserver(employee1);
    machineA.notifyAllObservers(machineA._name + ' ' + machineA._state);
    machineA.setState('Idle');
    machineA.notifyAllObservers(machineA._name + ' ' + machineA._state);
};

init();

/* function periodicStateChange() {
    
}; */