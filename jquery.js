var playing=false;
var score;
var trialsleft;
var step;
var action;
var fruits=['apple','banana','cherry','grapes','orange','pineapple'];
$(function(){
$("#startreset").click(function(){
    if(playing==true){
        location.reload();
    }
    else{
        $("#gameover").hide();
        playing=true;
        score=0;
        $("#scorevalue").html(score);
        $("#trialsleft").show();
        trialsleft=3;
        addhearts();
        $("#startreset").html("Reset Game");
        startaction();


    }   
});

$("#fruit1").mouseover(function(){
    score++;
    $("#scorevalue").html(score);
    document.getElementById("slicesound").play();
    clearInterval(action);
    $("#fruit1").hide("explode",500);
    setTimeout(startaction,500);
    
});




function addhearts(){
$("#trialsleft").empty();
 for(i=0; i<trialsleft; i++){
            $("#trialsleft").append("<img src='heart.png' class='life'>");
       }
}
    
    
function startaction(){
$("#fruit1").show();
choosefruit();
$("#fruit1").css({'left': Math.round(550*Math.random()),'top': -50}) ;
step=1+Math.round(5*Math.random());
action = setInterval(function(){
    $("#fruit1").css('top',$("#fruit1").position().top+ step);
    if($("#fruit1").position().top> $("#gamearea").height()){
        if(trialsleft>1){
             $("#fruit1").show();
choosefruit();
$("#fruit1").css({'left': Math.round(550*Math.random()),'top': -50}) ;
step=1+Math.round(5*Math.random());
            trialsleft--;
            addhearts();

        }
       else{
           playing=false;
           $("#startreset").html('Start Game');
           $("#gameover").show();
           $("#gameover").html('<p> Game over! </p> <p> your score is ' + score + '</p>');
           $("#trialsleft").hide();
           stopaction();
                               
                               

       }
       }
},10);
}
function choosefruit(){
$("#fruit1").attr('src', fruits[Math.round(5*Math.random())]+'.png');

}

function stopaction(){
    clearInterval(action);
    $("#fruit1").hide();
}
});