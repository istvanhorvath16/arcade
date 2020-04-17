alert("Welcome to the R-S-P Arcade Machine!!! \n Disclaimer: The controls are on the left side, just below Player 1 (the opponent is automatic, the buttons are for design)!")


let paperBtn=document.getElementById('paper-select');
let rockBtn=document.getElementById('rock-select');
let scissorsBtn=document.getElementById('scissors-select');
let rock=document.getElementById('player-rock-display');
let paper=document.getElementById('player-paper-display');
let scissors=document.getElementById('player-scissors-display');
let opponentRock=document.getElementById('opponent-rock-display');
let opponentPaper=document.getElementById('opponent-paper-display');
let opponentScissors=document.getElementById('opponent-scissors-display');
let status=document.getElementById('status');
let playerScore=document.getElementById('player-score');
let oppScore=document.getElementById('opponent-score');
let newGame=document.getElementById('new-game-button');
let playerScoreInt=0, oppScoreInt=0;

function resetDisplay(hand){
    if(hand==paper)
    {
    rock.style.display="none";
    scissors.style.display="none";
    }
    else if(hand==rock)
    {
    paper.style.display="none";
    scissors.style.display="none";
    }
    else if(hand==scissors)
    {
        rock.style.display="none";
        paper.style.display="none";
    }
}

function resetDisplayOpp()
{
    opponentPaper.style.display="none";
    opponentScissors.style.display="none";
    opponentRock.style.display="none";
}

function randomizer(){
    const stances = ["Rock","Scissors","Paper"];
    const randomStances = stances[Math.floor(Math.random() * stances.length)];
    return randomStances;
    }



function scoreAssign(){
    oppScore.innerText=oppScoreInt;
    playerScore.innerText=playerScoreInt;
}
paperBtn.addEventListener("click",function(){
    resetDisplay(paper);
    paper.style.display="block";
    status.innerText="";
    if(randomizer()=="Rock")
       {    
            opponentPaper.style.display="none";
            opponentScissors.style.display="none";
            opponentRock.style.display="block";
            status.innerText="Win!";
            playerScoreInt+=1;
       }   
    else if(randomizer()=="Paper")
        {   
            opponentRock.style.display="none";
            opponentScissors.style.display="none";
            opponentPaper.style.display="block";
            status.innerText="Draw!";
        }
    else if(randomizer()=="Scissors")
        {
            opponentPaper.style.display="none";
            opponentRock.style.display="none";
            opponentScissors.style.display="block";
            status.innerText="Loss!";
            oppScoreInt+=1;
        }
        scoreAssign();
    })

let scorePly=document.getElementById('player-score');


rockBtn.addEventListener("click",function(){
    resetDisplay(rock);
    rock.style.display="block";
    status.innerText="";
    if(randomizer()=="Rock")
       {    
            opponentPaper.style.display="none";
            opponentScissors.style.display="none";
            opponentRock.style.display="block";
            status.innerText="Draw!";
       }   
    else if(randomizer()=="Paper")
        {   
            opponentRock.style.display="none";
            opponentScissors.style.display="none";
            opponentPaper.style.display="block";
            status.innerText="Loss!";
            oppScoreInt+=1;
            
        }
    else if(randomizer()=="Scissors")
        {
            opponentPaper.style.display="none";
            opponentRock.style.display="none";
            opponentScissors.style.display="block";
            status.innerText="Win!";
            playerScoreInt+=1;
           
        }
        scoreAssign();
        
})

scissorsBtn.addEventListener("click",function(){
    resetDisplay(scissors);
    resetDisplayOpp();
    scissors.style.display="block";
    status.innerText="";
    if(randomizer()=="Rock")
       {    
            opponentPaper.style.display="none";
            opponentScissors.style.display="none";
            opponentRock.style.display="block";
            status.innerText="Loss!";
            oppScoreInt+=1;
          
       }   
    else if(randomizer()=="Paper")
        {   
            opponentRock.style.display="none";
            opponentScissors.style.display="none";
            opponentPaper.style.display="block";
            status.innerText="Win!";
            playerScoreInt+=1;
           
        }
    else if(randomizer()=="Scissors")
        {
            opponentPaper.style.display="none";
            opponentRock.style.display="none";
            opponentScissors.style.display="block";
            status.innerText="Draw!";
        }
        scoreAssign();
    
    
})

newGame.addEventListener("click", function(){
    
    status.innerText="";
    playerScoreInt=0;
    oppScoreInt=0;
    oppScore.innerText=0;
    playerScore.innerText=0;
    resetDisplay(paper);
    resetDisplay(rock);
    resetDisplay(scissors);
    resetDisplayOpp();
});

