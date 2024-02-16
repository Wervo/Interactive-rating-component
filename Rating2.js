const selectedScore = localStorage.getItem('selectedScore');
const scoreElement = document.getElementById('score');
if (selectedScore) {
    scoreElement.textContent = selectedScore;
} else {
    scoreElement.textContent = 'No score selected';
}