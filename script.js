var output1 = document.querySelector(".output1");
var output2 = document.querySelector(".output2");
var boxCou = document.querySelectorAll(".box");
var count = Math.floor(Math.random()*100);
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
var win;

buttonStart.addEventListener('click',function(){container.style.display = "block";
                                info.style.display = "block";
                                buttonStart.style.display = "none";
                                var topText = document.querySelector(".topText");
                                topText.textContent = "The game is on!"
                                
                                 result = document.createElement("p");
                                document.body.appendChild(result);
                                top1.insertBefore(result,top1.lastChild.nextSibling);
                                
                                 result.innerHTML = "Current result: <br> 0 - 0"
                                })

if(count%2==0){output1.innerHTML = "Cross starts!";}
else{output1.innerHTML = "Circle starts!";}

function start(param){
        var val = event.target;
		output2.innerHTML = "";
    if(val.value == "clicked" && count2 != 100){        
        cantClick(val);
    } else if(count2==100){end(); output2.innerHTML = ""}
	else{boxFunc();}
        val.value = "clicked";
    winLogic();
   
    end();

}

function boxFunc(paramTic){
	count2 ++; 
    if(count%2==0){

        output1.innerHTML = "Now circle";
        event.target.style.background = 'url(img/x.png)';
        event.target.style.backgroundSize = '100%';
		event.target.setAttribute('TicType','Cross');
    }else{

        output1.innerHTML = "Now cross";
            event.target.style.background = 'url(img/circle.png)';
        event.target.style.backgroundSize = '100%';
		event.target.setAttribute('TicType','Circle');
    }
            count++
}

function cantClick(param3){

        if(param3.value != "clicked"){return boxFunc()}
        else{output2.innerHTML = "You cant click the same box twice";}
}

function winLogic(){
		var arr=[];
		boxCou.forEach(function(x){arr.push(x.getAttribute('TicType'))})
	 for(var q=0;q<3;q++){if(arr[q]==arr[q+3] && arr[q]==arr[q+6] && arr[q]!=""){count2=100;output3.innerHTML = arr[q] +" wins!"; win = arr[q];}}
	 for(var q=0;q<7;q+=3){if(arr[q]==arr[q+1] && arr[q]==arr[q+2] && arr[q]!=""){output3.innerHTML = arr[q] +" wins!";count2=100;win = arr[q]}}
	 if(arr[2]==arr[4] && arr[2]==arr[6] && arr[2]!=""){output3.innerHTML = arr[2] +" wins!";count2=100; win = arr[2]}
	 if(arr[0]==arr[4] && arr[0]==arr[8] && arr[0]!=""){output3.innerHTML = arr[0] +" wins!";count2=100;win=arr[0]}

	if(win=='Cross'){countCross++}
	else if(win=='Circle'){countCircle++}

		  result.innerHTML ='Current result: <br>' + countCross + ' - ' + countCircle;
		  
	  drawCheck();
		output1Canc();
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

function end(){
    if(count2==100){
    boxCou.forEach(z => z.onclick=function(){output1.innerHTML = "Game is over now, you can't click anymore!"})
    }
}
restart.addEventListener('click',restartFunc);

function restartFunc(){
    boxCou.forEach(m =>
    (m.style.background = "bisque",
        m.value = null
	))
    output3.innerHTML = "";
    output2.innerHTML = "";
	output1.innerHTML = "";
	win="";
	boxCou.forEach(z => z.onclick = start)
	boxCou.forEach(function(x){x.setAttribute('TicType','')})

    if(count%2==0){ output1.innerHTML = "Cross starts!";}
else{ output1.innerHTML = "Circle starts!";}
   count2=0; 
}

resScore.onclick = function(){
    countCross=0;
	countCircle = 0;
   result.innerHTML = "Current result: <br> 0 - 0"
}