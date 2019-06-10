document.addEventListener("DOMContentLoaded", function(){

const addTask = document.querySelector(".add-btn");
const listTab = document.querySelector(".tabBody");
const pinBtn = document.querySelector(".btn-modal");
// const radioType = document.querySelectorAll(".form-check-input");
const formTask = document.querySelector("#formTask");
const formPlace = document.querySelector("#formPlace");
const formTime = document.querySelector("#formTime");
const alertMess = document.querySelector(".alert-message"); 
// const checkBtn = document.querySelector(".check-btn"); 
// const delBtn = document.querySelector(".del-btn");
const businessIcon = document.querySelector(".fa-briefcase");
const personalIcon = document.querySelector(".fa-home"); 
const personNo = document.querySelector("#personal-no"); 
const bussNo = document.querySelector("#business-no"); 
var counterPer = 0;
var counterBus = 0; 


//displays current date in header
const todayIs = document.querySelector(".current-date")
const monthNames =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function showDate(){
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
       
    return  "Today is " + day + "  " + monthNames[month] + "  " + year;
};

todayIs.innerText = showDate();


// shows modal pop-up form
addTask.addEventListener("click", function(){
    $('#myModal').modal('show') 
    
}); 


// adds new task to list
pinBtn.addEventListener("click", function(evn){
    evn.preventDefault();

    if (!formTask.value && !formPlace.value || !formTask.value && !formTime.value) {
        alertMess.classList.remove("hidden"); 
        
    } 
    else {
        var newLine = document.createElement("tr");
        newLine.innerHTML = 
            `<td>
                <span class="list-icon suitcase-icon" id="suitcase"><i class="fas fa-briefcase fa-2x"></i></span>
                <span class="list-icon home-icon" id="home"><i class="fas list-icon fa-home fa-2x"></i></span>
            </td>
            <td>${formTask.value}</td>
            <td>${formPlace.value}</td>
            <td>${formTime.value}</td>
            <td>
                <button class="check-btn list-btn" id="check"><i class="far fa-calendar-check fa-lg"></i></button>
                <button class="del-btn list-btn" id="delete"><i class="far fa-calendar-times fa-lg"></i></button>
            </td>`;

        listTab.appendChild(newLine);


        //functions for list buttons - delete
        newLine.querySelector('.del-btn').addEventListener('click', () => {
            newLine.parentElement.removeChild(newLine); 
        });

        //functions for list buttons - check & uncheck
        newLine.querySelector('.check-btn').addEventListener('click', () => {
            newLine.style.textDecoration = "line-through";
            newLine.style.color = "green"; 
        });

        newLine.querySelector('.check-btn').addEventListener('dblclick', () => {
            newLine.style.textDecoration = "none";
            newLine.style.color = "black";  
        });
    
        // form reset & modal hide
        formTask.value = "";
        formPlace.value = "";
        formTime.value = "";
        alertMess.classList.add("hidden"); //czy potrzebne?
        $('#myModal').modal('hide');

        
        //counter for tasks - personal/business
        if (document.querySelector("#personalRadio").checked){ 
            counterPer += 1; 
            personNo.innerText = counterPer; newLine.querySelector("#suitcase").style.display = "none";
        } if (document.querySelector("#businessRadio").checked){
            // newLine.querySelector("#home").style.display = "none"; 
            counterBus += 1; 
            bussNo.innerText = counterBus;
        };
          
        //proper icon selection
        if (document.querySelector("#businessRadio").checked) {
            newLine.querySelector("#home").style.display = "none";      
        } else { 
            newLine.querySelector("#suitcase").classList.add("hidden"); 
        }; 

    }
});





//closes DOM
}); 



//notes

//proper icon selection
//     } if (document.querySelector("#businessRadio").checked) {
//     const motylanoga = "#home"; 
//         motylanoga.classList.add("hidden");
//     };




