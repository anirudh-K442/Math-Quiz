question_turn = "player1"
answer_turn = "player2"

function send() {
    number1 = document.getElementById("first_no.").value;
    number2 = document.getElementById("second_no.").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'";
    check_button = "<br><br><button class = ' btn tbn-info' onclick='check()>Check</button>'";

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'<br><br>";
    check_button = "<br><br><button class = 'btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == "player1")
    {
        if(answer_turn == "player1")
        {
            player1_score += 1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else
        {
            player2_score += 1;
            document.getElementById("player2_score").innerHTML = update_player2_score
        }

        if (question_turn == "player1")
        {
            question_turn = "player2";
            document.getElementById("player_question").innerHTML = "Question turn - " + player2_name;
        }
        else
        {
            question_turn = "player1";
            document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
        }
    
        if(answer_turn == "player1")
        {
            answer_turn = "player2";
            document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;
        }
        else 
        {
            answer_turn = "player1";
            document.getElementById("player_answer").innerHTML = "Answer turn - " + player1_name;
        }
    }
}