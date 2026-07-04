function saveAccuracy() {

    const chapter = document.getElementById("chapter").value.trim();
    const correct = parseInt(document.getElementById("correct").value);
    const incorrect = parseInt(document.getElementById("incorrect").value);

    if (chapter === "" || isNaN(correct) || isNaN(incorrect)) {
        alert("Please fill all fields.");
        return;
    }

    const total = correct + incorrect;
    const accuracy = ((correct / total) * 100).toFixed(2);

    let records = JSON.parse(localStorage.getItem("accuracyRecords")) || [];

    records.push({
        chapter: chapter,
        correct: correct,
        incorrect: incorrect,
        accuracy: accuracy
    });

    localStorage.setItem("accuracyRecords", JSON.stringify(records));

    displayRecords();
}

function displayRecords() {

    const records = JSON.parse(localStorage.getItem("accuracyRecords")) || [];

    let html = "<h3>Saved Records</h3>";

    records.forEach(record => {
        html += `
        <p>
        <b>${record.chapter}</b><br>
        Correct: ${record.correct}<br>
        Incorrect: ${record.incorrect}<br>
        Accuracy: ${record.accuracy}%<br><br>
        </p>
        `;
    });

    document.getElementById("result").innerHTML = html;
}

displayRecords();