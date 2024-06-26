var icon = document.getElementById("icon");

//Dark/Light mode implementation
icon.onclick = function() {
    document.body.classList.toggle("light__theme");
    if(document.body.classList.contains("light__theme")) {
        icon.src = "images/moon.png";
    }
    else {
        icon.src = "images/sun.png";
    }
}