// 1:

const user = {};

user.name = "Yaroslav";
user.surname = "Stepovyi";

console.log(user);

user.name = "jerry";

console.log(user);


delete user.name ;

console.log("user: ", user);

//2:
//calculates sum of people of obj. in salaries;
//if people in salaries = 0 , then print 0;

const salaries = {
    Vlad: 100,
    Alina:130,
    Roman: 110,
    Alex: 120,
    };

const calculateSalary = (wage) => {

    if (wage != 0){

        var keys = Object.keys(wage);
        var sumSalary = 0;
        for (let i = 0; i < keys.length; i++) {
            var sumSalary = sumSalary + wage[keys[i]];
        }

        console.log("sum = ", sumSalary);
        
    }else {
        console.log(0);
    }
}

calculateSalary(salaries);

//3:
//reads 2 numbers, calculate: sum, multiplication, dividing;

let calculator = {

    read() {
        this.number1 = +prompt('Enter first number');
        this.number2 = +prompt('Enter second number');
    },

    sum () {
        return this.number1 + this.number2;
    },

    mul () {
        return this.number1 * this.number2;
    },

    div () {
        if (this.number1 != 0){
            return this.number1 / this.number2;
        }else{
            return this.number2 / this.number1;
        }
        
    },
  };


  calculator.read();
  
  alert(calculator.sum() );
  
  alert(calculator.mul() );
  
  alert(calculator.div() );
    

