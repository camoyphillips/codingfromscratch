
function accordion_toggle(section) {
    console.log("open");
    console.log(section); // Remove quotes around "section" to properly log the variable value

    var selectedSection = document.getElementById(section);

    if (selectedSection.style.display === "block") {
        selectedSection.style.display = "none";
    } else {
        
    var allSections = document.getElementsByClassName("accordion-section");

    for (var i = 0; i < allSections.length; i++) {
            allSections[i].style.display = "none";
        }

        selectedSection.style.display = "block";
    }

}