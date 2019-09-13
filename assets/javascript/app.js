console.log("JS Linked")

//Insert Total Trivial Trivia in #banner.


//establish global variables
var card = $("#quiz-area");
var countStartNumber = 5;
var timer;
var intervalId;


//CREATE QUESTION/ANSWER OBJECT*******
var questions = [
    { //QUESTION 1 Index of 0 
        question: "Who was the legendary Benedictine monk who invented champagne?",
        answers: ["1. ANS#1", "2. ANS#2", "ANS#3", "4.ANS#4"],
        correctAnswers: "",
    },

    { //QUESTION 2
        question: "QUESTION 2 INDEX OF 1",
        answers: ["1. ANS#1", "2. ANS#2", "3. ANS#3", "4.ANS#4"],
        correctAnswers: "",
    },

    { // QUESTION 3
        question: "QUESTION 3 INDEX OF 2",
        answers: ["1. ANS#1", "2. ANS#2", "3. ANS#3", "4.ANS#4"],
        correctAnswers: "",
    }

] //END OF QUESTIONS OBJECT******** 


//Create a game object that will hold all the logic of the game.
var game = {
    //Property > Question : Questions Array
    questions: questions,

    //Property > counter : CounterStartNumber (Global variable that equals 30, the number in which the time will begin)
    counter: countStartNumber,
    currentQuestion: 0,
    correct: 0,
    incorrect: 0,

    countdown: function () {
        //decrement counter
        // game.counter--;  I can use this as well. 
        // console.log(game.counter);
        game.counter--
        //I created a variable called clock which represents the section that I ID'ed as "timer" on index.html
        //The html method is going to put "Time Remaining: + game.counter" on the webpage. 
        //game.counter = counterStartNumber = 30
        $("#counter-number").empty()
        $("#counter-number").html(game.counter);

        //If the count reaches 0, the application will run the function called timeup();
        if (game.counter === 0) {
            $("#counter-number").html("Time is Up!");
            // this.timeUp;
            clearInterval(timer);
            game.counter = 5;
        }
    },


        loadQuestion: function () {
        //set time variable.  When we load the question the first thing that should be set is the clock or countdown.
        //The timer will have an interval of 1 sec
        timer = setInterval(game.countdown, 1000);
            console.log(card)
        //add question dynamically
        $("#quiz-area").html("<h2>" + questions[game.currentQuestion].question + "</h2>");

        //for loop to go through questions
        for (i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            $("#quiz-area").append("<button class='answers-btn' id='btn' dataName='" + questions[this.currentQuestion].answers[i] + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
        }
    },


    nextQuestion: function () {
        //set countdown
        game.counter = countStartNumber

        //display counter


        //increment currentQuestion
        this.currentQuestion++;

        //run loadQuestion function
        ques.html(this.currentQuestion);
    },


    timeUp: function () {
        //clear Interval
        clearInterval(timer);

        //display on page
        $("#counter-number").html("Times Up!!!");

        //Display Correct Answer
        card.html();

        //conditional - if your in current question or next question
        if (this.currentQuestion === questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        }
        else (
            setTimeout(this.nextQuestion, 3 * 1000)
        );
    },


    results: function () {
        //clear Interval
        clearInterval(timer);

        //display results
        card.html(game.correctAnswers);
    },

    clicked: function () {
        //clear interval
        clearInterval(timer);

        //display results
        card.html(this.results);
    },
    answerInCorrectly: function () {
        //increment incorrect
        incorrect++;

        //display the right answer
        ques.html(questions[i].correctAnswers);
        //or "ques.html(question.correctAnswers)"

        //ondition to either go to results or go to next question
        // if(???!== this.question[i].correctAnswers) { // Current question index and philly

        // }
    },
    answerCorrectly: function () {
        //increment correct
        correct++;

        //display that they are correct
    },
    reset: function () {
        //reset function
    }
}



// $("#btn1").on("click", game.reset)  //that calls to reset the game function
// $("#").on("click", game.clicked)  //that calls the clicked function



$(document).on("click", "#start", function () {
    $("#container").prepend("<h2> Time Remaining: <span id='counter-number'></span> Seconds</h2>");
    game.loadQuestion();
    console.log(countStartNumber)
})  //that calls the loadQuestion function.











