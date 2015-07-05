function hide_menu() {
    "use strict";
    var currentLocation = window.location;
    
    if ((currentLocation !== "http://davidbensoussan.olympe.in/EN/index.html") && (currentLocation !== "http://davidbensoussan.olympe.in/FR/index.html")) {
        document.getElementById("menu_button").style.display = "none";
        document.getElementById("download_button").style.display = "none";
    }
}

hide_menu();