$(document).ready(function() {
    console.log("JS Linked")

    //Insert Total Trivial Trivia in #banner.
    $("#banner").html("<h1>Total Trivial Trivia!</h1>");

    //establish global variables
    var ques = $("#quest");
    var clock = $("#timer");
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
            game.counter--;

            //I created a variable called clock which represents the section that I ID'ed as "timer" on index.html
            //The html method is going to put "Time Remaining: + game.counter" on the webpage. 
            //game.counter = counterStartNumber = 30
            clock.html("Time Remaining: " + game.counter);

            //If the count reaches 0, the application will run the function called timeup();
            if (game.counter === 0) {
                this.timeUp();
            }
            
        
        },

        loadQuestion: function(){
            //set time variable
            game.counter=30; 

            //add question dynamically
            card.html(questions[i]);
            

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
            clock.html("Times Up!!!");

            //Display Correct Answer
            ques.html();

            //conditional - if your in current question or next question
            if (this.currentQuestion === questions.length - 1){
                setTimeout(game.results, 3*1000);
            }
            else (
                setTimeout(this.nextQuestion, 3*1000)
            );
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


    

    

    


