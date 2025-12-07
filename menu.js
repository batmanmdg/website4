document.getElementById("menuToggle").onclick = function() {
    let menu = document.getElementById("navMenu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
};
