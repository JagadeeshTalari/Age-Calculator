const container = document.querySelector(".container");
const error = document.querySelector(".error"); 

let dob = document.querySelector("#dob");
let ansYears = document.querySelector("#years");
let ansMonths = document.querySelector("#months");
let ansDays = document.querySelector("#days");
let userDob;
let userYear;
let userMonth;
let userDay;
let today = new Date();
let presentYear = today.getFullYear();
let presentMonth = today.getMonth()+1;
let presentDay = today.getDate();
getAge();

function getAge(){

    dob.addEventListener( 'input', () => {
        userDob = new Date(dob.value);
        userYear = userDob.getFullYear();
        userMonth = userDob.getMonth()+1;
        userDay = userDob.getDate();
        if (userDob <= today){
            calcAge();
        }
        else{
            // container.innerHTML = " ";
            document.querySelector(".desc").style.display = "none";
            document.querySelector(".age").style.display = "none";
            error.style.display = "block";
        }
        
    });
    
}

function calcAge(){ 
    
    if((presentDay - userDay)<0){
        presentMonth--;
        ansDays.innerHTML = presentDay - userDay + 30;
    }
    else{
        ansDays.innerHTML = presentDay - userDay;
    }

    if((presentMonth - userMonth)<0){
        presentYear--;
        ansMonths.innerHTML = presentMonth - userMonth+12;
    }
    else{
        ansMonths.innerHTML = presentMonth - userMonth;
    }
    

    ansYears.innerHTML = presentYear - userYear;
    
    
    
}

function displayAge(){
    
    
}

