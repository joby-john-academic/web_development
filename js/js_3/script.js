document.addEventListener("DOMContentLoaded", function() {
    var mainContent = document.getElementById("mainContent");
    var imageTextContainer = document.getElementById("imageTextContainer");

    mainContent.addEventListener("mouseover", function() {
        imageTextContainer.style.display = "block";
    });

    mainContent.addEventListener("mouseout", function() {
        imageTextContainer.style.display = "none";
    });
});
