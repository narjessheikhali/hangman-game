const randomWords = ["designer", "doctor", "engineer", "programmer"]


let itemRandon = "";
let clicked =[];   
let result = "";    

function choseRandomItem(){
    itemRandom = randomWords[Math.floor(Math.random()*randomWords.length)];
    document.querySelector("#letters").addEventListener("click", buttonHandler);        
    console.log(itemRandom);
}

function setUnderScore(){
   let splitedWord = itemRandom.split("");
   let mappedWord = splitedWord.map(letter => (clicked.indexOf(letter)>=0 ? letter : "_"));
   result = mappedWord.join(""); 
        
   document.getElementById("clue").innerHTML = `<p>${result}</p>`
     
}

function checkIfWin(){
    if( itemRandon === result){
        document.getElementById("gameover").querySelector("p").style.display = "block";       
        document.getElementById("image").querySelector("img").src = "./assest/winner.png";
    }
}


function letterHandler(letter){
   letter = letter.toLowerCase();
   clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;      
   document.getElementById(letter.toUpperCase()).className = "used"; 
   if(itemRandom.indexOf(letter) >= 0){
     setUnderScore();
     checkIfWin();      
   }
   
   else if(itemRandom .indexOf(letter) === -1){

   }
    }
 

function buttonHandler(event){
    
    letterHandler(event.target.id)

}

function keyHandler(event){
    
    letterHandler(event.target.id)

}
choseRandomItem();
setUnderScore();       