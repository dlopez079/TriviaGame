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
        count: countStartNumber,
        currentQuestion: 0,
        correct: 0,
        incorrect: 0,

        countdown: function (){
            //drecement counter
            //display counter on a page
            //run timeUp
        },

        loadQuestion: function(){

        },
        nextQuestion: function(){

        },
        timeUp: function(){

        },
        results: function(){

        },
        clicked: function(){

        }, 
        answerInCorrectly: function () {
            
        },
        answerInCorrectly: function(){

        },
        reset: function(){

        }
    }

    $(document).on("click", )  //that calls to reset the game function
    $(document).on("click", )  //that calls the clicked function
    $(document).on("click", )  //that calls the loadQuestion function.

})


    

    

    


