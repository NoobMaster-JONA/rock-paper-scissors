function getComputerChoice(){
    let rand=(Math.floor(3*Math.random()));
    let compchoice=" ";
    switch(rand){
        case 0: compchoice="rock";
                break;
        case 1: compchoice="scissors"
                break;
        case 2: compchoice="paper"
                break;
    }

    console.log(compchoice);
    return compchoice;


}

function getplayerchoice(){

    let pchoice=prompt("Enter choice");
    pchoice=pchoice.toLowerCase();
    console.log(pchoice);
    return pchoice;
}

function playround(compsel, plyrsel, res){

    

    if(plyrsel=="rock" && compsel=="scissors"){
        console.log("You win");
    }
    else if(plyrsel=="scissors" && compsel=="paper"){
        console.log("You win");
    }
    else if(plyrsel=="paper" && compsel=="rock"){
        console.log("You win");
    }
    else if(plyrsel==compsel){
        console.log("Tie");
        tie=true;
        res=0;
    }
    else{
        console.log("You lose");
        res=2;
    }
    return res;
    
    
}

function game(){
    let playerpoint=0;
    let comppoint=0;
    let result=0;
    for(let i=0;i<10;i++){
        result=1;
        
        let comp=getComputerChoice();
        let player=getplayerchoice();
        result=playround(comp, player, result);
        if(result==1){
            playerpoint++;
        }

        else if(result==0){
            continue;
            
        }
        else{
            comppoint++;
        }
    }

    console.log("player scored"+playerpoint);
    console.log("computer scored"+comppoint);
    let gameresuslt=" ";
    if(playerpoint>comppoint){
        gameresuslt="player wins";
        

    }
    else if(playerpoint==comppoint){
        gameresult="its a tie!";
    }
    else{
        gameresult="computer wins";
    }
    console.log(gameresult);
    document.getElementById("gresult").innerHTML=gameresuslt;
}




game();