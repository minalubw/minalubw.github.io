$(()=>{
    $("#btn").click(btnClicked);

    function btnClicked(){
        $.get("/8ball")
            .done(changeValue);
    }

    function changeValue(value){
        $("#question").val(value);
        $("#question").focus();
    }
});