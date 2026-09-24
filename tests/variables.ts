class variables {
    //instance variable
    instanceVar = "instance variable";

    //static variable
    static staticVar = 30;
    m1(){

        //defining a variable inside a method is called local variable
        let a = 10;
        console.log("m1 method");
        //accessing the local variable inside the method
        console.log(a + " is the value of local variable");
        console.log(this.instanceVar + " is the value of instance variable");
    }

    m2(){
        console.log("m2 method");
        console.log(this.instanceVar + " is the value of instance variable");
    }
        
    m3(){
        console.log("m3 method");
        //accessing the static variable inside the method
        console.log(variables.staticVar + " is the value of static variable");
    }   

    static m4(){
        console.log("m4 static method");
        //accessing the static variable inside the static method
        console.log(variables.staticVar + " is the value of static variable");
    }
}

let m = new variables();
m.m1();
m.m2();
m.m3();
variables.m4();