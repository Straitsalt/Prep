function generateDPP() {

    const exam = document.getElementById("exam").value;
    const subject = document.getElementById("subject").value;
    const chapter = document.getElementById("chapter").value;
    const topic = document.getElementById("topic").value;
    const difficulty = document.getElementById("difficulty").value;
    const questions = document.getElementById("questions").value;

    if (chapter.trim() === "") {
        alert("Please enter a chapter name.");
        return;
    }

    alert(
        "Generating DPP...\n\n" +
        "Exam: " + exam + "\n" +
        "Subject: " + subject + "\n" +
        "Chapter: " + chapter + "\n" +
        "Topic: " + (topic || "All Topics") + "\n" +
        "Difficulty: " + difficulty + "\n" +
        "Questions: " + questions
    );

}