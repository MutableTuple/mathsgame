// if we click on the start/reset bn

var playing = false;
var score;
var action;
var timeRemaining;
var x;
var y;
var correct_ans= x*y;

document.getElementById("startReset").onclick=
function(){

if (playing==true){
  location.reload(); //reloads our page

}
else{
// if we are not plyaing

// set score to zero
playing=true;
score=0;
document.getElementById("score_value").innerHTML=score;
// show time
show("TimeRemaining");

timeRemaining=60;

document.getElementById("timeremainingValue").innerHTML=timeRemaining;

// hide gameover box_1
hide("gameOver");
// change start reset btn to reset
document.getElementById("startReset").innerHTML="Reset Game";

// start countdown
startCountdown();

// generate questions and multiple answers

generateQA();









}


}





// if we are playing change btn tio resest and
        // reload
      // if not playing then
      // set score to zero
          // show countdown box
            // start reducing time by 1s every seconds by loops
            // time left
            // yes----- Continuie
              // eles ==  game over and change btn text to reset
              // generate new questiona nd ansers


// if we click on answer box_1
      // if we are playgin
        // if answer is corect
            // yes
                // increase score by 1
                    // show correct box for 1 s
// generate new // QUESTION: then
// if answr is wrong geneatr wrong answr

// start coding here

for(i=1;i<5;i++){
  document.getElementById("box_"+i).onclick=function(){
    if (playing==true){
      if(this.innerHTML==correct_ans){
          // correct answer found
          score+=1;
          document.getElementById("score_value").innerHTML=score;
          // hide wrong box and show corect box
          hide("wrong");
          show("correct");
          setTimeout(function(){
            hide("correct")
          },1000);

          // generate new questions if answer is correct_ans

          generateQA();


        }
        else{
          hide("correct");
          show("wrong");
          setTimeout(function(){
            hide("wrong")
          },1000);


        }



  }
  }






}







// for functions





function startCountdown()
  {
    action = setInterval(function()
    {
    timeRemaining-=1;
    document.getElementById("timeremainingValue").innerHTML=timeRemaining;
    if (timeRemaining==0){
      document.getElementById("startReset").innerHTML="Start Game";
      stopCountdown();
      show("gameOver");
      document.getElementById('gameOver').innerHTML="<p> Game Over !</p>  <p>Your Score is "+score+" </p>";
      hide("timeRemaining");
      hide("correct");
      hide("wrong");


      playing=false;

    }


    }, 1000);
}

function stopCountdown(){
  clearInterval(action);
}

function hide(id)
{
  document.getElementById(id).style.display="none";

}

function show(id)
{
    document.getElementById(id).style.display="block";
}

// generate quesiosn and multiple answer
function generateQA(){
  x= 1+Math.round(Math.random()*9);
  y = 1+Math.round(Math.random()*9);

  correct_ans=x*y;
  document.getElementById("question").innerHTML=x+"x"+y;

  var correct_position = 1+Math.round(Math.random()*3);

  // fill one box with correct answer
  document.getElementById("box_"+correct_position).innerHTML=correct_ans;

  // fill oher with wrong answr
  var answers=[correct_ans];

  for(i=1;i<5;i++){
    if(i!=correct_position){
      var wrong_ans;
      do {
        wrong_ans=(1+Math.round(Math.random()*9))*(1+Math.round(Math.random()*9));

      } while (answers.indexOf(wrong_ans)>-1);




    document.getElementById("box_"+i).innerHTML=wrong_ans;
    answers.push(wrong_ans);
    }
  }


}
