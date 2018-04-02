var output1 = document.querySelector(".output1");
var output2 = document.querySelector(".output2");
var boxCou = document.querySelectorAll(".box");
var count = Math.floor(Math.random()*100);
var circle = 'url("img/circle.png") 0% 0% / 100%';
var cross = 'url("img/x.png") 0% 0% / 100%';
var output3 = document.querySelector(".output3");
var count2 = 0;
var buttonStart = document.querySelector(".starting");
var container = document.querySelector(".container");
var info = document.querySelector(".info");
var countCross = 0;
var countCircle = 0;
var top1 = document.querySelector(".top1");
var restart = document.querySelector(".restart");
var resScore = document.querySelector(".restartScore");

buttonStart.onclick = function(){container.style.display = "block";
                                info.style.display = "block";
                                buttonStart.style.display = "none";
                                var topText = document.querySelector(".topText");
                                topText.textContent = "The game is on!"
                                // topText.style.fontSize = "30px";
                                
                                 result = document.createElement("p");
                                document.body.appendChild(result);
                                top1.insertBefore(result,top1.lastChild.nextSibling);
                                
                                 result.innerHTML = "Current result: <br> 0 - 0"
                                }

if(count%2==0){ output1.innerHTML = "Cross starts!";}
else{ output1.innerHTML = "Circle starts!";}
//console.log(count);

function start(param){

        var val = event.target;
output2.innerHTML = "";
    if(event.target.value == "clicked"){
        //console.log("qwerty");         
        cantClick(val);
    } else{boxFunc(param);}
        val.value = "clicked";
//console.log(val.value);
    
    winLogic();
   // console.log(param);
    //console.log(output3.innerHTML);
    //console.log(count2 + " count2");
   
    end();

}

function boxFunc(paramBox){
    count2 ++
   // console.log(count2);
    if(count%2==0){

        output1.innerHTML = "Now circle";
        event.target.style.background = 'url(img/x.png)';
        event.target.style.backgroundSize = '100%';
    }else{

        output1.innerHTML = "Now cross";
            event.target.style.background = 'url(img/circle.png)';
        event.target.style.backgroundSize = '100%';
    }
            count++
}

function cantClick(param3){

        if(param3.value != "clicked"){return boxFunc()}
        else{output2.innerHTML = "You cant click the same box twice";}
    
  
}

function winLogic(){
    
    if(document.body.children[1].children[0].children[0].style.background == cross && document.body.children[1].children[0].children[1].style.background == cross && document.body.children[1].children[0].children[2].style.background == cross){output3.innerHTML = "Cross wins!";countCross ++; result.innerHTML = "Current result: <br> " + countCross + " - " + countCircle;count2=100;}
    else if(document.body.children[1].children[0].children[0].style.background == circle && document.body.children[1].children[0].children[1].style.background == circle && document.body.children[1].children[0].children[2].style.background == circle){output3.innerHTML = "Circle wins!";countCircle ++;result.innerHTML = "Current result: <br> " + countCross + " - " + countCircle;count2=100;}
    
    if(document.body.children[1].children[1].children[0].style.background == cross && document.body.children[1].children[1].children[1].style.background == cross && document.body.children[1].children[1].children[2].style.background == cross){output3.innerHTML = "Cross wins!";countCross ++;result.innerHTML = "Current result: <br> " + countCross + " - " + countCircle;count2=100;}
    else if(document.body.children[1].children[1].children[0].style.background == circle && document.body.children[1].children[1].children[1].style.background == circle && document.body.children[1].children[1].children[2].style.background == circle){output3.innerHTML = "Circle wins!";countCircle ++;result.innerHTML = "Current result: <br> " + countCross + " - " + countCircle;count2=100;}
    
    
    if(document.body.children[1].children[2].children[0].style.background == cross && document.body.children[1].children[2].children[1].style.background == cross && document.body.children[1].children[2].children[2].style.background == cross){output3.innerHTML = "Cross wins!";countCross ++;result.innerHTML = "Current result: <br> " + countCross + " - " + countCircle;count2=100;}
    else if(document.body.children[1].children[2].children[0].style.background == circle && document.body.children[1].children[2].children[1].style.background == circle && document.body.children[1].children[2].children[2].style.background == circle){output3.innerHTML = "Circle wins!";countCircle ++;result.innerHTML = "Current result: <br> " + countCross + " - " + countCircle;count2=100;}
    
    
    if(document.body.children[1].children[0].children[0].style.background == cross && document.body.children[1].children[1].children[0].style.background == cross && document.body.children[1].children[2].children[0].style.background == cross){output3.innerHTML = "Cross wins!";countCross ++;result.innerHTML = "Current result: <br> " + countCross + " - " + countCircle;count2=100;}
    else if(document.body.children[1].children[0].children[0].style.background == circle && document.body.children[1].children[1].children[0].style.background == circle && document.body.children[1].children[2].children[0].style.background == circle){output3.innerHTML = "Circle wins!";countCircle ++;result.innerHTML = "Current result: <br> " + countCross + " - " + countCircle;count2=100;}
    
     if(document.body.children[1].children[0].children[1].style.background == cross && document.body.children[1].children[1].children[1].style.background == cross && document.body.children[1].children[2].children[1].style.background == cross){output3.innerHTML = "Cross wins!";countCross ++;result.innerHTML = "Current result: <br> " + countCross + " - " + countCircle;count2=100;}
    else if(document.body.children[1].children[0].children[1].style.background == circle && document.body.children[1].children[1].children[1].style.background == circle && document.body.children[1].children[2].children[1].style.background == circle){output3.innerHTML = "Circle wins!";countCircle ++;result.innerHTML = "Current result: <br> " + countCross + " - " + countCircle;count2=100;}
    
     if(document.body.children[1].children[0].children[2].style.background == cross && document.body.children[1].children[1].children[2].style.background == cross && document.body.children[1].children[2].children[2].style.background == cross){output3.innerHTML = "Cross wins!";countCross ++;result.innerHTML = "Current result: <br> " + countCross + " - " + countCircle;count2=100;}
    else if(document.body.children[1].children[0].children[2].style.background == circle && document.body.children[1].children[1].children[2].style.background == circle && document.body.children[1].children[2].children[2].style.background == circle){output3.innerHTML = "Circle wins!";countCircle ++;result.innerHTML = "Current result: <br> " + countCross + " - " + countCircle;count2=100;}
    
     if(document.body.children[1].children[0].children[0].style.background == cross && document.body.children[1].children[1].children[1].style.background == cross && document.body.children[1].children[2].children[2].style.background == cross){output3.innerHTML = "Cross wins!";countCross ++;result.innerHTML = "Current result: <br> " + countCross + " - " + countCircle;count2=100;}
    else if(document.body.children[1].children[0].children[0].style.background == circle && document.body.children[1].children[1].children[1].style.background == circle && document.body.children[1].children[2].children[2].style.background == circle){output3.innerHTML = "Circle wins!";countCircle ++;result.innerHTML = "Current result: <br> " + countCross + " - " + countCircle;count2=100;}
    
    if(document.body.children[1].children[0].children[2].style.background == cross && document.body.children[1].children[1].children[1].style.background == cross && document.body.children[1].children[2].children[0].style.background == cross){output3.innerHTML = "Cross wins!";countCross ++;result.innerHTML = "Current result: <br> " + countCross + " - " + countCircle;count2=100;}
    else if(document.body.children[1].children[0].children[2].style.background == circle && document.body.children[1].children[1].children[1].style.background == circle && document.body.children[1].children[2].children[0].style.background == circle){output3.innerHTML = "Circle wins!";countCircle ++;result.innerHTML = "Current result: <br> " + countCross + " - " + countCircle;count2=100;}
  drawCheck();
    output1Canc();
    //console.log(count2 + " from Log");
}

function output1Canc(){
    if(count2==0){output1.innerHTML = "";}
}

function drawCheck(){
    if(output3.innerHTML != "Cross wins!" && output3.innerHTML != "Circle wins!" && count2 == "9"){
        output3.innerHTML = "Draw";
        count2 = 0;
    }
}

function end(param2){
    if(count2==100){
    for(var z=0;z<boxCou.length;z++){
        boxCou[z].onclick = function(){output1.innerHTML = "Game is over now, you can't click anymore!";}
    }
   // console.log("no pass!")
    }
}
restart.onclick = restartFunc;

function restartFunc(){
    for(var m=0;m<boxCou.length;m++){
    boxCou[m].style.background = "bisque";
        boxCou[m].value = null;
       // console.log(boxCou.value);
    }
    output3.innerHTML = "";
    count2 = 0;
    output2.innerHTML = "";
output1.innerHTML = "";
       // console.log(output3.innerHTML);

    //console.log(count2);
    
    for(var z=0;z<boxCou.length;z++){
        boxCou[z].onclick = function(){start();}
    }
    if(count%2==0){ output1.innerHTML = "Cross starts!";}
else{ output1.innerHTML = "Circle starts!";}
    
}



resScore.onclick = function(){
    countCross = 0;
    countCircle = 0;
   result.innerHTML = "Current result: <br> 0 - 0"
}