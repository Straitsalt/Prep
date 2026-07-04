function generateDPP() {

    const exam = document.getElementById("exam").value;
    const subject = document.getElementById("subject").value;
    const chapter = document.getElementById("chapter").value;
    const topic = document.getElementById("topic").value;
    const difficulty = document.getElementById("difficulty").value;
    const questions = document.getElementById("questions").value;

    if (chapter === "") {
        alert("Please select a chapter.");
        return;
    }

    const prompt = `
Generate ${questions} original ${exam} ${subject} MCQs.

Chapter: ${chapter}

Topic: ${topic || "Entire Chapter"}

Difficulty: ${difficulty}

Rules:
1. Strictly follow the latest NEET/JEE syllabus.
2. Use NCERT concepts wherever applicable.
3. Each question must have 4 options (A, B, C, D).
4. Give the correct answer.
5. Give a short explanation.
6. Return clean formatting.
`;

    document.getElementById("result").innerHTML = `
        <h3>AI Prompt Ready ✅</h3>
        <pre>${prompt}</pre>
    `;
}