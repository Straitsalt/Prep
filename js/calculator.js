function calculateScore() {

    const correct = parseInt(document.getElementById("correct").value);
    const incorrect = parseInt(document.getElementById("incorrect").value);

    if (isNaN(correct) || isNaN(incorrect)) {
        alert("Please enter both Correct and Incorrect answers.");
        return;
    }

    const total = correct + incorrect;
    const score = (correct * 4) - incorrect;
    const accuracy = (correct / total) * 100;

    document.getElementById("result").innerHTML =
        "<h2>Score: " + score + "</h2>" +
        "<h2>Accuracy: " + accuracy.toFixed(2) + "%</h2>" +
        "<h2>Total Attempted: " + total + "</h2>";
}