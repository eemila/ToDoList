document.addEventListener("DOMContentLoaded", function(){

//displays current date in header
var todayIs = document.querySelector(".current-date")
var monthNames =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function showDate(){
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
       
    return  "Today is " + day + "  " + monthNames[month] + "  " + year;
};

todayIs.innerText = showDate()


// shows modal pop-up form
var addTask = document.querySelector(".add-btn"); 

addTask.addEventListener("click", function(){
    $('#myModal').modal('show') 
    
}); 


// adds new task to list
var listTab = document.querySelector(".tabBody"); 
var pinBtn = document.querySelector(".btn-modal");
var radioType = document.querySelectorAll(".form-check-input");
var formTask = document.querySelector("#formTask"); 
var formPlace = document.querySelector("#formPlace"); 
var formTime = document.querySelector("#formTime"); 

 
pinBtn.addEventListener("click", function(event){

    radioType.forEach(function(){
        if(document.querySelector("#personalRadio").checked) { 
            radType = document.querySelector("#personalRadio").value;
        } 
        if(document.querySelector("#businessRadio").checked) {
            radType = document.querySelector("#businessRadio").value;
        }; 
    })
    
    var td1 = document.createElement("td")
    td1.innerText = radType;
    var td2 = document.createElement("td")
    td2.innerText = formTask.value; 
    var td3 = document.createElement("td")
    td3.innerText = formPlace.value;
    var td4 = document.createElement("td")
    td4.innerText = formTime.value; 
    var td5 = document.createElement("td")
    // td5.innerText =  
    
    var newLine = document.createElement("tr")

    newLine.appendChild(td1);
    newLine.appendChild(td2); 
    newLine.appendChild(td3);
    newLine.appendChild(td4);
    newLine.appendChild(td5);

    listTab.appendChild(newLine);

    $(':input').val('');

    // if empty inputs NIE DZIAŁA PÓKI CO 
    if(formTask === "")&&(formPlace === "")||(formTask === "")&&(formTime === ""){
        console.log("Type your task before having it pinned");
    }

    event.preventDefault();
}); 


//closes DOM
}); 
