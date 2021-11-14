//----------------- variable declarations ----------------
var weekDayEl = moment().format("dddd");
var currentDayEl = moment().format("dddd MMM Do, YYYY"); 
var time = moment();
var currentTimeEl = moment().format("h:mm A");
var currentTime = moment().format("HH:mm")

var setTimeEight = moment("08:00", ["HH:mm"]).format("HH:mm");
var setTimeNine = moment("09:00", ["HH:mm"]).format("HH:mm");
var setTimeTen = moment("10:00", ["HH:mm"]).format("HH:mm");
var setTimeEleven = moment("11:00", ["HH:mm"]).format("HH:mm");
var setTimeTwelve = moment("12:00", ["HH:mm"]).format("HH:mm");
var setTimeOne = moment("13:00", ["HH:mm"]).format("HH:mm");
var setTimeTwo = moment("14:00", ["HH:mm"]).format("HH:mm");
var setTimeThree = moment("15:00", ["HH:mm"]).format("HH:mm");
var setTimeFour = moment("16:00", ["HH:mm"]).format("HH:mm");
var setTimeFive = moment("17:00", ["HH:mm"]).format("HH:mm");
var setTimeSix = moment("18:00", ["HH:mm"]).format("HH:mm");


// -----------------set time and date for header-------------
$("#currentDay").text("Today is " + currentDayEl+ ".");
$("#currentTime").text("The time is " + currentTimeEl);

// ------------------ buttons and local storage  ---------------------
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


var etimeColor = document.querySelector(".form-control.eightColor")
function eightBoxColor() {
    if (currentTime > setTimeEight) {
        $(etimeColor).addClass("past");
    }
    else if (currentTime === setTimeEight) {
        $(etimeColor).addClass("present");
    }
    else (currentTime < setTimeEight);{
        $(etimeColor).addClass("future");
    }
}; 
eightBoxColor()

var ntimeColor = document.querySelector(".form-control.nineColor")
function nineBoxColor() {
    if (currentTime > setTimeNine) {
        $(ntimeColor).addClass("past");
    }
    else if (currentTime === setTimeNine) {
        $(ntimeColor).addClass("present");
    }
    else (currentTime < setTimeNine);{
        $(ntimeColor).addClass("future");
    }
}; 
nineBoxColor()

var ttimeColor = document.querySelector(".form-control.tenColor")
function tenBoxColor() {
    if (currentTime > setTimeNine) {
        $(ttimeColor).addClass("past");
    }
    else if (currentTime === setTimeTen) {
        $(ttimeColor).addClass("present");
    }
    else (currentTime < setTimeTen);{
        $(ttimeColor).addClass("future");
    }
}; 
tenBoxColor()

var eLtimeColor = document.querySelector(".form-control.elevenColor")
function elevenBoxColor() {
    if (currentTime > setTimeEleven) {
        $(eLtimeColor).addClass("past");
    }
    else if (currentTime === setTimeEleven) {
        $(eLtimeColor).addClass("present");
    }
    else (currentTime < setTimeEleven);{
        $(eLtimeColor).addClass("future");
    }
}; 
elevenBoxColor()

var tWtimeColor = document.querySelector(".form-control.twelveColor")
function twelveBoxColor() {
    if (currentTime > setTimeTwelve) {
        $(tWtimeColor).addClass("past");
    }
    else if (currentTime === setTimeTwelve) {
        $(tWtimeColor).addClass("present");
    }
    else (currentTime < setTimeTwelve);{
        $(tWtimeColor).addClass("future");
    }
}; 
twelveBoxColor()

var otimeColor = document.querySelector(".form-control.oneColor")
function oneBoxColor() {
    if (currentTime > setTimeOne) {
        $(otimeColor).addClass("past");
    }
    else if (currentTime === setTimeOne) {
        $(otimeColor).addClass("present");
    }
    else (currentTime < setTimeOne);{
        $(otimeColor).addClass("future");
    }
}; 
oneBoxColor()

var wOtimeColor = document.querySelector(".form-control.twoColor")
function twoBoxColor() {
    if (currentTime > setTimeTwo) {
        $(wOtimeColor).addClass("past");
    }
    else if (currentTime === setTimeTwo) {
        $(wOtimeColor).addClass("present");
    }
    else (currentTime < setTimeTwo);{
        $(wOtimeColor).addClass("future");
    }
}; 
twoBoxColor()

var tHtimeColor = document.querySelector(".form-control.threeColor")
function threeBoxColor() {
    if (currentTime > setTimeThree) {
        $(tHtimeColor).addClass("past");
    }
    else if (currentTime === setTimeThree) {
        $(tHtimeColor).addClass("present");
    }
    else (currentTime < setTimeThree);{
        $(tHtimeColor).addClass("future");
    }
}; 
threeBoxColor()

var ftimeColor = document.querySelector(".form-control.fourColor")
function fourBoxColor() {
    if (currentTime > setTimeFour) {
        $(ftimeColor).addClass("past");
    }
    else if (currentTime === setTimeFour) {
        $(ftimeColor).addClass("present");
    }
    else (currentTime < setTimeFour);{
        $(ftimeColor).addClass("future");
    }
}; 
fourBoxColor()

var vtimeColor = document.querySelector(".form-control.fiveColor")
function fiveBoxColor() {
    if (currentTime > setTimeFive) {
        $(vtimeColor).addClass("past");
    }
    else if (currentTime === setTimeFive) {
        $(vtimeColor).addClass("present");
    }
    else (currentTime < setTimeFive);{
        $(vtimeColor).addClass("future");
    }
}; 
fiveBoxColor()

var stimeColor = document.querySelector(".form-control.sixColor")
function sixBoxColor() {
    if (currentTime > setTimeSix) {
        $(stimeColor).addClass("past");
    }
    else if (currentTime === setTimeSix) {
        $(stimeColor).addClass("present");
    }
    else (currentTime < setTimeSix);{
        $(stimeColor).addClass("future");
    }
}; 
sixBoxColor()


// console.log for Current Time
console.log(currentTime)

// console.log for times set

console.log(setTimeEight)
console.log(setTimeNine)
console.log(setTimeTen)
console.log(setTimeEleven)
console.log(setTimeTwelve)
console.log(setTimeOne)
console.log(setTimeTwo)
console.log(setTimeThree)
console.log(setTimeFour)
console.log(setTimeFive)
console.log(setTimeSix)

// query selectors to apply past, present, future class
// console.log(etimeColor)
// console.log(ntimeColor)
// console.log(ttimeColor)
// console.log(eLtimeColor)
// console.log(tWtimeColor)
// console.log(otimeColor)
// console.log(wOtimeColor)
// console.log(tHtimeColor)
// console.log(ftimeColor)
// console.log(stimeColor)


