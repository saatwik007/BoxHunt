let clickTimes = [];
let reactionTimes = [];
let currentTime;
let moveInterval = null; 



const dot = document.getElementById("dot");
function handleDot(){ 

  // handleStart();
  // handleReset();
  // console.log(NumRandom);
  let clickTime = new Date();
  console.log("clickTime",clickTime)
  console.log("reaction time", clickTime - currentTime)
  let reaction = clickTime - currentTime;
 clickTimes.push(clickTime.toLocaleTimeString());
reactionTimes.push(reaction);
  console.log("clickTimes",clickTimes);
  console.log("reactionTimes",reactionTimes);
  // let b = dot.classList.add("new");     
    for (let i = 1; i <= 5; i++) {
    const clickLi = document.querySelectorAll('.MouseClick li')[i - 1];
    const reactionLi = document.querySelectorAll('.Reaction li')[i - 1];
    clickLi.textContent = `Click ${i}: ${clickTimes[i - 1] || ""}`;
    reactionLi.textContent = `Click ${i}: ${reactionTimes[i - 1] !== undefined ? reactionTimes[i - 1] + " ms" : ""}`;
  }        
}
dot.addEventListener("click", handleDot);





const startButton = document.getElementById("start");
function handleStart(){
  reactionTime;
  if(reactionTime !=0){
    setInterval(()=>{
console.log("Clicked Start");
    currentTime = new Date();
  console.log("current time",currentTime);

 let NumRandom1 = Math.floor(Math.random() * 1430); 
let NumRandom2 = Math.floor(Math.random() * 390); 
  console.log(NumRandom1, NumRandom2);  

  let newString=`transform:translate(${NumRandom1}, ${NumRandom2})`;
  
  console.log(newString)
  
dot.style.transform = `translate(${NumRandom1}px, ${NumRandom2}px)`;
//
    }, reactionTime * 1000);
    console.log("not zero");
  }
  else{
    console.log("zero")
  }
  console.log("Clicked Start"); 
}
startButton.addEventListener('click',handleStart);






const resetButton = document.getElementById("reset");
function handleReset(){
    clickTimes = [];
  reactionTimes = [];
    for (let i = 1; i <= 5; i++) {
    const clickLi = document.querySelectorAll('.MouseClick li')[i - 1];
    const reactionLi = document.querySelectorAll('.Reaction li')[i - 1];
    clickLi.textContent = `Click ${i}: `;
    reactionLi.textContent = `Click ${i}: `;
  }
  console.log("Clicked reset");
    if (moveInterval) {
    clearInterval(moveInterval);
    moveInterval = null;
  }  
  dot.style.transform = "translate(0px, 0px)";
  dot.classList.remove("new");
  // dot.classList.remove("new");
}
resetButton.addEventListener('click',handleReset);

let inputElm=document.getElementById("inputElm");
console.log(inputElm);


function handleInput(){
  console.log("input",inputElm.value);
  reactionTime = inputElm.value;
  console.log(reactionTime);
}

inputElm.addEventListener('change',handleInput)






