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
$(document).ready(function () {
    $("#id_closeBtn").click(function () {
        $('#idsideBar').toggle("slow", function () {
            console.log($('#id_closeBtn').attr('class'));
            if ($('#id_closeBtn').hasClass('fa-times')) {
                $('#id_closeBtn').removeClass('fa-times');
                $('#id_closeBtn').addClass('fa-bars');
            } else {
                $('#id_closeBtn').removeClass('fa-bars');
                $('#id_closeBtn').addClass('fa-times');
            }
        });
    });
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