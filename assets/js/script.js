// ______________________________________________________________
// ids for col #timeCol         #eventCol           #saveCol

// ids for rows #setTime        #eventInput         #clickButton
// classes for rows 

// ______________________________________________________________
var weekDayEl = moment().format("dddd");
var currentDayEl = moment().format("MMM Do, YYYY"); 
$("#currentDay").text("Today is " + weekDayEl + " " + currentDayEl+ ".");
var currentTimeEl = moment().format("hh:mm A");
$("#currentTime").text("The time is " + currentTimeEl);

var time = moment();


var setTimeEight = moment("8:00 AM", ["hh:mm A"]).format("hh:mm A");
$("#eightAm").text(setTimeEight);

var setTimeNine = moment("9:00 AM", ["hh:mm A"]).format("hh:mm A");
$("#nineAm").text(setTimeNine);

var setTimeTen = moment("10:00 AM", ["hh:mm A"]).format("hh:mm A");
$("#tenAm").text(setTimeTen);

var setTimeEleven = moment("11:00 AM", ["hh:mm A"]).format("hh:mm A");
$("#elevenAm").text(setTimeEleven);

var setTimeTwelve = moment("12:00 PM", ["hh:mm A"]).format("hh:mm A");
$("#twelvePm").text(setTimeTwelve);

var setTimeOne = moment("1:00 PM", ["hh:mm A"]).format("hh:mm A");
$("#onePm").text(setTimeOne);

var setTimeTwo = moment("2:00 PM", ["hh:mm A"]).format("hh:mm A");
$("#twoPm").text(setTimeTwo);

var setTimeThree = moment("3:00 PM", ["hh:mm A"]).format("hh:mm A");
$("#threePm").text(setTimeThree);

var setTimeFour = moment("4:00 PM", ["hh:mm A"]).format("hh:mm A");
$("#fourPm").text(setTimeFour);

var setTimeFive = moment("5:00 PM", ["hh:mm A"]).format("hh:mm A");
$("#fivePm").text(setTimeFive);

var setTimeSix = moment("6:00 PM", ["hh:mm A"]).format("hh:mm A");
$("#sixPm").text(setTimeSix);


// ------------------buttons and text entry---------------------
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

 // --------------if statements for color coded for past, present or future---------------


var currentTime = moment().format("hh:mm A")
var timeColor = document.querySelector(".form-control.eightColor")
function eightBoxColor() {
    if (currentTime > setTimeEight) {
        $(timeColor).addClass("past");
    }
    else if (currentTime === setTimeEight) {
        $(timeColor).addClass("present");
    }
    else (currentTime < setTimeEight);{
        $(timeColor).addClass("future");
    }
}; 
eightBoxColor()

console.log(currentTimeEl)
console.log(timeColor)
console.log(setTimeEight)


