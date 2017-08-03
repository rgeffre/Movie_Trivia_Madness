$(document).ready(function() {

        //TODO: Create variables used in the game
        var correct = 0;
        var incorrect = 0;
        var noAnswer = 0;
        var quiz, question, choice, choices, chA, chB, chC, chD;

        //TODO: create an array for the questions and answers
        var questions = [{
                question: "Who was the first actor to be chosen as Indiana Jones",
                answer1: "Harrison Ford",
                answer2: "Peter Coyote",
                answer3: "Tom Selleck",
                answer4: "Tim Matheson",
                correctanswer: "C"
            },


            ["Who directed to movie 'Three Men and a Baby'", "Rob Reiner", "Leonard Nimoy", "Ron Howard", "Garry Marshall", "B"],
            ["What film did Steven Spielberg submit for his college student film requirement", "ET", "Close Encounters of the Third Kind", "Minority Report", "Schindlers List", "D"],
            ["When translated from Italian who is Mr. Kiss Kiss Bang Bang"
                "James Bond", "Clint Eastwood", "Al Pacino", "Ethan Hunt"
                "A"
            ]
        ];

        //TODO: Create a timer that begins the countdown after the "Action" button is pressed.
        $("#submit").click(function() {
                var counter = 60;
                setInterval(function() {
                        counter--;
                        if (counter >= 0) {
                            span = document.getElementById("countdown");
                            span.innerHTML = counter;
                        }
                    }
                    if (counter === = 0) {
                        alert("Sorry you are out of time");
                        clearInterval(counter);
                    }
                }, 1000);
        });



    //TODO: Get data from the array

    function get(x) {
        return document.getElementById(x); //how to do this in jquery?
    }

    //TODO: Display questions and possible answers



    function createQuestion()[
        quiz = get("triviaquiz");
        if (pos >= questions.length) {
            trivia
        }

        answers.innerHTML += < input type = "radio"
        name = "choices"
        value = "A" > "+chA+<br>";
        //Set condition that user cannot click any answers once the timer runs out.


        //TODO: Create a function that keeps the user from selecting more than one answer

        //compare player answers against the answers in the array 
        function checkAnswer() {
            choices = document.getElementByName("choices")
        }

        //tally how many correct answers and store that number in the "correct" variable

        //tally how many incorrect answers and store that number in the "incorrect" variable

        //tally how many questions were not answered and store that in the "noAnswer" variable

        //TODO: Display the correct, incorrect and no answer totals on the final page.

    });