// Use moment to add the date to the top of the page
const currentDate = moment().format("MM/DD/YY");
document.getElementById("currentDay").textContent = currentDate;

// Compare actual time to time of time block to set past present and future classes

// get current hour
function timeTracker() {
  let currentHour = moment().hour();

  // check time in time blocks
  $(".time-block").each(function () {
    let timeBlockHour = parseInt($(this).attr("id").split("-")[1]);
    console.log(timeBlockHour, currentHour);

    if (timeBlockHour < currentHour) {
      $(this).addClass("past");
    } else if (timeBlockHour === currentHour) {
      $(this).addClass("present");
      $(this).removeClass("past");
    } else {
      $(this).addClass("future");
      $(this).removeClass("present");
      $(this).removeClass("past");
    }
  });
}

timeTracker();

// add a event listener to save the contents of the text area to local storage
$(".saveBtn").on("click", function () {
  var key = $(this).parent().attr("id");

  var value = $(this).siblings("textarea").val();

  localStorage.setItem(key, value);
});

// load saved text area content from local storage
//get items for each time block
// $("#hour-9 textarea").val(localStorage.getItem("hour-9"));
// $("#hour-10 textarea").val(localStorage.getItem("hour-10"));
// $("#hour-11 textarea").val(localStorage.getItem("hour-11"));
// $("#hour-12 textarea").val(localStorage.getItem("hour-12"));
// $("#hour-13 textarea").val(localStorage.getItem("hour-13"));
// $("#hour-14 textarea").val(localStorage.getItem("hour-14"));
// $("#hour-15 textarea").val(localStorage.getItem("hour-15"));
// $("#hour-16 textarea").val(localStorage.getItem("hour-16"));
// $("#hour-17 textarea").val(localStorage.getItem("hour-17"));

for(let i = 9; i < 18; i++){
    $(`#hour-${i} textarea`).val(localStorage.getItem(`hour-${i}`));
} 