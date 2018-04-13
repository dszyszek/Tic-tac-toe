const game = {
	output1: document.querySelector("#output1"),
	output2: document.querySelector("#output2"),
	boxCou: document.querySelectorAll(".box"),
	count: Math.floor(Math.random()*100),
	output3: document.querySelector("#output3"),
	count2: 0,
	buttonStart: document.querySelector(".starting"),
	container: document.querySelector("#container"),
	info: document.querySelector("#info"),
	countCross: 0,
	countCircle: 0,
	top1: document.querySelector("#top1"),
	restart: document.querySelector(".restart"),
	resScore: document.querySelector(".restartScore"),
	win: "",
	result: "",
	val: "",
	funcEnd : function(){game.output1.innerHTML = "Game is over now, you can't click anymore!"},

	buttonStartF: function(){this.buttonStart.addEventListener('click',this.main.bind(game))},
	
	main:         function(){
								this.container.style.display= "block";
                                this.info.style.display = "block";
                                this.buttonStart.style.display = "none";
                                const topText = document.querySelector("#topText");
                                topText.textContent = "The game is on!"
                                this.result = document.createElement("p");
                                document.body.appendChild(this.result);
                                this.top1.insertBefore(this.result,this.top1.lastChild.nextSibling);
                                 this.result.innerHTML = "Current result: <br> 0 - 0"
                                },
	start: 	function(){		
						this.clickLogic();
						this.end();
						},
						
	clickLogic : function(){
							this.val = event.target;
							this.output2.innerHTML = "";
							if(this.val.value == "clicked" && this.count2 != 100){        
								this.cantClick(this.val);
							} 
							else if(this.count2==100){this.end(); this.output2.innerHTML = ""}
							else{this.boxFunc(); this.winLogic()}
							this.val.value = "clicked";
							},
						
	startType: function(){if(this.count%2==0){this.output1.innerHTML = "Cross starts!";}
							else{this.output1.innerHTML = "Circle starts!"}
						 },
	boxFunc:	function(paramTic){
								this.count2 ++; 
								if(this.count%2==0){
									this.output1.innerHTML = "Now circle";
									event.target.style.background = 'url(img/x.png)';
									event.target.style.backgroundSize = '100%';
									event.target.setAttribute('TicType','Cross');
								}else{
									this.output1.innerHTML = "Now cross";
									event.target.style.background = 'url(img/circle.png)';
									event.target.style.backgroundSize = '100%';
									event.target.setAttribute('TicType','Circle');
								}
										this.count++
							},
	cantClick: function(param3){
								if(param3.value != "clicked"){return boxFunc()}
								else{this.output2.innerHTML = "You cant click the same box twice";}
								},					
	winLogic: function(){
						 let arr=[];
						 this.boxCou.forEach(function(x){arr.push(x.getAttribute('TicType'))})
						 for(let q=0;q<3;q++){if(arr[q]==arr[q+3] && arr[q]==arr[q+6] && arr[q]!=""){this.count2=100; this.output3.innerHTML = arr[q] +" wins!"; this.win = arr[q];}}
						 for(let q=0;q<7;q+=3){if(arr[q]==arr[q+1] && arr[q]==arr[q+2] && arr[q]!=""){this.output3.innerHTML = arr[q] +" wins!"; this.count2=100; this.win = arr[q]}}
						 if(arr[2]==arr[4] && arr[2]==arr[6] && arr[2]!=""){this.output3.innerHTML = arr[2] +" wins!"; this.count2=100; this.win = arr[2]}
						 if(arr[0]==arr[4] && arr[0]==arr[8] && arr[0]!=""){this.output3.innerHTML = arr[0] +" wins!"; this.count2=100; this.win=arr[0]}
						 
						 if(this.win=='Cross'){this.countCross++}
						 else if(this.win=='Circle'){this.countCircle++}
						 
						 this.result.innerHTML ='Current result: <br>' + this.countCross + ' - ' + this.countCircle;
						 this.drawCheck();
						 this.output1Canc();
						},
	output1Canc: function(){
							if(this.count2==0){this.output1.innerHTML = "";}
							},						
	drawCheck:   function(){
							if(this.output3.innerHTML != "Cross wins!" && this.output3.innerHTML != "Circle wins!" && this.count2 == "9"){
							this.output3.innerHTML = "Draw";
							this.count2 = 0;
												}
							},
	end:        function(){
							if(this.count2==100 && this.win != 'false'){
							this.boxCou.forEach(z => z.addEventListener('click',this.funcEnd))
								}
						   },
	restartB:   function(){this.restart.addEventListener('click',this.restartFunc.bind(game))},						
	restartFunc: function(){
							this.boxCou.forEach(x => x.removeEventListener('click',this.funcEnd));
							this.boxCou.forEach(m =>
							(m.style.background = "bisque",
								m.value = null
							))
							this.output3.innerHTML = "";
							this.output2.innerHTML = "";
							this.output1.innerHTML = "";
							this.win="";
							this.boxCou.forEach(function(x){x.setAttribute('TicType','')})
							if(this.count%2==0){this.output1.innerHTML = "Cross starts!";}
							else{this.output1.innerHTML = "Circle starts!";}
						    this.count2=0; 
							},
	restartS:   function(){
							this.countCross=0;
							this.countCircle = 0;
						   this.result.innerHTML = "Current result: <br> 0 - 0";									
						   },
	}
	game.buttonStartF();
	game.boxCou.forEach(x=> x.addEventListener('click',function(){game.start()}));
	game.startType();
	game.restartB();
	game.resScore.addEventListener('click',game.restartS.bind(game));