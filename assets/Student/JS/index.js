// let __click = 0;

// function sideBar() {
//     if (__click == 0) {
//         document.getElementById("idsideBar").style.display = "none";
//         document.getElementById("id_mainArea").style.width = "100%";
//         document.getElementById("id_mainArea").style.left = "0";
//         __click = 1;
//     } else {
//         document.getElementById("idsideBar").style.display = "block";
//         document.getElementById("id_mainArea").style.width = "calc(100% - 250px)";
//         document.getElementById("id_mainArea").style.left = "250px";
//         __click = 0;
//     }
// }

// REF: https://www.w3schools.com/jquery/event_toggle.asp#:~:text=The%20toggle()%20method%20attaches,function%20fires%2C%20and%20so%20on.
// REF: https://www.tutorialrepublic.com/faq/how-to-create-jquery-slide-left-and-right-toggle-effect.php

/*
$("#id_mainArea").animate({
            left: "0px",
            width: "100%"
        }, { duration: 1000, queue: false }
*/

let count = 0;
$(document).ready(function () {
    $("#id_closeBtn").click(function () {
        count++;
        console.log(count);
        $("#idsideBar").animate({
            width: "toggle"
        }, { duration: 1000, queue: false });
        $('#id_mainArea').toggleClass('full-screen',2000);
    });
    // $("#id_closeBtn").click(function () {
    //     $('#idsideBar').toggle("slow", function () {
    //         console.log($('#id_closeBtn').attr('class'));
    //         if ($('#id_closeBtn').hasClass('fa-times')) {
    //             $('#id_closeBtn').removeClass('fa-times');
    //             $('#id_closeBtn').addClass('fa-bars');
    //         } else {
    //             $('#id_closeBtn').removeClass('fa-bars');
    //             $('#id_closeBtn').addClass('fa-times');
    //         }
    //     });
    // });
    for (var i = 0; i < 50; i++) {
        $("#id_subTable").find('tbody')
            .append($('<tr>')
                .append($('<td>')
                    .append(i)
                )
                .append($('<td>')
                    .append("Subject" + i)
                )
                .append($('<td>')
                    .append("Faculty" + i)
                )
                .append($('<td>')
                    .append("Complete" + i)
                )
            );
    }
});

/* chartjs Attendence Chart */
var ctx = document.getElementById('attChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Absent', 'Present', 'Leave'],
        datasets: [{
            label: 'Attendece',
            data: [6, 19, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 2
        }]
    },
    options: {
        duration: 50000,
    }
});
/* chartjs Attendence Chart */