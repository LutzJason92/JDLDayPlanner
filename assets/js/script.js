// ______________________________________________________________
// ids for col #timeCol         #eventCol           #saveCol

// ids for rows #setTime        #eventInput         #clickButton
// classes for rows 

// ______________________________________________________________
var weekDayEl = moment().format("dddd");
var currentDayEl = moment().format("MMM Do, YYYY"); 
$("#currentDay").text("Today is " + weekDayEl + " " + currentDayEl+ ".");
var currentTimeEl = moment().format("h:mm A");
$("#currentTime").text("The time is " + currentTimeEl);

// 
var setTimeEL = moment("8:00 AM", ["h:mm A"]).format("h:mm A");
$("#eightAm").text(setTimeEL);

var setTimeEL = moment("9:00 AM", ["h:mm A"]).format("h:mm A");
$("#nineAm").text(setTimeEL);

var setTimeEL = moment("10:00 AM", ["h:mm A"]).format("h:mm A");
$("#tenAm").text(setTimeEL);

var setTimeEL = moment("11:00 AM", ["h:mm A"]).format("h:mm A");
$("#elevenAm").text(setTimeEL);

var setTimeEL = moment("12:00 PM", ["h:mm A"]).format("h:mm A");
$("#twelvePm").text(setTimeEL);

var setTimeEL = moment("1:00 PM", ["h:mm A"]).format("h:mm A");
$("#onePm").text(setTimeEL);

var setTimeEL = moment("2:00 PM", ["h:mm A"]).format("h:mm A");
$("#twoPm").text(setTimeEL);

var setTimeEL = moment("3:00 PM", ["h:mm A"]).format("h:mm A");
$("#threePm").text(setTimeEL);

var setTimeEL = moment("4:00 PM", ["h:mm A"]).format("h:mm A");
$("#fourPm").text(setTimeEL);

var setTimeEL = moment("5:00 PM", ["h:mm A"]).format("h:mm A");
$("#fivePm").text(setTimeEL);

var setTimeEL = moment("6:00 PM", ["h:mm A"]).format("h:mm A");
$("#sixPm").text(setTimeEL);



// buttons and text entry
$("#eightBtn").on("click", function() {
    var textEntry = $("#eightText").val();
    localStorage.setItem("8:00AM", textEntry)
})
$("#eightText").val(localStorage.getItem("8:00AM"));

$("#nineBtn").on("click", function() {
    var textEntry = $("#nineText").val();
    localStorage.setItem("9:00AM", textEntry)
})
$("#nineText").val(localStorage.getItem("9:00AM"));

$("#tenBtn").on("click", function() {
    var textEntry = $("#tenText").val();
    localStorage.setItem("10:00AM", textEntry)
})
$("#tenText").val(localStorage.getItem("10:00AM"));

$("#elevenBtn").on("click", function() {
    var textEntry = $("#elevenText").val();
    localStorage.setItem("11:00AM", textEntry)
})
$("#elevenText").val(localStorage.getItem("11:00AM"));

$("#twelveBtn").on("click", function() {
    var textEntry = $("#twelveText").val();
    localStorage.setItem("12:00PM", textEntry)
})
$("#twelveText").val(localStorage.getItem("12:00PM"));

$("#oneBtn").on("click", function() {
    var textEntry = $("#oneText").val();
    localStorage.setItem("1:00PM", textEntry)
})
$("#oneText").val(localStorage.getItem("1:00PM"));

$("#twoBtn").on("click", function() {
    var textEntry = $("#twoText").val();
    localStorage.setItem("2:00PM", textEntry)
})
$("#twoText").val(localStorage.getItem("2:00PM"));

$("#threeBtn").on("click", function() {
    var textEntry = $("#threeText").val();
    localStorage.setItem("3:00PM", textEntry)
})
$("#threeText").val(localStorage.getItem("3:00PM"));

$("#fourBtn").on("click", function() {
    var textEntry = $("#fourText").val();
    localStorage.setItem("4:00PM", textEntry)
})
$("#fourText").val(localStorage.getItem("4:00PM"));

$("#fiveBtn").on("click", function() {
    var textEntry = $("#fiveText").val();
    localStorage.setItem("5:00PM", textEntry)
})
$("#fiveText").val(localStorage.getItem("5:00PM"));

$("#sixBtn").on("click", function() {
    var textEntry = $("#sixText").val();
    localStorage.setItem("6:00PM", textEntry)
})
$("#sixText").val(localStorage.getItem("6:00PM"));

 //if statements for color coded for past, present or future

// if moment current is <= mometn set past          light grey
// if moment current is === mometn set present      light blue
// if moment current is >= mometn set future        light green

var timeOfDay = [ "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM" ]

var timeColor = document.querySelectorAll(".form-control")

function textBoxColor() {
    if (timeOfDay < moment("8:00 AM", ["h:mm A"]).format("h:mm A") ) {
        $(timeColor).addClass("past");
    }
    else if (timeOfDay === moment("8:00 AM", ["h:mm A"]).format("h:mm A")) {
        $(timeColor).addClass("present");
    }
    else (timeOfDay > moment("8:00 AM", ["h:mm A"]).format("h:mm A"));{
        $(timeColor).addClass("future");
    }
}


textBoxColor()
console.log(timeOfDay)
console.log(timeColor)
console.log(currentTimeEl)

