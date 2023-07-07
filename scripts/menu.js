function handleMenu() {
    let menu = document.getElementById("menu");
    let maxHeight = menu.style.maxHeight;
    menu.style.maxHeight = !maxHeight ? "100%" : "";
}