$(document).ready(function(){
    $("div#start").click(function() {
        console.log("crazy shit");
        gameStart();
    });

    function gameStart() {
        console.log("shit started");
        $("div.boundary").mouseover(function() {
            $("#status").text("You lose");
            $("div.boundary").css("background-color", "red");
        })
    }
});
