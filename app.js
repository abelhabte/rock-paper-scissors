var a_pressed = false, s_pressed = false, d_pressed = false;
var j_pressed = false, k_pressed = false, l_pressed = false;
var player_1_score = 0, player_2_score = 0;
var player_1_turn = true, player_2_turn = true;
document.addEventListener('keydown', function (event) {
    var key = event.key.toLowerCase();
    switch (key) {
        case 'a':
        case 's':
        case 'd':
        case 'j':
        case 'k':
        case 'l':
            handleSelection(key);
            break;
        case 'r':
            resetGame();
            break;
    }
});
function handleSelection(key) {
    hideOutcomes();
    switch (key) {
        case 'a':
            if (player_1_turn) {
                displayChoice('rock1', 'paper1', 'scissors1');
                a_pressed = true;
                player_1_turn = false;
            }
            break;
        case 's':
            if (player_1_turn) {
                displayChoice('paper1', 'rock1', 'scissors1');
                s_pressed = true;
                player_1_turn = false;
            }
            break;
        case 'd':
            if (player_1_turn) {
                displayChoice('scissors1', 'rock1', 'paper1');
                d_pressed = true;
                player_1_turn = false;
            }
            break;
        case 'j':
            if (player_2_turn) {
                displayChoice('rock2', 'paper2', 'scissors2');
                j_pressed = true;
                player_2_turn = false;
            }
            break;
        case 'k':
            if (player_2_turn) {
                displayChoice('paper2', 'rock2', 'scissors2');
                k_pressed = true;
                player_2_turn = false;
            }
            break;
        case 'l':
            if (player_2_turn) {
                displayChoice('scissors2', 'rock2', 'paper2');
                l_pressed = true;
                player_2_turn = false;
            }
            break;
    }
    checkOutcomes();
}
function displayChoice(showId, hideId1, hideId2) {
    document.getElementById(showId).style.display = 'block';
    document.getElementById(hideId1).style.display = 'none';
    document.getElementById(hideId2).style.display = 'none';
}
function checkOutcomes() {
    if (a_pressed && l_pressed) {
        updateScore('player_1_score', 'outcome1');
    }
    else if (d_pressed && j_pressed) {
        updateScore('player_2_score', 'outcome1');
    }
    else if (d_pressed && k_pressed) {
        updateScore('player_1_score', 'outcome2');
    }
    else if (s_pressed && l_pressed) {
        updateScore('player_2_score', 'outcome2');
    }
    else if (s_pressed && j_pressed) {
        updateScore('player_1_score', 'outcome3');
    }
    else if (a_pressed && k_pressed) {
        updateScore('player_2_score', 'outcome3');
    }
    else if ((a_pressed && j_pressed) || (s_pressed && k_pressed) || (d_pressed && l_pressed)) {
        displayOutcome('outcome4');
    }
    resetKeysIfBothPressed();
}
function resetKeysIfBothPressed() {
    if ((a_pressed || s_pressed || d_pressed) && (j_pressed || k_pressed || l_pressed)) {
        resetKeys();
    }
}
function updateScore(playerScoreId, outcomeId) {
    if (playerScoreId === 'player_1_score') {
        player_1_score++;
        document.getElementById(playerScoreId).innerText = player_1_score.toString();
    }
    else {
        player_2_score++;
        document.getElementById(playerScoreId).innerText = player_2_score.toString();
    }
    displayOutcome(outcomeId);
}
function displayOutcome(outcomeId) {
    document.getElementById(outcomeId).style.display = 'block';
    ['outcome1', 'outcome2', 'outcome3', 'outcome4'].forEach(function (id) {
        if (id !== outcomeId) {
            document.getElementById(id).style.display = 'none';
        }
    });
}
function hideOutcomes() {
    ['outcome1', 'outcome2', 'outcome3', 'outcome4'].forEach(function (id) {
        document.getElementById(id).style.display = 'none';
    });
}
function resetKeys() {
    a_pressed = s_pressed = d_pressed = j_pressed = k_pressed = l_pressed = false;
    player_1_turn = player_2_turn = true;
}
function resetGame() {
    ['rock1', 'paper1', 'scissors1', 'rock2', 'paper2', 'scissors2', 'outcome1', 'outcome2', 'outcome3', 'outcome4'].forEach(function (id) {
        document.getElementById(id).style.display = 'none';
    });
    resetKeys();
    player_1_score = player_2_score = 0;
    document.getElementById('player_1_score').innerText = player_1_score.toString();
    document.getElementById('player_2_score').innerText = player_2_score.toString();
}
