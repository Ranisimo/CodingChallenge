class Observer {
    constructor(name){
        this._name = name;
    }

    update(){
        console.log("Subscribed observer updated");
    }
};

export class Employee extends Observer {
    constructor(name, role){
        super(name);
        this._role = role;
    }

    update(subjectName, subjectState) {
        const employeeData = [this._name, this._role, subjectName, subjectState]
        employeeData.join(", ");
    }
}