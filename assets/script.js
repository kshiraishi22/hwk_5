// Define variables

var nineAm = document.querySelector("#nineAm");
var tenAm = document.querySelector("#tenAm");
var elevenAm = document.querySelector("#elevenAm");
var twelvePm = document.querySelector("#twelvePm")
var onePm = document.querySelector("#onePm");
var twoPm = document.querySelector("#twoPm");
var threePm = document.querySelector("#threePm");
var fourPm = document.querySelector("#fourPm");
var fivePm = document.querySelector("#fivePm");

var form_9 = document.querySelector("#form_9");
var storeForm_9 = localStorage.getItem("storeForm_9");

// current time and date
$(document).ready(function() {
  var currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
  var displayCurrentTime = $(".time-date").text(currentTime);
  $(".time-date").css("text-align","center");

// create an EventListener for the save buttons
// link save button to local storage

$(".btn9").click(function() {
  console.log("this works!!!");
  localStorage.setItem("storeForm_9");
});

});


// Choose colors and color code the individual hrs (how to color the text area)

// Create a if/then statement for the past/present/future hours to determine color

// Align the text box where the hours are located 

// Comment out to make the code more readable (html/css/js)

// ReadMe file

// Bonus: have a live time display with seconds ticking at the top

