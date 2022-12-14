$(()=>{
    $("#start").click(function(){
        $("#status").text("Game Started!");
        $(".example").text("In progress..");
    });
    
    $(".boundary").mouseenter(function(){
        if( $("#status").text().indexOf("Started!") > 0){
            $("#status").text("You lost! Click S to start again.");
            alert("You Lost!");
        }
    });

    $("#end").mouseenter(function(){
        if( $("#status").text().indexOf("Started!") > 0){
            $("#status").text("You won! Click S to start again.");
            $(".example").text("Ended!");
            alert("Congratulations. You Won!");
           
        }
    });

    $("#maze").mouseleave(function(){
        if($("#status").text().indexOf("Started!") > 0){
            $("#status").text("You lost! Click S to start again.");
            alert("You Lost!");
        }
    });
});
 