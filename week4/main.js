function fill(box)
{
    document.getElementById(box).innerHTML = player.turn;
    turn(player);
}


function turn(player)
{

    if (player.turn == 'X'){
        player.turn = "O"
    }
    
    else
    {
        player.turn = "X"
    }
}


var player = {
    turn: "X"

}

let btn = document.querySelector('button');

btn.addEventListener('touchend', reset)

function reset()
{
    for (i=1; i<10; i++){
        document.getElementById(i).innerHTML = " ";
    }
}

