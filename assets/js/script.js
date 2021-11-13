// ______________________________________________________________
// ids for col #timeCol         #eventCol           #saveCol

// ids for rows #setTime        #eventInput         #clickButton
// classes for rows 

// ______________________________________________________________

var currentDayEl = moment().format("MMM Do, YYYY"); 
$("#currentDay").text("Today is " + currentDayEl);
console.log(currentDayEl);

var setTimeEL = moment("8:00 AM", ["h:mm A"]).format("hh:mm A");
$("#eightAm").text(setTimeEL);

var setTimeEL = moment("9:00 AM", ["h:mm A"]).format("hh:mm A");
$("#nineAm").text(setTimeEL);

var setTimeEL = moment("10:00 AM", ["h:mm A"]).format("hh:mm A");
$("#tenAm").text(setTimeEL);

var setTimeEL = moment("11:00 AM", ["h:mm A"]).format("hh:mm A");
$("#elevenAm").text(setTimeEL);

var setTimeEL = moment("12:00 PM", ["h:mm A"]).format("hh:mm A");
$("#twelvePm").text(setTimeEL);

var setTimeEL = moment("1:00 PM", ["h:mm A"]).format("hh:mm A");
$("#onePm").text(setTimeEL);

var setTimeEL = moment("2:00 PM", ["h:mm A"]).format("hh:mm A");
$("#twoPm").text(setTimeEL);

var setTimeEL = moment("3:00 PM", ["h:mm A"]).format("hh:mm A");
$("#threePm").text(setTimeEL);

var setTimeEL = moment("4:00 PM", ["h:mm A"]).format("hh:mm A");
$("#fourPm").text(setTimeEL);

var setTimeEL = moment("5:00 PM", ["h:mm A"]).format("hh:mm A");
$("#fivePm").text(setTimeEL);

var setTimeEL = moment("6:00 PM", ["h:mm A"]).format("hh:mm A");
$("#sixPm").text(setTimeEL);

var foo = {unique_prop: 1}, bar = {unique_prop: 2}, object = {};
object[foo] = 'value'
console.log(object[bar])



 //color coded for past, present or future

// if moment current is =< mometn set past color light grey


// if moment current is =< mometn set present   light blue
// if moment current is =< mometn set future    light green

 // click event on time block to enter an event

 // click save button for that timeblock

 // text is stored in local storage

 // refresh page items persist

// bootstrap

// list elements

// nav bar

// jquery
