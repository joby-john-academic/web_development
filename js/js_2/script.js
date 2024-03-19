document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("changeColorButton");
    
    button.addEventListener("click", function() {
        var colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff"];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        document.body.style.backgroundColor = randomColor;
    });
});
