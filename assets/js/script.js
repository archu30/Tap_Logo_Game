// setting the level easy 

function easy() {
    document.getElementById('circle').style.animationDuration = '20s';
    document.getElementById('circle').className = 'crcl'
}

// setting the level medium

function medium() {
    document.getElementById('circle').style.animationDuration = '15s';
    document.getElementById('circle').className = 'crcl'
}
// setting the level hard

function hard() {
    document.getElementById('circle').style.animationDuration = '12s';
    document.getElementById('circle').className = 'crcl'
}


let cnt = 0;

// function to count the number of taps and display the score

function count() {
    cnt = parseInt(1) + parseInt(cnt);
    var scr = document.getElementById('score');
    scr.innerHTML = cnt;
}

// restart the game by refreshing the page
function restart() {
    window.location.reload();
}