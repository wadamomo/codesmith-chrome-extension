$(document).ready(function() {

    console.log("READY!");
    renderCard("What is 1 + 1?", ["3", "Apple", "2", "Ten"], 2);

});

function renderCard(question, answers, correctIndex) {

    $('#q-header').text(question);
    
    for (let i = 0; i < answers.length; i++) {
        const questionNode = $('<div id="q-answer"></div>');
        questionNode.text(answers[i]);
        $('#q-answer-container').append(questionNode);
    }
}