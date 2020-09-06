let __click = 0;
function sideBar() {
    if (__click == 0) {
        document.getElementById("idsideBar").style.display = "none";
        document.getElementById("id_mainArea").style.width = "100%";
        document.getElementById("id_mainArea").style.left = "0";
        __click = 1;
    } else {
        document.getElementById("idsideBar").style.display = "block";
        document.getElementById("id_mainArea").style.width = "calc(100% - 250px)";
        document.getElementById("id_mainArea").style.left = "250px";
        __click = 0;
    }
}