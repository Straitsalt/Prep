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