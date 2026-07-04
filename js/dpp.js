// ======================
// Chapters
// ======================

const chapters = {
  Biology: [
    "Cell: Structure and Function",
    "Human Physiology",
    "Plant Physiology",
    "Genetics and Evolution",
    "Biotechnology",
    "Ecology"
  ],

  Physics: [
    "Kinematics",
    "Laws of Motion",
    "Work, Energy and Power",
    "Current Electricity",
    "Electrostatics",
    "Modern Physics"
  ],

  Chemistry: [
    "Atomic Structure",
    "Chemical Bonding",
    "Thermodynamics",
    "Equilibrium",
    "Organic Chemistry"
  ],

  Mathematics: [
    "Relations and Functions",
    "Limits",
    "Differentiation",
    "Integration",
    "Probability"
  ]
};

// ======================
// Topics
// ======================

const topics = {

  "Human Physiology":[
    "Breathing and Exchange of Gases",
    "Body Fluids and Circulation",
    "Excretory Products and their Elimination",
    "Locomotion and Movement",
    "Neural Control and Coordination",
    "Chemical Coordination and Integration"
  ],

  "Cell: Structure and Function":[
    "Cell Theory",
    "Cell Organelles",
    "Cell Cycle",
    "Mitosis",
    "Meiosis"
  ],

  "Plant Physiology":[
    "Photosynthesis",
    "Respiration",
    "Mineral Nutrition",
    "Transport in Plants"
  ],

  "Genetics and Evolution":[
    "Mendelian Genetics",
    "Molecular Basis of Inheritance",
    "Evolution"
  ],

  "Kinematics":[
    "Motion in One Dimension",
    "Motion in Two Dimensions",
    "Projectile Motion"
  ],

  "Atomic Structure":[
    "Bohr Model",
    "Quantum Numbers",
    "Electronic Configuration"
  ]

};

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

    let history = JSON.parse(localStorage.getItem("dppHistory")) || [];
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