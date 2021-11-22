import {Machine} from './libs/subject.js';
import {Employee} from './libs/observer.js';

function init() {
    const employee1 = new Employee("John Doe", "Technician");
    const machineA = new Machine("IDLE", "Machine A");
    const machineB = new Machine("IDLE", "Machine B");
    const machineC = new Machine("IDLE", "Machine C");

    var container = $(document.createElement('div')).appendTo('main');
    var table = $(document.createElement('table')).appendTo(container);
    var thead = $('<thead></thead>').appendTo(table);
    var theadtr = $('<tr></tr>').appendTo(thead);
    var thname = $('<th></th>').text('Name').appendTo(theadtr);
    var thstate = $('<th></th>').text('State').appendTo(theadtr);
    var tbody = $(document.createElement('tbody')).appendTo(table);

    var machines = [];
    machines.push(machineA, machineB, machineC);
    console.log(machines);
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

        if (state === 'PRODUCING') {
            $(tdState).css("color", "green");
        } else if (state === 'IDLE') {
            $(tdState).css("color", "yellow");
        } else {
            $(tdState).css("color", "red");
        }
    });

    machineA.attachObserver(employee1);
    periodicStateChange(...machines);
};

init();

function periodicStateChange(...machines) {
    pickMachine(...machines);
};

function pickState(state) {
    var randomStatePick = Math.floor(Math.random()*3) + 1;
    console.log(randomStatePick);

    switch (randomStatePick) {
        case 1:
            state = 'IDLE';
            return state;
        case 2:
            state = 'PRODUCING';
            return state;
        case 3:
            state = 'STARVED';
            return state;
    }

    /* if (newState === 'PRODUCING') {
        $(this).css("color", "green");
    } else if (state === 'IDLE') {
        $(this).css("color", "yellow");
    } else {
        $(this).css("color", "red");
    } */
};

function pickMachine(...machines) {
    var machinePick = Math.floor(Math.random()*3) + 1; //returns random integer between 1 and 3
    console.log(machinePick);
    console.log(machines);
    var state = pickState();
    console.log(state);
    switch (machinePick) {
        case 1:
            console.log("Machine A");
            console.log(machines[0]._state);
            machines[0].setState(state);
            console.log(machines[0]._state);
            break;
        case 2:
            console.log("Machine B");
            console.log(machines[1]._state);
            machines[0].setState(state);
            console.log(machines[1]._state);
            break; 
        case 3:
            console.log("Machine C");
            console.log(machines[2]._state);
            machines[0].setState(state);
            console.log(machines[2]._state);
            break;
    }
};