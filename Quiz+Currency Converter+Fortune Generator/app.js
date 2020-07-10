

let question = document.querySelector("#question")
let ansA = document.querySelector("#qA")
let ansB = document.querySelector("#qB")
let ansC = document.querySelector("#qC")
let ansD = document.querySelector("#qD")

var score = 0
const myQuestions = [
    {
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich"
        },
        correctAnswer: "Brendan Eich"
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
            a: "Node.js",
            b: "TypeScript",
            c: "npm"
        },
        correctAnswer: "npm"
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
            a: "ESLint",
            b: "jQuery",
            c: "RequireJS",
        },
        correctAnswer: "ESLint"
    },
    {
        question: "Using _______ statement is how you test for a specific condition.",
        answers: {
            a: "Select",
            b: "If",
            c: "Switch",
        },
        correctAnswer: "If"
    }

];
let randomNum = Math.floor(Math.random()*myQuestions.length) 
let newQuestion = myQuestions[randomNum]
function questionGenerate(){
    
    console.log(newQuestion);
    question.innerHTML= newQuestion.question
    question.value= newQuestion.question
    ansA.innerHTML =newQuestion.answers.a
    ansA.value =newQuestion.answers.a
    ansB.innerHTML =newQuestion.answers.b
    ansB.value =newQuestion.answers.b
    ansC.innerHTML =newQuestion.answers.c
    ansC.value =newQuestion.answers.c
    
    
    
}


function ansA_clicked(){
   
    let ans = ansA.value
    checkAns(ans)
    
}
function ansB_clicked(){
   
    let ans = ansB.value
    checkAns(ans)
    
}
function ansC_clicked(){
    let ans = ansC.value
    checkAns(ans)
    
}

function checkAns(ans){
   
    
    
    console.log(newQuestion.correctAnswer);
    
    if(ans==newQuestion.correctAnswer){
        alert("correct");
        location.reload();
        // score++
        // setScore(true)
        // localStorage.setItem("score", score);
        // var score = localStorage.getItem("score");
        
        console.log(score);
        
        
       
    }
    else{
        alert('wrong')
        location.reload();
        // score--
        // localStorage.setItem("score", score);
        // var score = localStorage.getItem("score");
        
        console.log(score);
        

        
    }
    
    
}
