const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const noText = document.getElementById('no-text');
const questionsDiv = document.getElementById('questions');

let fontSize = 1;
let questionIndex = 0;
const questions = [
    "Bạn có chắc không?",
    "Thật sự không muốn đi chơi sao?",
    "Bạn không làm tôi buồn chứ?",
    "Bạn có muốn xem lại quyết định của mình không?"
];

yesButton.addEventListener('click', () => {
    alert('Tuyệt vời! Hẹn gặp bạn vào ngày 8/3 nhé!');
});

noButton.addEventListener('click', () => {
    noText.style.display = 'block';
    fontSize += 0.2;
    noText.style.fontSize = fontSize + 'em';

    if (questionIndex < questions.length) {
        const question = document.createElement('p');
        question.textContent = questions[questionIndex];
        questionsDiv.appendChild(question);
        questionIndex++;
    }
});