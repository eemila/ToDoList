document.addEventListener("DOMContentLoaded", function(){

const addTask = document.querySelector(".add-btn");
const listTab = document.querySelector(".tabBody");
const pinBtn = document.querySelector(".btn-modal");
// const radioType = document.querySelectorAll(".form-check-input");
const formTask = document.querySelector("#formTask");
const formPlace = document.querySelector("#formPlace");
const formTime = document.querySelector("#formTime");
const alertMess = document.querySelector(".alert-message"); 
const checkBtn = document.querySelector(".check-btn"); 
const delBtn = document.querySelector(".del-btn");
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
        let radType = null;

        if (document.querySelector("#personalRadio").checked) {
            radType = personalIcon; 
            // document.querySelector("#personalRadio").value;
        } else {
            radType = businessIcon; 
            // document.querySelector("#businessRadio").value;
        };

        var newLine = document.createElement("tr");
        newLine.innerHTML = 
            // `<td>${radType}</td>
            `<td>
                <span class="list-icon suitcase-icon" id="suitcase"><i class="fas fa-briefcase fa-2x"></i></span>
                <span class="list-icon home-icon id="home"><i class="fas list-icon fa-home fa-2x"></i></span>
            </td>
            <td>${formTask.value}</td>
            <td>${formPlace.value}</td>
            <td>${formTime.value}</td>
            <td>
                <button class="check-btn list-btn" id="check"><i class="far fa-calendar-check fa-lg"></i></button>
                <button class="del-btn list-btn" id="delete"><i class="far fa-calendar-times fa-lg"></i></button>
            </td>`;

        listTab.appendChild(newLine);

        formTask.value = "";
        formPlace.value = "";
        formTime.value = "";
        alertMess.classList.add("hidden"); //czy potrzebne?
        $('#myModal').modal('hide');

        //counter for tasks - personal/business
        if (document.querySelector("#personalRadio").checked){ 
            counterPer += 1; 
            personNo.innerText = counterPer; 
        } if (document.querySelector("#businessRadio").checked){ 
            counterBus += 1; 
            bussNo.innerText = counterBus;
        };
          
    }
});


//functions for list buttons - check & delete
// checkBtn.addEventListener("click", function(){
//     alert("ługabuga"); 
// });


// delBtn.addEventListener("click", function(){
//     //ma usuwać linię
// });



//closes DOM
}); 



//notes

//usuwanie linii po kliku na btn x w wierszu - NIE DZIAŁA
// $("body").on("click", "#delete", function(){
//     const self = $(this); 
//     self.addEventListener("click", function(){
//         this.parent.parent.parent.classList.add("hidden"); 
//     })
// })


//przekreślenie tekstu po kliku na checked w wierszu - NIE DZIAŁA
// $("body").on("click", "#check", function() {
//     const self = $(this);
            // this.parent.parent.parent.style.textDecoration = "line-through";
// }); 


// ustawienie odpowiedniej ikony do zadania
    // if (document.querySelector("#personalRadio").checked) {
    //     const kurdemol = "#suitcase"; 
    //         kurdemol.classList.add("hidden");

    // } if (document.querySelector("#businessRadio").checked) {
    //     const motylanoga = "#home"; 
    //         motylanoga.classList.add("hidden");
    // };
  
