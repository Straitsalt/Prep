async function generateDPP() {

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
- Strictly follow the latest NEET/JEE syllabus.
- Use NCERT concepts wherever applicable.
- Each question must have 4 options.
- Include the correct answer and a short explanation.
`;

    document.getElementById("result").innerHTML = "⏳ Generating DPP...";

    const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
    });

    const data = await response.json();

    const text =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response from AI.";

    document.getElementById("result").innerHTML =
        "<pre>" + text + "</pre>";
}