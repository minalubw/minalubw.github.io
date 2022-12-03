window.onload = function() {
    "use strict";
    var current = null;
    var changeSpeed = 250;
    var frame = 0;
    var size = document.getElementById("fontsize").value;

    document.getElementById("start").onclick = function() {
        toggleButton();
        current = setInterval(display, changeSpeed);
    };

    document.getElementById("stop").onclick = function() {
        if(current){
            clearInterval(current);
            current = null;
        } 
        display("notransition");
        toggleButton();
    };

    document.getElementById("animation").onchange = function() {
        frame = 0;
        display("notransition");
    };

    document.getElementById("fontsize").onchange = function() {
        size = document.getElementById("fontsize").value;
        document.getElementById("text-area").className = size;
        resetInterval();
    };

    document.getElementById("turbo").onchange = function() {
        speed = document.getElementById("turbo").checked ? 50 : 250;
        resetInterval();
    };

    function toggleButton(){
        document.getElementById("start").disabled = !document.getElementById("start").disabled;
        document.getElementById("stop").disabled = !document.getElementById("stop").disabled;
        document.getElementById("animation").disabled = !document.getElementById("animation").disabled;
    }

    function display(state) {
        let txtarea = document.getElementById("text-area");
        
        if(state === "notransition"){
            txtarea.value = ANIMATIONS[document.getElementById("animation").value];
        } else {
            const animationSections = ANIMATIONS[document.getElementById("animation").value].split("=====");

            if(animationSections.length === frame){
                frame = 0;
            }
    
            txtarea.value = animationSections[frame];
        }
        frame++;
    }

    function resetInterval(){
        if(current){
            clearInterval(current);
            current = setInterval(display, changeSpeed);
        }
    }
};