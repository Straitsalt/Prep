


// ======================
// Load Chapters
// ======================

function loadChapters(){

    const subject=document.getElementById("subject").value;

    const chapter=document.getElementById("chapter");

    chapter.innerHTML="";

    if(!chapters[subject]){
        chapter.innerHTML="<option>Select Subject First</option>";
        return;
    }

    chapters[subject].forEach(function(item){

        chapter.innerHTML+=`<option value="${item}">${item}</option>`;

    });

    loadTopics();

}

// ======================
// Load Topics
// ======================

function loadTopics(){

    const chapter=document.getElementById("chapter").value;

    const topic=document.getElementById("topic");

    topic.innerHTML="";

    if(!topics[chapter]){

        topic.innerHTML="<option>Entire Chapter</option>";

        return;

    }

    topics[chapter].forEach(function(item){

        topic.innerHTML+=`<option value="${item}">${item}</option>`;

    });

}

// ======================
// Generate DPP
// ======================

function generateDPP() {

    const exam = document.getElementById("exam").value;
    const subject = document.getElementById("subject").value;
    const chapter = document.getElementById("chapter").value;
    const topic = document.getElementById("topic").value;
    const difficulty = document.getElementById("difficulty").value;
    const questions = document.getElementById("questions").value;

    // Save DPP history
    const dpp = {
        exam,
        subject,
        chapter,
        topic,
        difficulty,
        questions,
        date: new Date().toLocaleString()
    };

    const currentUser = JSON.parse(localStorage.setItem(key, JSON.stringify(history));;

const key = `dppHistory_${currentUser.email}`;

let history = JSON.parse(localStorage.getItem(key)) || [];

    history.push(dpp);
    localStorage.setItem("dppHistory", JSON.stringify(history));

    document.getElementById("result").innerHTML = `
        <h2>📄 DPP Ready</h2>

        <p><b>Exam:</b> ${exam}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Chapter:</b> ${chapter}</p>
        <p><b>Topic:</b> ${topic}</p>
        <p><b>Difficulty:</b> ${difficulty}</p>
        <p><b>Questions:</b> ${questions}</p>

        <br>

        <button onclick="generateAI()">
            🤖 Generate with Gemini AI
        </button>

        <br><br>

        <button onclick="location.href='history.html'">
            📚 View History
        </button>
    `;
}

// ======================
// Gemini AI
// ======================

async function generateAI() {

    const exam = document.getElementById("exam").value;
    const subject = document.getElementById("subject").value;
    const chapter = document.getElementById("chapter").value;
    const topic = document.getElementById("topic").value;
    const difficulty = document.getElementById("difficulty").value;
    const questions = document.getElementById("questions").value;

    document.getElementById("result").innerHTML =
    "<h2>⏳ Generating your DPP...</h2>";

    const prompt = `
Generate ${questions} original ${exam} MCQs.

Subject: ${subject}
Chapter: ${chapter}
Topic: ${topic}
Difficulty: ${difficulty}

Rules:
- Strictly follow the latest NEET/JEE syllabus.
- Use NCERT concepts.
- Each question should have 4 options.
- Give the correct answer.
- Give a short explanation.
`;

    try {

        const response = await fetch("/api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt })
        });

        const data = await response.json();

console.log(data);
alert(JSON.stringify(data));

        const text =
            data.candidates?.[0]?.content?.parts?.[0]?.text ||
            "No response from Gemini.";

        document.getElementById("result").innerHTML = `
            <h2>📄 Generated DPP</h2>
            <pre>${text}</pre>
        `;

    } catch (error) {

        document.getElementById("result").innerHTML = `
            <h2>❌ Error</h2>
            <p>${error.message}</p>
        `;

    }

}