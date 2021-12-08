function computerPlay()
{
    const choices = ["rock","paper","scissors"];
    
    return choices[Math.floor(Math.random() * 3)];
}

let beat = {
    "rock" : "scissors",
    "paper" : "rock",
    "scissors" : "paper"
};

function play_round(player, computer)
{
    if(beat[player] == computer)
    {
        return `You Win! ${player} beat ${computer}`;
    }
    else if(beat[computer] == player)
    {
        return `You Lose! ${computer} beat ${player}`;
    }
    else
    {
        return `Draw! You did same thing with the computer`;
    }
}

function game()
{
    let i;
    let pl = 0;
    let cmp = 0;
    

    for(i = 0; i < 5; i++)
    {
        let player_choice = window.prompt("Write Your Choice:");
        let result = play_round(player_choice.toLowerCase(), computerPlay());

        if(result.includes("Win"))
        {
            pl++;
        }
        else if(result.includes("Lose"))
        {
            cmp++;
        }

        console.log(result);
    }

    if(pl > cmp)
    {
        console.log("Congratulations, You win in overall.");
    }
    else if(cmp > pl)
    {
        console.log("You lose against computer.");
    }
    else
    {
        console.log("DRAW");
    }
}

game();
