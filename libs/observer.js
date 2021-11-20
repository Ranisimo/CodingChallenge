class Observer {
    constructor(name){
        this._name = name;
    }

    update(){
        console.log("Updated");
    }
};

export class Employee extends Observer {
    constructor(name, role){
        super(name);
        this._role = role;
    }

    update(data) {
        const employeeData = [this._name, this._role, data]
        employeeData.join(", ");
        console.log(employeeData);
    }
}