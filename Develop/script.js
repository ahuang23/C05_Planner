// Print today's date 
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

// Set variable to the start of each hour
var rightNow = moment().startOf("hour");

// Verify current time against time blocks
function checkTime(){
    // 9AM
    am9 = moment().startOf("day").add(9, "hours");
    if (rightNow.isAfter(am9)) {
        $(".tm9").addClass("past");
    } else if (rightNow.isSame(am9)) {
        $(".tm9").addClass("present");
    } else { $(".tm9").addClass("future");   
    }
    // 10AM
    am10 = moment().startOf("day").add(10, "hours");
    if (rightNow.isAfter(am10)) {
        $(".tm10").addClass("past");
    } else if (rightNow.isSame(am10)) {
        $(".tm10").addClass("present");
    } else { $(".tm10").addClass("future");   
    }
    // 11AM
    am11 = moment().startOf("day").add(11, "hours");
    if (rightNow.isAfter(am11)) {
        $(".tm11").addClass("past");
    } else if (rightNow.isSame(am11)) {
        $(".tm11").addClass("present");
    } else { $(".tm11").addClass("future");   
    }
    // 12PM
    pm12 = moment().startOf("day").add(12, "hours");
    if (rightNow.isAfter(pm12)) {
        $(".tm12").addClass("past");
    } else if (rightNow.isSame(pm12)) {
        $(".tm12").addClass("present");
    } else { $(".tm12").addClass("future");   
    }
    // 1PM
    pm1 = moment().startOf("day").add(13, "hours");
    if (rightNow.isAfter(pm1)) {
        $(".tm1").addClass("past");
    } else if (rightNow.isSame(pm1)) {
        $(".tm1").addClass("present");
    } else { $(".tm1").addClass("future");   
    }
    // 2PM
    pm2 = moment().startOf("day").add(14, "hours");
    if (rightNow.isAfter(pm2)) {
        $(".tm2").addClass("past");
    } else if (rightNow.isSame(pm2)) {
        $(".tm2").addClass("present");
    } else { $(".tm2").addClass("future");   
    }
    // 3PM
    pm3 = moment().startOf("day").add(15, "hours");
    if (rightNow.isAfter(pm3)) {
        $(".tm3").addClass("past");
    } else if (rightNow.isSame(pm3)) {
        $(".tm3").addClass("present");
    } else { $(".tm3").addClass("future");   
    }
    // 4PM
    pm4 = moment().startOf("day").add(16, "hours");
    if (rightNow.isAfter(pm4)) {
        $(".tm4").addClass("past");
    } else if (rightNow.isSame(pm4)) {
        $(".tm4").addClass("present");
    } else { $(".tm4").addClass("future");   
    }
    // 5PM
    pm5 = moment().startOf("day").add(17, "hours");
    if (rightNow.isAfter(pm5)) {
        $(".tm5").addClass("past");
    } else if (rightNow.isSame(pm5)) {
        $(".tm5").addClass("present");
    } else { $(".tm5").addClass("future");   
    }
}

checkTime();

// Saves values to local storage when saveBtn is pressed
var saveBtn = $('.saveBtn');
var userInput;
var InputParent;

saveBtn.click(function(e) {
    e.preventDefault();


    $(this).siblings().each(function() {
        if ($(this).hasClass("time-block")) {
            userInput = $(this).val();
            InputParent = $(this).parent().data("time");
            console.log(InputParent + "-" + userInput);
        }
    })
        localStorage.setItem(InputParent, userInput);
   
    }
)

// Returns stored values
var hours = [1,2,3,4,5,9,10,11,12];
for (var i = 0; i < hours.length; i++) {
    var dataHour = localStorage.getItem(hours[i]);
    $('.tm' + hours[i]).val(dataHour)



}