let dropdownButton = document.querySelector(".dropdown-button");
let dropdownMenu = document.querySelector(".plans-dropdown");
let dropdownArrow = document.querySelector(".dropdown-arrow");
planOptions = dropdownMenu.children[0].children;

dropdownMenu.style.display = "none";
dropdownArrow.style.transform = "none";
dropdownButton.onclick = toggleDropdown;

for(i of planOptions) {
    i.addEventListener("click", function(event) {
        event.preventDefault;
        for(j of planOptions) {
            j.classList.contains("selected") && j.classList.remove("selected")
        }
        this.classList.add("selected");
        dropdownButton.firstChild.innerHTML = this.firstChild.innerHTML
        toggleDropdown();
    }, false);
}

remainingTime = 907200; // 10 days 12 hours
setInterval(function() {
    remainingTime -= 1;

},1000);

function displayTime(t) {
    const seconds = remainingTime;
    const d = Math.floor(seconds / 86400);
    const h = Math.floor(seconds % 86400 / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = Math.floor(seconds % 60);
    console.log(seconds - d*86400 -h*3600 -m*60)
}

function toggleDropdown() {
    dropdownMenu.style.display = (dropdownMenu.style.display === "none" ? "block" : "none");
    dropdownArrow.style.transform = (dropdownArrow.style.transform === "none" ? "rotate(180deg)" : "none");
}