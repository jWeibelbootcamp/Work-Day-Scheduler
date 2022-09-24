$(document).ready(function () {
    //Collects data from moment() and displays the curent day in the header. 
    var currentDay = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDay);
   
    //Collects current hour for coloring the timeblocks. 
    var currentHour = moment().hours();
    for (var i = 9; i < 18; i++) {
        //Colors timeblocks based on currentHour.
        var colorKey = "";
        if (i < currentHour) {
            colorKey = "past";
        } else if (i === currentHour) {
            colorKey = "present";
        } else {
            colorKey = "future";
        }
        
        //Assigns the correct 'am' or 'pm' suffix to the left timeblocks.
        var hourDisplay = "";
        if (i < 12) {
            hourDisplay = i + "am";
        } else if (i === 12) {
            hourDisplay = i + "pm";
        } else {
            hourDisplay = i - 12 + "pm";
        }

        //Create the rows. 
        var rowEl = $("<div>").addClass("row time-block").attr("id", i);
        
        //Create the hour, text, and save button elements for the rows. 
        var hourEl = $("<div>").addClass("col-2 hour").text(hourDisplay);
        var textAreaEl = $("<textarea>").addClass("col-8 description " + colorKey).val(localStorage.getItem(i));
        //Saves the hour and text entry to local storage on save button click.
        var button = $("<button>").addClass("col-2 saveBtn").attr("id", i).click(function () { 
            var hourKey = $(this).attr("id");
            var activity = $(this).siblings(".description").val();
            localStorage.setItem(hourKey, activity);
        });

        //Font Awesome save disk icon.
        var icon = $("<i>").addClass("fas fa-save");
        $(".container").append(rowEl.append(hourEl, textAreaEl, button.append(icon)));
    }
})
