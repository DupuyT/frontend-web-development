function Button(){
    var choice = document.querySelector('input[name="color"]:checked').value;
    var f = document.getElementById("settings");
    f.style.backgroundColor = choice;

}