//Display the current day at the top of the planner: 
//Use moment.js 
$(document).ready(function () {
    var currentDay = moment().format("dddd, MMMM Do YYYY");
    console.log(currentDay);
    $("#currentDay").text(currentDay);
    var currentHour = moment().hours();
        console.log(currentHour);

    for (var i = 9; i < 18; i++) {
        var colorKey = "";
        if (i < currentHour) {
            colorKey = "past";
        } else if (i === currentHour) {
            colorKey = "present";
        } else {
            colorKey = "future";
        }
        
        var hourDisplay = "";

        if (i < 12) {
            hourDisplay = i + "am";
        } else if (i === 12) {
            hourDisplay = i + "pm";
        } else {
            hourDisplay = i-12 + "pm";
        }

        var rowEl = $("<div>").addClass("row time-block").attr("id", i);

        var hourEl = $("<div>").addClass("col-2 hour").text(hourDisplay);

        var textAreaEl = $("<textarea>").addClass("col-8 description " + colorKey).val(localStorage.getItem(i));

        var button = $("<button>").addClass("col-2 saveBtn").attr("id", i).click(function () {
            var hourKey = $(this).attr("id");
            var activity = $(this).siblings(".description").val();
            localStorage.setItem(hourKey, activity);
        });
        var icon = $("<i>").addClass("fas fa-save");
        $(".container").append(rowEl.append(hourEl, textAreaEl, button.append(icon)));
    }
})
