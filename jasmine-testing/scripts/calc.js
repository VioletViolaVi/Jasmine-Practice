// Calculator = function(){
//     this.value = 0;
// };

// Calculator.prototype.add = function(number){
//     if(typeof(number) === "number"){
//         this.value += number;
//     }else{
//         alert("Error!");
//     }
// }



Calculating = function(){
    this.value = 0;
};

function whatCanIDrink(age){
    if(age<0){
        return "Sorry. I can’t tell what drink because that age is incorrect!"
    }
    else if(age>=0 && age<14){
        return "Drink Toddy";
    }
    else if(age>=14 && age<18){
        return "Drink Coke";
    }
    else if(age>=18 && age<21){
        return "Drink Beer";
    }
    else if(age>=21 && age<130){
        return "Drink Whisky";
    }else{
        return "Sorry. I can’t tell what drink because that age is incorrect!";
    }
};