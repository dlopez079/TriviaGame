$(document).ready(function() {
    console.log("JS Linked")

    //Insert Total Trivial Trivia in #banner.
    $("#banner").html("<h1>Total Trivial Trivia!</h1>");

    //establish global variables
    var card = $("#main");
    var countStartNumber = 30;
    var timer;

    var questions = [
        {
        question: "Who was the legendary Benedictine monk who invented champagne?",
        answers: ["1","2","3","4"],
        correctAnswers: "",
        }       
         
    ]

    //Create a game object that will hold all the logic of the game.
    var game = { 
        question: questions,
        counter: countStartNumber,
        currentQuestion: 0,
        correct: 0,
        incorrect: 0,

        countdown: function (){
            //decrement counter
            counter--;

            //display counter on a page
            $("#main").html("Time Remaining: " + counter);

            //run timeUp
            game.timeUp();
        
        },

        loadQuestion: function(){
            //set time variable
            game.counter=30; 

            //add question dynamically
            $("#ID").html(questions[i]);
            

            //for loop to go through questions
            for (i=0; i<questions.length; i++) {
                console.log(questions[I]);
            }
        },
        nextQuestion: function(){
            //set countdown

            //display counter

            //increment currentQuestion

            //run loadQuestion function
        },

        timeUp: function(){
            //clear Interval
            clearInterval(intervalId);

            //display on page

            //conditional - if your in current question or next question

        },

        results: function(){
            //clear Interval
            clearInterval(intervalId);

            //display results
            $("main").html(game.correctAnswers);
        },

        clicked: function(){
            //clear interval
            clearInterval(intervalId);
            
            //display results
            
        }, 
        answerInCorrectly: function () {
            //increment incorrect
            incorrect++;

            //display the right answer
            $("main").html(questions[i].correctAnswers);

            //condition to either go to results or go to next question

        },
        answerCorrectly: function(){
            //increment correct
            correct++;
            
            //display that they are correct
        },
        reset: function(){
            //reset function
        }
    }

    $(document).on("click", )  //that calls to reset the game function
    $(document).on("click", )  //that calls the clicked function
    $(document).on("click", )  //that calls the loadQuestion function.

})


    

    

    


