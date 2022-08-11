

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function createAnswerTable(orgQues, valAns, yourAns){

var answerTable = `<table>
    <caption>Question ${numAnswers + 1}</caption>
    <tr>
    <td>Original sentence</td>
    <td>${orgQues}</td>
    
    </tr>
    <tr>
    <td>Valid answer</td>
    <td>${valAns}</td>
    </tr>
    <tr>
        <td>Your answer</td>
        <td>${yourAns}</td>
    </tr>

    </table>`



return answerTable

}

function insertAnswerTable(currQuest, currValAns, yourAns) {

    var ansTable = createAnswerTable(currQuest, currValAns, yourAns)
    var newNode = document.createElement("span");
    newNode.innerHTML = ansTable;
    var elem = document.getElementById('answersBelowMe')
    elem.parentNode.insertBefore(newNode, elem.nextSibling);

}


function addNewQuestion() {

    var elem = document.getElementById('questionTextId')
    var currId = randomIds[numAnswers]
    var currQuestion = questionAnswers[currId][0]
    elem.innerHTML = currQuestion
}

function answerQuestion() {

    var elem = document.getElementById('answerForm')
    var answer = elem.value
    var currId = randomIds[numAnswers]
    var currQuestion = questionAnswers[currId][0]
    var currValAnswer = questionAnswers[currId][1]

    insertAnswerTable(currQuestion, currValAnswer, answer)
    numAnswers = ((questionAnswers.length - 1) > numAnswers) ? numAnswers + 1 : 0;
    elem.value = ""

    

    addNewQuestion()

}


var numAnswers = 0;
var randomIds = Array.from(Array(questionAnswers.length).keys())
shuffle(randomIds)
addNewQuestion()


