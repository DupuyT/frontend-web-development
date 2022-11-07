function quiz() {
    let score = 0;
    let question;
    let answer;
    let quiz_questions = [
        "How many moons does Earth have?",
        "How many moons does Saturn have?",
        "How many moons does Venus have?"
    ];
    let quiz_answers = [
        1,
        82,
        0
    ];
    //get total number of questions
    let totalQuestion = quiz_questions.length;
    for(count = 0; count < totalQuestion; count++){
        let num = Math.floor(Math.random() * quiz_questions.length);
        question = quiz_questions[num];
        console.log(count);
        console.log(num);
        answer = prompt(question);
        if (answer == quiz_answers[num]) {
            score++;
            alert("Correct!");
        } else alert("Wrong");
    }
    document.write(`<p>You got ${score} out of ${totalQuestion} questions correct.</p>`);
}

//# sourceMappingURL=index.6b989efa.js.map
