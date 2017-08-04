$(document).ready(function() {

        //TODO: Create variables used in the game
        var correctAnswers = 0;
        var incorrectAnswers = 0;
        var noAnswers = 0;
        var currentQuestion = 0;
        var question, choices,

            //TODO: Create a timer that begins the countdown after the "Action" button is pressed.
            $("#submit").click(function() {
                    var counter = 60;
                    var downloadTimer = setInterval(function() {
                            counter--;
                            document.getElementById("countdown").textContent = counter;
                            if (counter <= 0) 
                            	alert("Sorry you are out of time");
                            	clearInterval(downloadTimer);
                        }
                    }, 1000);
    //TODO: create an array for the questions and answers
    var questions = [{
            question: "Who was the first actor to be chosen as Indiana Jones?",
            choices: ["Harrison Ford", "Peter Coyote", "Tom Selleck", "Tim Matheson"],
            answer: 3
        }, {
            question: "Who directed to movie 'Three Men and a Baby'?",
            choices: ["Rob Reiner", "Leonard Nimoy", "Ron Howard", "Garry Marshall"],
            answer: 2
        },{
            question: "What film did Steven Spielberg submit for his college student film requirement",
            choices: ["ET", "Close Encounters of the Third Kind", "Minority Report", "Schindlers List"],
            answer: 4
        },{
            question: "When translated from Italian who is Mr. Kiss Kiss Bang Bang?"
            choices: ["James Bond", "Clint Eastwood", "Al Pacino", "Ethan Hunt"],
            answer: 1
    ]];


//TODO: Get data from the array
for (var i = 0; i < questions.length; i++) {
    var question = questions[i].question;
    console.log(question);

 };

 //TODO: Display questions and possible answers
    var options = questions[i].choices;
    document.body.appendChild(document.createElement("br"));
    var name = "radio + i";
    for (var opt in options) {

        var radioEle = document.createElement("input");
        radioEle.type = "radio";
        radioEle.value = options[opt];
        radioele.name = name;
        document.body.appendChild(radioEle);
        var label = document.createElement("Label");
        label.innerHTML = options[opt];
        document.body.appendChild(label);
        document.body.appendChild(document.createElement("br"));
    }

    document.body.appendChild(document.createElement("br"));
}


//Set up event listener for on click function



//Set condition that user cannot click any answers once the timer runs out.


//TODO: Create a function that keeps the user from selecting more than one answer

//compare player answers against the answers in the array 

//tally how many correct answers and store that number in the "correct" variable

//tally how many incorrect answers and store that number in the "incorrect" variable

//tally how many questions were not answered and store that in the "noAnswer" variable

//TODO: Display the correct, incorrect and no answer totals on the final page.

//TODO:  Reset Game
function resetGame() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();

};