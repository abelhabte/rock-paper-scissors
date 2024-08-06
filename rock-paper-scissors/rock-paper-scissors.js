document.addEventListener('keypress', function(event) {
    if (event.key === 'a' || event.key === 'A') {
        document.getElementById('rock1').style.display = 'block';
        document.getElementById('paper1').style.display = 'none';
        document.getElementById('scissors1').style.display = 'none';
    }
    if (event.key === 's' || event.key === 'S') {
        document.getElementById('paper1').style.display = 'block';
        document.getElementById('rock1').style.display = 'none';
        document.getElementById('scissors1').style.display = 'none';
    }
    if (event.key === 'd' || event.key === 'D') {
        document.getElementById('scissors1').style.display = 'block';
        document.getElementById('rock1').style.display = 'none';
        document.getElementById('paper1').style.display = 'none';
    }
    if (event.key === 'j' || event.key === 'J') {
        document.getElementById('rock2').style.display = 'block';
        document.getElementById('paper2').style.display = 'none';
        document.getElementById('scissors2').style.display = 'none';
    }
    if (event.key === 'k' || event.key === 'K') {
        document.getElementById('paper2').style.display = 'block';
        document.getElementById('rock2').style.display = 'none';
        document.getElementById('scissors2').style.display = 'none';
    }
    if (event.key === 'l' || event.key === 'L') {
        document.getElementById('scissors2').style.display = 'block';
        document.getElementById('rock2').style.display = 'none';
        document.getElementById('paper2').style.display = 'none';
    }
});

var a_pressed = false;
var s_pressed = false;
var d_pressed = false;
var j_pressed = false;
var k_pressed = false;
var l_pressed = false;

var player_1_score = 0;
var player_2_score = 0;

// Rock beats scissors outcomes

// Player 1 wins
document.addEventListener('keydown', function(event) {
    if (event.key === 'a' || event.key === 'A') {
        a_pressed = true;
    }
    if (event.key === 'l' || event.key === 'L') {
        l_pressed = true;
    }
    if (a_pressed && l_pressed) {
        player_1_score++;
        document.getElementById('player_1_score').innerText = player_1_score;
        document.getElementById('outcome1').style.display = 'block';
        document.getElementById('outcome2').style.display = 'none';
        document.getElementById('outcome3').style.display = 'none';
        document.getElementById('outcome4').style.display = 'none';
        a_pressed = false;
        l_pressed = false;
    }
});

// Player 2 wins
document.addEventListener('keydown', function(event) {
    if (event.key === 'd' || event.key === 'D') {
        d_pressed = true;
    }
    if (event.key === 'j' || event.key === 'J') {
        j_pressed = true;
    }
    if (d_pressed && j_pressed) {
        player_2_score++;
        document.getElementById('player_2_score').innerText = player_2_score;
        document.getElementById('outcome1').style.display = 'block';
        document.getElementById('outcome2').style.display = 'none';
        document.getElementById('outcome3').style.display = 'none';
        document.getElementById('outcome4').style.display = 'none';
        d_pressed = false;
        j_pressed = false;
    }
});

// Scissors beats paper outcomes

// Player 1 wins
document.addEventListener('keydown', function(event) {
    if (event.key === 'd' || event.key === 'D') {
        d_pressed = true;
    }
    if (event.key === 'k' || event.key === 'K') {
        k_pressed = true;
    }
    if (d_pressed && k_pressed) {
        player_1_score++;
        document.getElementById('player_1_score').innerText = player_1_score;
        document.getElementById('outcome2').style.display = 'block';
        document.getElementById('outcome1').style.display = 'none';
        document.getElementById('outcome3').style.display = 'none';
        document.getElementById('outcome4').style.display = 'none';
        d_pressed = false;
        k_pressed = false;
    }
});

// Player 2 wins
document.addEventListener('keydown', function(event) {
    if (event.key === 's' || event.key === 'S') {
        s_pressed = true;
    }
    if (event.key === 'l' || event.key === 'L') {
        l_pressed = true;
    }
    if (s_pressed && l_pressed) {
        player_2_score++;
        document.getElementById('player_2_score').innerText = player_2_score;
        document.getElementById('outcome2').style.display = 'block';
        document.getElementById('outcome1').style.display = 'none';
        document.getElementById('outcome3').style.display = 'none';
        document.getElementById('outcome4').style.display = 'none';
        s_pressed = false;
        l_pressed = false;
    }
});

// Paper beat rock outcomes

// Player 1 wins
document.addEventListener('keydown', function(event) {
    if (event.key === 's' || event.key === 'S') {
        s_pressed = true;
    }
    if (event.key === 'j' || event.key === 'J') {
        j_pressed = true;
    }
    if (s_pressed && j_pressed) {
        player_1_score++;
        document.getElementById('player_1_score').innerText = player_1_score;
        document.getElementById('outcome3').style.display = 'block';
        document.getElementById('outcome1').style.display = 'none';
        document.getElementById('outcome2').style.display = 'none';
        document.getElementById('outcome4').style.display = 'none';
        s_pressed = false;
        j_pressed = false;
    }
});

// Player 2 wins
document.addEventListener('keydown', function(event) {
    if (event.key === 'a' || event.key === 'A') {
        a_pressed = true;
    }
    if (event.key === 'k' || event.key === 'K') {
        k_pressed = true;
    }
    if (a_pressed && k_pressed) {
        player_2_score++;
        document.getElementById('player_2_score').innerText = player_2_score;
        document.getElementById('outcome3').style.display = 'block';
        document.getElementById('outcome1').style.display = 'none';
        document.getElementById('outcome2').style.display = 'none';
        document.getElementById('outcome4').style.display = 'none';
        a_pressed = false;
        k_pressed = false;
    }
});

// Tied outcomes

document.addEventListener('keydown', function(event) {
    if (event.key === 'a' || event.key === 'A') {
        a_pressed = true;
    }
    if (event.key === 'j' || event.key === 'J') {
        j_pressed = true;
    }
    if (a_pressed && j_pressed) {
        document.getElementById('outcome4').style.display = 'block';
        document.getElementById('outcome1').style.display = 'none';
        document.getElementById('outcome2').style.display = 'none';
        document.getElementById('outcome3').style.display = 'none';
        a_pressed = false;
        j_pressed = false;
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 's' || event.key === 'S') {
        s_pressed = true;
    }
    if (event.key === 'k' || event.key === 'K') {
        k_pressed = true;
    }
    if (s_pressed && k_pressed) {
        document.getElementById('outcome4').style.display = 'block';
        document.getElementById('outcome1').style.display = 'none';
        document.getElementById('outcome2').style.display = 'none';
        document.getElementById('outcome3').style.display = 'none';
        s_pressed = false;
        k_pressed = false;
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'd' || event.key === 'D') {
        d_pressed = true;
    }
    if (event.key === 'l' || event.key === 'L') {
        l_pressed = true;
    }
    if (d_pressed && l_pressed) {
        document.getElementById('outcome4').style.display = 'block';
        document.getElementById('outcome1').style.display = 'none';
        document.getElementById('outcome2').style.display = 'none';
        document.getElementById('outcome3').style.display = 'none';
        d_pressed = false;
        l_pressed = false;
    }
});

// Reset Game
document.addEventListener('keydown', function(event) {
    if (event.key === 'r' || event.key === 'R') {
        document.getElementById('rock1').style.display = 'none';
        document.getElementById('paper1').style.display = 'none';
        document.getElementById('scissors1').style.display = 'none';

        document.getElementById('rock2').style.display = 'none';
        document.getElementById('paper2').style.display = 'none';
        document.getElementById('scissors2').style.display = 'none';

        document.getElementById('outcome1').style.display = 'none';
        document.getElementById('outcome2').style.display = 'none';
        document.getElementById('outcome3').style.display = 'none';
        document.getElementById('outcome4').style.display = 'none';

        a_pressed = false;
        s_pressed = false;
        d_pressed = false;
        j_pressed = false;
        k_pressed = false;
        l_pressed = false;

        player_1_score = 0;
        player_2_score = 0;

        document.getElementById('player_1_score').innerText = player_1_score;
        document.getElementById('player_2_score').innerText = player_2_score;
    }
});