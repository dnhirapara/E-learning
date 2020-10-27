"use strict";

// REF: https://www.w3schools.com/jquery/event_toggle.asp#:~:text=The%20toggle()%20method%20attaches,function%20fires%2C%20and%20so%20on.
// REF: https://www.tutorialrepublic.com/faq/how-to-create-jquery-slide-left-and-right-toggle-effect.php
var count = 0;
$(document).ready(function () {
  $("#id_closeBtn").click(function () {
    $(this).toggleClass('fa-bars fa-times');
    $('#id_sideBar').toggleClass('hide-side-bar');
    $('#id_mainArea').toggleClass('full-screen');
  });

  for (var i = 0; i < 30; i++) {
    $("#id_subTable").find('tbody').append($('<tr>').append($('<td>').append(i)).append($('<td>').append("Subject" + i)).append($('<td>').append("Faculty" + i)).append($('<td>').append("Complete" + i)));
  }
});
/* chartjs Attendence Chart */
// var ctx = document.getElementById('attChart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: ['Absent', 'Present', 'Leave'],
//         datasets: [{
//             label: 'Attendece',
//             data: [6, 19, 2],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//             ],
//             borderWidth: 2
//         }]
//     },
//     options: {
//         duration: 1000,
//     }
// });

/* chartjs Attendence Chart */