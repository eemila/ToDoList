document.addEventListener("DOMContentLoaded", function(){

//current date in header
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


// show modal pop-up form
var addTask = document.querySelector(".add-btn"); 

addTask.addEventListener("click", function(){
    $('#myModal').modal('show') 
    // $('#myModal').trigger('reset'); 
}); 


//reset does not work
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('reset')
  })

// adds new task to list
var listTab = document.querySelector(".tabBody"); 
var pinBtn = document.querySelector(".btn-modal");
var radio = document.querySelectorAll(".form-check-input");
var formTask = document.querySelector("#formTask"); 
var formPlace = document.querySelector("#formPlace"); 
var formTime = document.querySelector("#formTime"); 

pinBtn.addEventListener("click", function(){
    var td1 = document.createElement("td")
    td1.innerText = radio.value;
    var td2 = document.createElement("td")
    td1.innerText = formTask.value; 
    var td3 = document.createElement("td")
    td2.innerText = formPlace.value;
    var td4 = document.createElement("td")
    td3.innerText = formTime.value; 

    var newLine = document.createElement("tr")

    newLine.appendChild(td1);
    newLine.appendChild(td2); 
    newLine.appendChild(td3);

    listTab.appendChild(newLine); 
}); 




//closes DOM
}); 