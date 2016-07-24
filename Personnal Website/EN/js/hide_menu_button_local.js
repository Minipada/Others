function hide_menu() {
    var currentLocation = window.location;
    
    if ((currentLocation != "https://davidbensoussan.me/EN/index.html") && (currentLocation != "https://davidbensoussan.me/FR/index.html")) {
        document.getElementById("menu_button").style.display = "none";
        document.getElementById("download_button").style.display = "none";
    }
    else {
        document.getElementById("menu_button").style.display = "inline";
        document.getElementById("download_button").style.display = "inline";
    }
}

hide_menu();