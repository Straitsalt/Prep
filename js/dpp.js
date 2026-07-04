// ==========================
// SUBJECT -> CHAPTER DATA
// ==========================

const chapters = {

  Biology: [
    "Cell: Structure and Function",
    "Biomolecules",
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
    "Gravitation",
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

// ==========================
// CHAPTER -> TOPIC DATA
// ==========================

const topics = {

  "Human Physiology": [
    "Breathing and Exchange of Gases",
    "Body Fluids and Circulation",
    "Excretory Products and their Elimination",
    "Locomotion and Movement",
    "Neural Control and Coordination",
    "Chemical Coordination and Integration"
  ],

  "Cell: Structure and Function": [
    "Cell Theory",
    "Prokaryotic Cell",
    "Eukaryotic Cell",
    "Cell Organelles",
    "Cell Cycle",
    "Mitosis",
    "Meiosis"
  ],

  "Kinematics": [
    "Motion in One Dimension",
    "Motion in Two Dimensions",
    "Relative Motion"
  ],

  "Atomic Structure": [
    "Bohr Model",
    "Quantum Numbers",
    "Electronic Configuration"
  ]

};

// ==========================
// LOAD CHAPTERS
// ==========================

function loadChapters() {

  const subject = document.getElementById("subject").value;
  const chapter = document.getElementById("chapter");

  chapter.innerHTML = "";

  if (!chapters[subject]) {
    chapter.innerHTML = "<option>Select Subject First</option>";
    return;
  }

  chapters[subject].forEach(function(item) {
    chapter.innerHTML += `<option>${item}</option>`;
  });

  loadTopics();

}

// ==========================
// LOAD TOPICS
// ==========================

function loadTopics() {

  const chapter = document.getElementById("chapter").value;
  const topic = document.getElementById("topic");

  topic.innerHTML = "";

  if (!topics[chapter]) {

    topic.innerHTML = "<option>Entire Chapter</option>";
    return;

  }

  topics[chapter].forEach(function(item) {

    topic.innerHTML += `<option>${item}</option>`;

  });

}

// ==========================
// GENERATE DPP
// ==========================

function generateDPP() {

const exam = document.getElementById("exam").value;
const subject = document.getElementById("subject").value;
const chapter = document.getElementById("chapter").value;
const topic = document.getElementById("topic").value;
const difficulty = document.getElementById("difficulty").value;
const questions = document.getElementById("questions").value;

document.getElementById("result").innerHTML = `
<h2>📄 DPP Details</h2>

<p><b>Exam:</b> ${exam}</p>
<p><b>Subject:</b> ${subject}</p>
<p><b>Chapter:</b> ${chapter}</p>
<p><b>Topic:</b> ${topic}</p>
<p><b>Difficulty:</b> ${difficulty}</p>
<p><b>Questions:</b> ${questions}</p>

<hr>

<h3>🤖 Ready to Generate AI DPP</h3>

<button onclick="generateAI()">
Generate with Gemini AI
</button>
`;
async function generateAI() {

const exam = document.getElementById("exam").value;
const subject = document.getElementById("subject").value;
const chapter = document.getElementById("chapter").value;
const topic = document.getElementById("topic").value;
const difficulty = document.getElementById("difficulty").value;
const questions = document.getElementById("questions").value;

const prompt = `
Generate ${questions} original ${exam} ${subject} MCQs.

Chapter: ${chapter}

Topic: ${topic}

Difficulty: ${difficulty}

Rules:
1. Strictly follow the latest NEET/JEE syllabus.
2. Use NCERT concepts.
3. Each question must have 4 options (A, B, C, D).
4. Give the correct answer after each question.
5. Give a short explanation.
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
"Unable to generate DPP.";

document.getElementById("result").innerHTML = `
<h2>📄 Generated DPP</h2>
<pre>${text}</pre>
`;

}

alert("Next step: Gemini AI will generate the DPP.");

}
}
  if (subject === "") {
    alert("Please select a subject.");
    return;
  }

  const prompt = `
Generate ${questions} original ${exam} MCQs.

Subject: ${subject}
Chapter: ${chapter}
Topic: ${topic}
Difficulty: ${difficulty}

Rules:
- Strictly follow the latest NEET/JEE syllabus.
- Use NCERT concepts wherever applicable.
- Provide 4 options.
- Give the correct answer.
- Give a short explanation.
`;

  document.getElementById("result").innerHTML = `
<h3>✅ AI Prompt Ready</h3>
<pre>${prompt}</pre>
`;

}