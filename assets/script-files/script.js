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
let score=0;

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
function randomizer(){
    const stances = ["Rock","Scissors","Paper"];
    const randomStances = stances[Math.floor(Math.random() * stances.length)];
    return randomStances;
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
            score=score+1;
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
        }
        return score;
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
            score=score+1;
       }   
    else if(randomizer()=="Paper")
        {   
            opponentRock.style.display="none";
            opponentScissors.style.display="none";
            opponentPaper.style.display="block";
            status.innerText="Loss!";
        }
    else if(randomizer()=="Scissors")
        {
            opponentPaper.style.display="none";
            opponentRock.style.display="none";
            opponentScissors.style.display="block";
            status.innerText="Win!";
        }
        return score;
})

scissorsBtn.addEventListener("click",function(){
    resetDisplay(scissors);
    scissors.style.display="block";
    status.innerText="";
    if(randomizer()=="Rock")
       {    
            opponentPaper.style.display="none";
            opponentScissors.style.display="none";
            opponentRock.style.display="block";
            status.innerText="Loss!";
            score=score+1;
       }   
    else if(randomizer()=="Paper")
        {   
            opponentRock.style.display="none";
            opponentScissors.style.display="none";
            opponentPaper.style.display="block";
            status.innerText="Win!";
        }
    else if(randomizer()=="Scissors")
        {
            opponentPaper.style.display="none";
            opponentRock.style.display="none";
            opponentScissors.style.display="block";
            status.innerText="Draw!";
        }
        return score;
})

