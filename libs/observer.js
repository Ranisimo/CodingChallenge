class Observer {
    constructor(name){
        this._name = name;
    }

    update(){
        console.log("Updated");
    }
};

class Employee extends Observer {
    constructor(name, role){
        super(name);
        this.role = role;
    }

    update() {
        super.update();
    }
}
export default Observer;