player1=localStorage.getItem("player1_name");
player2=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1+" :";
document.getElementById("player2_name").innerHTML=player2+" :";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question turn:"+ player1;
document.getElementById("player_answer").innerHTML="Answer turn:"+ player2;

function send()
{
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actualanswer=parseInt(number1)*parseInt(number2);
    question_number=number1 + "X" + number2;
    inputbox="<br><br><input type='text' id='input_checkbox'>";
    check_box="<br><br><button id='check' onclick='check()' class='btn btn-success'>check</button>";
    row=question_number+inputbox+check_box;
    document.getElementById("output").innerHTML=row; 
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}

questionturn="player1";
answerturn="player2";

function check()
{
    getAns=document.getElementById("input_checkbox").value;


    if(getAns == actualanswer)
    {
        if(answerturn=='player1')
        {
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else
        {
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }

    if(questionturn=='player1')
    {
        questionturn="player2";
        document.getElementById("player_question").innerHTML="Question turn:"+ player2;
    }
    else
    {
        questionturn="player1";
        document.getElementById("player_question").innerHTML="Question turn:"+ player1;
    }
    if(answerturn=='player1')
    {
        answerturn="player2";
        document.getElementById("player_answer").innerHTML="Answer turn:"+ player2;
    }
    else{
        answerturn="player1";
        document.getElementById("player_answer").innerHTML="Answer turn:"+ player1;
    }
    document.getElementById("output").innerHTML="";
}