var m = document.querySelectorAll(".drum").length;

for( var i=0; i<m; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHtml = this.innerHTML;
        drumKit(buttonInnerHtml);
        animation(buttonInnerHtml);
        });
}

document.addEventListener("keypress",function(event) {
    drumKit(event.key);
    animation(event.key);

});

function drumKit(key) {
    
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    
        default:
            console.log(this.innerHTML);
            break;
    }}
    function animation(currentbutton) {
        var animate = document.querySelector("." + currentbutton);
        animate.classList.add("pressed");
        setTimeout(function(){
            animate.classList.remove("pressed")
        }, .100);
    }